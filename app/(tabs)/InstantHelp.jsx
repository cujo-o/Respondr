import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Linking, Platform, Clipboard } from 'react-native';
//import * as Clipboard from 'expo-clipboard'; // use this with Expo

export default function InstantHelpScreen() {
  const ussdCode = '*123*911#';

    const handleHelpPress = () => {
    Clipboard.setString(ussdCode);

    // Simulate a call (may open dialer depending on phone permissions)
    Linking.openURL(`tel:${ussdCode}`)
      .catch(() => {
        Alert.alert('Copied to Clipboard', 'USSD code copied. Please dial it manually.');
      });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>🚨 Instant Help</Text>
      <Text style={styles.description}>
        In emergencies, tap the button below. We’ll copy a USSD code and open your dialer.
      </Text>

      <TouchableOpacity style={styles.helpButton} onPress={handleHelpPress}>
        <Text style={styles.buttonText}>📞 Tap for Help</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        This uses your phone's dialer. Make sure your SIM supports USSD commands.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef6f6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF3B30',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 32,
  },
  helpButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 16,
    shadowColor: '#FF3B30',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  note: {
    marginTop: 40,
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
