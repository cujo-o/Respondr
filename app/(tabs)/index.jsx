import { Image } from 'expo-image';
import { Button, Platform, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';



export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="Report Incident" onPress={() => navigation.navigate('Report')} />
      <Button title="Instant Help" onPress={() => navigation.navigate('InstantHelp')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    padding: 20
  }
});
