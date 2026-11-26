import PrayerCard from '@/components/PrayerCard';
import { FontSize, Radius, Spacing } from '@/constants/theme';
import { prayers } from '@/data/prayers';
import { useTheme } from '@/hooks/use-theme';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const columns = width >= 900 ? 3 : width >= 600 ? 2 : 1;
  const cardWidth = (width - 2 * Spacing.md - (columns - 1) * Spacing.md) / columns;

  const completed = prayers.reduce(
    (total, prayer) => total + (prayer.completed ? 1 : 0),
    0
  );

  const summary = [
    { label: 'Total', value: prayers.length },
    { label: 'Completed', value: completed },
    { label: 'Pending', value: prayers.length - completed },
  ];

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

      <View style={styles.summaryRow}>
        {summary.map((item) => (
          <View
            key={item.label}
            style={[
              styles.summaryBox,
              { backgroundColor: theme.card, borderColor: theme.border },
            ]}
          >
            <Text style={[styles.summaryValue, { color: theme.text }]}>
              {item.value}
            </Text>
            <Text style={[styles.summaryLabel, { color: theme.muted }]}>
              {item.label}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.cardGrid}>
        {prayers.map((prayer) => (
          <PrayerCard
            key={prayer.id}
            prayer={prayer}
            style={{ width: cardWidth }}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.md,
    gap: Spacing.md,
  },
  heading: {
    fontSize: FontSize.hero,
    fontWeight: 'bold',
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  summaryBox: {
    flex: 1,
    minWidth: 0,
    padding: Spacing.sm,
    gap: Spacing.xs,
    borderWidth: 1,
    borderRadius: Radius.md,
    alignItems: 'center',
  },
  summaryValue: {
    fontSize: FontSize.hero,
    fontWeight: 'bold',
  },
  summaryLabel: {
    fontSize: FontSize.small,
    textAlign: 'center',
  },
});
