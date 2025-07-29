import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const handleDownload = () => {
    Linking.openURL('https://github.com/cujo-o/Respondr'); // Replace with your real download or repo link
  };

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Respondr</Text>
        <Text style={styles.heroTagline}>Your Fastest Link to Safety, Help & Information</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Report')}>
            <Text style={styles.buttonText}>Report Emergency</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Insurance Help</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Safety Tips */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🛡️ Stay Safe, Stay Informed</Text>
        {[
          'What to do in case of fire',
          'How to report anonymously',
          'Basic first aid tips',
          'Recognizing mental health emergencies'
        ].map((tip, i) => (
          <Text key={i} style={styles.paragraph}>• {tip}</Text>
        ))}
      </View>

      {/* Insurance Help */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💼 Protecting What Matters</Text>
        <Text style={styles.paragraph}>
          Respondr connects you to affordable emergency insurance services that cover health emergencies, accidents, and ambulance support.
        </Text>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>Learn More</Text>
        </TouchableOpacity>
      </View>

      {/* Real Life Stories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📖 Why Respondr Matters</Text>
        <Text style={styles.quote}>
          “When I saw someone collapse, Respondr helped me report quickly and get help in minutes.”
        </Text>
        <Text style={styles.quote}>
          “I used the app to alert fire services before things got worse. It saved lives.”
        </Text>
      </View>

      {/* Emergency Numbers */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>☎️ Emergency Contacts</Text>
        {[
          '🚓 Police: 112 or 199',
          '🔥 Fire: 122',
          '🚑 Ambulance: 177',
          '🧠 Mental Health: 0800-123-4567'
        ].map((num, i) => (
          <Text key={i} style={styles.paragraph}>{num}</Text>
        ))}
      </View>

      {/* Educational Resources */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎥 Learn to Save Lives</Text>
        <Text style={styles.paragraph}>
          Explore videos and blogs to better understand how to respond to emergencies and help your community.
        </Text>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>Watch Video</Text>
        </TouchableOpacity>
      </View>

      {/* Final CTA */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🙌 Be the First to Respond</Text>
        <Text style={styles.paragraph}>
          In an emergency, the right response can save a life. Let’s build safer communities together.
        </Text>
        <TouchableOpacity onPress={handleDownload} style={styles.button}>
          <Text style={styles.buttonText}>View on GitHub</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    padding: 20
  },
  hero: {
    backgroundColor: '#004aad',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20
  },
  heroTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  heroTagline: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15
  },
  button: {
    backgroundColor: '#ffaa00',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginVertical: 10
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  section: {
    marginBottom: 25
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#003366'
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5
  },
  quote: {
    fontStyle: 'italic',
    backgroundColor: '#e0eaff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8
  },
  linkButton: {
    marginTop: 8,
    alignSelf: 'flex-start'
  },
  linkText: {
    color: '#004aad',
    textDecorationLine: 'underline'
  }
});
