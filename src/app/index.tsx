
import PrayerCard from '@/components/PrayerCard';
import { prayers } from '@/data/prayers';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>My Daily Prayers</Text>

      <Text style={styles.count}>
        {prayers.length} prayer records
      </Text>

      {prayers.map((prayer) => (
        <PrayerCard key={prayer.id} prayer={prayer} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    backgroundColor: '#F5F8F6',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#176B40',
  },
  count: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
});
