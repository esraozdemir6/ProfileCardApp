import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  const [theme, setTheme] = useState('light'); // ileride dark da ekleyeceğiz
  const currentTheme = COLORS[theme];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.bg },
      ]}
    >
      <View style={styles.card}>
        <Text
          style={[
            styles.title,
            { color: currentTheme.text },
          ]}
        >
          Profile Card
        </Text>
        <Text
          style={[
            styles.subtitle,
            { color: currentTheme.text },
          ]}
        >
          This is where your profile content will go.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: SPACING.lg,
    borderRadius: RADII.lg,
    backgroundColor: COLORS.light.card, // şimdilik light baz alınabilir
    // gölgeyi ileride platforma göre ekleyebiliriz
    shadowColor: COLORS.light.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    minWidth: 260,
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    textAlign: 'center',
  },
});
