import PrayerCard from '@/components/PrayerCard';
import { Spacing } from '@/constants/theme';
import { prayers } from '@/data/prayers';
import { useTheme } from '@/hooks/use-theme';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: theme.background }}
      contentContainerStyle={[
        styles.container,
        { paddingBottom: Spacing.md + insets.bottom },
      ]}
    >
      <Text style={[styles.heading, { color: theme.primary }]}>
        My Daily Prayers
      </Text>

      <Text style={[styles.count, { color: theme.muted }]}>
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
    padding: Spacing.md,
    gap: 12,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 16,
    marginBottom: 8,
  },
});
