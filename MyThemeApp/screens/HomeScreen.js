import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome back, Eric Atsu</Text>
      <Text style={styles.sectionTitle}>TopupReceiveSent Loan</Text>
      <View style={styles.transaction}>
        <Text style={styles.transactionText}>$300 Money Transfer</Text>
        <Text style={styles.transactionDetail}>- $88 Grocery Shopping</Text>
        <Text style={styles.transactionDetail}>- $5.99 Apple Store Entertainment</Text>
        <Text style={styles.transactionDetail}>- $12.99 Spotify Music</Text>
      </View>
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  transaction: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  transactionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  transactionDetail: {
    fontSize: 14,
  },
});
