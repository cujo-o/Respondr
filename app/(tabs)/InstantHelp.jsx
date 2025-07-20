import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Linking, Clipboard } from 'react-native';
// import Clipboard from '@react-native-clipboard/clipboard';

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
      <Text style={styles.info}>
        Tap the button below to instantly request help. It will copy a USSD code and open your dialer.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleHelpPress}>
        <Text style={styles.buttonText}>🚨 Instant Help</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: '#444'
  },
  button: {
    backgroundColor: '#FF3B30',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  }
});
