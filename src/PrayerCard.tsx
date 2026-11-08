
import type { Prayer } from '@/types';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type PrayerCardProps = {
  prayer: Prayer;
};

export default function PrayerCard({ prayer }: PrayerCardProps) {
  return (
    <Pressable
      onPress={() => console.log('Open', prayer.id)}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
    >
      <Image
        source={{ uri: prayer.photoUrl }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.title}>{prayer.name}</Text>

        <Text style={styles.details}>
          {prayer.description} · {prayer.category}
        </Text>

        <Text style={styles.status}>
          {prayer.completed ? 'Completed' : 'Not completed'}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#E6EEF7',
  },
  pressed: {
    opacity: 0.6,
  },
  image: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  status: {
    fontSize: 14,
    marginTop: 6,
    color: '#176B40',
  },
});
