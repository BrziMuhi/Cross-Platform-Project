import { FontSize, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { Prayer } from '@/types';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type PrayerCardProps = {
  prayer: Prayer;
};

export default function PrayerCard({ prayer }: PrayerCardProps) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={() => console.log('Open', prayer.id)}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: theme.card, borderColor: theme.border },
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: prayer.photoUrl }}
          style={styles.image}
          resizeMode="cover"
        />

        <Text
          style={[
            styles.badge,
            { backgroundColor: theme.primary, color: theme.onPrimary },
          ]}
        >
          {prayer.category === 'obligatory' ? 'Obligatory' : 'Custom'}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>
          {prayer.name}
        </Text>

        <Text style={[styles.details, { color: theme.muted }]}>
          {prayer.description}
        </Text>

        <Text style={[styles.status, { color: theme.primary }]}>
          {prayer.completed ? 'Completed' : 'Not completed'}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.md,
    borderWidth: 1,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.6,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  badge: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.pill,
    fontSize: FontSize.small,
    fontWeight: '600',
    overflow: 'hidden',
  },
  content: {
    padding: Spacing.md,
    gap: Spacing.xs,
  },
  title: {
    fontSize: FontSize.title,
    fontWeight: 'bold',
  },
  details: {
    fontSize: FontSize.small,
  },
  status: {
    fontSize: FontSize.small,
    fontWeight: '600',
  },
});
