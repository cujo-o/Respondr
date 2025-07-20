import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { createClient } from '@supabase/supabase-js';

// ✅ Your Supabase credentials
const supabaseUrl = 'https://zllenqslszyocxhprhea.supabase.co'; // Replace with your URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsbGVucXNsc3p5b2N4aHByaGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5NDg4NTEsImV4cCI6MjA2ODUyNDg1MX0.zY-nLw44ZQ5nQlvCRDqpA0-XMCDlgTfTpIQMKb-FMCQ'; // Replace with your anon key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function ReportScreen() {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async () => {
    if (!selectedIssue && !description) {
      Alert.alert('Missing Information', 'Please select or describe the issue.');
      return;
    }

    // 🚀 Insert report into Supabase
    const { data, error } = await supabase.from('Reports').insert([
      {
        issue: selectedIssue,
        description: description,
        location: location
      }
    ]);

    if (error) {
      Alert.alert('Error', 'Could not send report. Please try again.');
      console.error(error);
    } else {
      Alert.alert('Report Sent', 'Thank you for your report. Authorities will respond shortly.');
      setSelectedIssue('');
      setDescription('');
      setLocation('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Issue</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={selectedIssue}
          onValueChange={(itemValue) => setSelectedIssue(itemValue)}
        >
          <Picker.Item label="Select an option..." value="" />
          <Picker.Item label="Robbery" value="Robbery" />
          <Picker.Item label="Fire Outbreak" value="Fire" />
          <Picker.Item label="Accident" value="Accident" />
          <Picker.Item label="Assault" value="Assault" />
          <Picker.Item label="Kidnapping" value="Kidnapping" />
        </Picker>
      </View>

      <Text style={styles.label}>Description (optional)</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Add any extra details..."
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Phase 4, Kubwa, Abuja"
        value={location}
        onChangeText={setLocation}
      />

      <Button title="Submit Report" onPress={handleSubmit} color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    gap: 10
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    minHeight: 50,
    marginBottom: 10,
  },
});
