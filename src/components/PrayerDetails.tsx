
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import type { Prayer } from '@/types';

type PrayerDetailsProps = {
  prayer: Prayer;
};

export default function PrayerDetails({
  prayer,
}: PrayerDetailsProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: prayer.photoUrl }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.title}>{prayer.name}</Text>

      <View style={styles.info}>
        <Text>ID: {prayer.id}</Text>
        <Text>User: {prayer.userId}</Text>
        <Text>Category: {prayer.category}</Text>
        <Text>Date: {prayer.date}</Text>
        <Text>Description: {prayer.description}</Text>
        <Text>
          Status: {prayer.completed ? 'Completed' : 'Not completed'}
        </Text>

        {prayer.notes ? (
          <Text>Notes: {prayer.notes}</Text>
        ) : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
    backgroundColor: '#F5F8F6',
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#176B40',
  },
  info: {
    backgroundColor: '#E6EEF7',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
});
