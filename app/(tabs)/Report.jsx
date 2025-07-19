import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function ReportScreen() {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    if (!selectedIssue && !description) {
      Alert.alert('Missing Information', 'Please select or describe the issue.');
      return;
    }

    // Simulated report submission
    Alert.alert('Report Sent', 'Thank you for your report. Authorities will respond shortly.');

    // Reset form
    setSelectedIssue('');
    setDescription('');
    setLocation('');
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
