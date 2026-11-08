
export type PrayerCategory = 'obligatory' | 'custom' | 'qada';

export type Prayer = {
  id: string;
  userId: string;
  name: string;
  category: PrayerCategory;
  date: string;
  completed: boolean;
  description: string;
  photoUrl: string;
  notes?: string;
};
