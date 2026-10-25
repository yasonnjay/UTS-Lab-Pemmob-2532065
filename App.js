import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import InfoCard from './src/components/InfoCard';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Mohammad Yassin Ghaniy', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Dzaky Alfarisi', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Angelo Petra', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Aziz Fitrah', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Billy Syahputra', prodi: 'Sistem Informasi' },
];

export default function App() {
  const [keyword, setKeyword] = useState('');

  const hasil = DAFTAR_MAHASISWA.filter((m) =>
    m.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={hasil}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <Text style={styles.heading}>Soal 1: InfoCard</Text>
            <InfoCard
              title="Laporan Jobsheet 3"
              status="selesai"
              onPress={() => Alert.alert('Detail', 'Laporan Jobsheet 3 sudah selesai')}
            />
            <InfoCard
              title="Project Akhir"
              status="proses"
              onPress={() => Alert.alert('Detail', 'Project Akhir masih dikerjakan')}
            />

            <Text style={styles.heading}>Soal 2: Direktori Mahasiswa</Text>
            <TextInput
              style={styles.input}
              placeholder="Cari nama mahasiswa..."
              value={keyword}
              onChangeText={setKeyword}
            />
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.kosong}>Data tidak ditemukan!</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f4f6', padding: 16, paddingTop: 40 },
  heading: { fontSize: 20, fontWeight: 'bold', marginVertical: 12 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  item: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  nama: { fontWeight: 'bold', fontSize: 16 },
  kosong: { textAlign: 'center', marginTop: 20, color: 'gray' },
});