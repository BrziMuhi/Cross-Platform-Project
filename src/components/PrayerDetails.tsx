import { FontSize, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { Prayer } from '@/types';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type PrayerDetailsProps = {
  prayer: Prayer;
};

export default function PrayerDetails({ prayer }: PrayerDetailsProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const fields = [
    { label: 'ID', value: prayer.id },
    { label: 'User', value: prayer.userId },
    { label: 'Category', value: prayer.category },
    { label: 'Date', value: prayer.date },
    { label: 'Description', value: prayer.description },
    { label: 'Status', value: prayer.completed ? 'Completed' : 'Not completed' },
    ...(prayer.notes ? [{ label: 'Notes', value: prayer.notes }] : []),
  ];

  return (
    <ScrollView
      style={{ backgroundColor: theme.background }}
      contentContainerStyle={[
        styles.container,
        { paddingBottom: Spacing.md + insets.bottom },
      ]}
    >
      <View style={styles.content}>
        <Image
          source={{ uri: prayer.photoUrl }}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={[styles.title, { color: theme.primary }]}>
          {prayer.name}
        </Text>

        <View style={[
          styles.info,
          { backgroundColor: theme.card, borderColor: theme.border },
        ]}>
          {fields.map((field) => (
            <View key={field.label} style={styles.row}>
              <Text style={[styles.label, { color: theme.muted }]}>
                {field.label}
              </Text>
              <Text style={[styles.value, { color: theme.text }]}>
                {field.value}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.md,
  },
  content: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    gap: Spacing.md,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: Radius.md,
  },
  title: {
    fontSize: FontSize.hero,
    fontWeight: 'bold',
  },
  info: {
    padding: Spacing.md,
    borderRadius: Radius.md,
    borderWidth: 1,
    gap: Spacing.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.sm,
  },
  label: {
    fontSize: FontSize.body,
    flexShrink: 1,
  },
  value: {
    fontSize: FontSize.body,
    flexShrink: 1,
    textAlign: 'right',
  },
});
