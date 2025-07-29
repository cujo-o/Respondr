import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { createClient } from '@supabase/supabase-js';

// Supabase setup
const supabase = createClient(
  'https://zllenqslszyocxhprhea.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsbGVucXNsc3p5b2N4aHByaGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5NDg4NTEsImV4cCI6MjA2ODUyNDg1MX0.zY-nLw44ZQ5nQlvCRDqpA0-XMCDlgTfTpIQMKb-FMCQ'
);

export default function ReportScreen() {

  const getandrioidplaceholdercolor = () => {
    Platform.OS == 'android'? '#000000' : '#999999'
  }

  const [selectedIssue, setSelectedIssue] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async () => {
    if (!selectedIssue && !description) {
      Alert.alert('Missing Information', 'Please select or describe the issue.');
      return;
    }

    const { error } = await supabase.from('Reports').insert([
      { issue: selectedIssue, description, location }
    ]);

    if (error) {
      Alert.alert('Error', 'Could not send report. Please try again.');
      console.error(error);
    } else {
      Alert.alert('✅ Report Sent', 'Thank you. Responders have been alerted.');
      setSelectedIssue('');
      setDescription('');
      setLocation('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📋 Report an Incident</Text>

      <Text style={styles.label}>Issue Type</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedIssue}
          onValueChange={(itemValue) => setSelectedIssue(itemValue)}
        >
          <Picker.Item label="Select an issue..." value="" />
          <Picker.Item label="Robbery" value="Robbery" />
          <Picker.Item label="Fire Outbreak" value="Fire" />
          <Picker.Item label="Accident" value="Accident" />
          <Picker.Item label="Assault" value="Assault" />
          <Picker.Item label="Kidnapping" value="Kidnapping" />
        </Picker>
      </View>

      <Text style={styles.label}>Extra Description (optional)</Text>
      <TextInput
        style={[styles.input, { minHeight: 80 }]}
        multiline
        placeholder="e.g. It happened near the old market road..."
        placeholderTextColor={getandrioidplaceholdercolor()}
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Phase 4, Kubwa, Abuja"
        placeholderTextColor={getandrioidplaceholdercolor()}
        value={location}
        onChangeText={setLocation}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>🚨 Submit Report</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF3B30',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: 12,
    marginBottom: 6,
    color: '#333',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  submitButton: {
    marginTop: 24,
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
