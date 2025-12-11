import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  const [theme, setTheme] = useState('light');
  const [isFollowing, setIsFollowing] = useState(false);   
  const [isExpanded, setIsExpanded] = useState(false);    

  const currentTheme = COLORS[theme];

  const { width } = useWindowDimensions();
  const isLargeScreen = width > 500;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleFollow = () => {
    setIsFollowing(prev => !prev);
  };

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.bg },
      ]}
    >
      {/* Theme Toggle Button */}
      <Pressable onPress={toggleTheme} style={styles.themeToggle}>
        <Ionicons
          name={theme === 'light' ? 'moon' : 'sunny'}
          size={28}
          color={currentTheme.text}
        />
      </Pressable>

      {/* Profile Card  */}
      <Pressable
        style={[
          styles.card,
          {
            backgroundColor: currentTheme.card,
            padding: isLargeScreen ? SPACING.xl : SPACING.lg,
            width: isLargeScreen ? '60%' : '85%',
          },
        ]}
        onPress={toggleExpand}
      >
        <Ionicons
          name="person-circle-outline"
          size={isLargeScreen ? 100 : 80}
          color={currentTheme.text}
        />

        <Text
          style={[
            styles.name,
            { color: currentTheme.text },
          ]}
        >
          John Doe
        </Text>

        <Text
          style={[
            styles.role,
            { color: currentTheme.text },
          ]}
        >
          Mobile Developer
        </Text>

        {/*  Ek profil bilgileri */}
        {isExpanded && (
          <>
            <View style={styles.infoRow}>
              <Ionicons
                name="location-outline"
                size={18}
                color={currentTheme.text}
              />
              <Text
                style={[
                  styles.infoText,
                  { color: currentTheme.text },
                ]}
              >
                Istanbul, Turkey
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Ionicons
                name="information-circle-outline"
                size={18}
                color={currentTheme.text}
              />
              <Text
                style={[
                  styles.bioText,
                  { color: currentTheme.text },
                ]}
              >
                Mobile app developer intern who is open to work.
              </Text>
            </View>
          </>
        )}

        {/* Like Button: action butonları */}
        <View style={styles.actionsRow}>
          {/* Like Button */}
          <Pressable
            style={({ pressed }) => [
              styles.likeButton,
              { backgroundColor: pressed ? '#e63946' : '#ff6b6b' },
            ]}
            onPress={() => console.log('Profile Liked!')}
          >
            <Ionicons name="heart" size={22} color="#fff" />
            <Text style={styles.likeText}>Like</Text>
          </Pressable>

          {/* Follow Button */}
          <Pressable
            style={[
              styles.followButton,
              {
                backgroundColor: isFollowing ? 'transparent' : '#1e88e5',
                borderColor: '#1e88e5',
                borderWidth: 1,
              },
            ]}
            onPress={toggleFollow}
          >
            <Text
              style={[
                styles.followText,
                {
                  color: isFollowing ? '#1e88e5' : '#fff',
                },
              ]}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </Text>
          </Pressable>
        </View>

        {/* Expanded  */}
        <Text
          style={[
            styles.expandHint,
            { color: currentTheme.text },
          ]}
        >
          {isExpanded ? 'Tap to hide details ↑' : 'Tap card to see more details ↓'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  themeToggle: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: SPACING.sm,
  },

  card: {
    borderRadius: RADII.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },

  name: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    marginTop: SPACING.md,
  },

  role: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    marginTop: SPACING.sm,
    opacity: 0.7,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.sm,
    paddingHorizontal: SPACING.sm,
  },

  infoText: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    marginLeft: SPACING.sm,
  },

  bioText: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    marginLeft: SPACING.sm,
    marginTop: 2,
    flexShrink: 1,
  },

  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.md,
    gap: SPACING.sm, 
  },

  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 50,
  },

  likeText: {
    color: '#fff',
    fontFamily: FONTS.bold,
    fontSize: 16,
    marginLeft: SPACING.sm,
  },

  followButton: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 50,
  },

  followText: {
    fontFamily: FONTS.bold,
    fontSize: 16,
  },

  expandHint: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    opacity: 0.6,
    marginTop: SPACING.md,
    textAlign: 'center',
  },
});
