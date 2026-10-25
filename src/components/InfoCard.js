import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const isSelesai = status === 'selesai';
  const warna = isSelesai ? '#2e9e4f' : '#f59e0b'; // hijau / oranye

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={[styles.badge, { backgroundColor: warna }]}>
        <Text style={styles.badgeText}>{status}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  badgeText: { color: '#fff', fontWeight: '600' },
  button: {
    backgroundColor: '#1e40af',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600' },
});