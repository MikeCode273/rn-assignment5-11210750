import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Settings</Text>
      <Text style={styles.option}>Change Password</Text>
      <Text style={styles.option}>Privacy Policy</Text>
      <Text style={styles.option}>Theme</Text>
      <Text style={styles.option}>Language</Text>
      <Text style={styles.option}>Contact Us</Text>
      <Text style={styles.option}>My Profile</Text>
      <Button title="Go back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    fontSize: 18,
    marginBottom: 10,
  },
});
