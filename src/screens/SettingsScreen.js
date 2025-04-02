import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigation = useNavigation();

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);

  return (
    <View style={[styles.container,{ backgroundColor: isDarkMode ? '#808080' : '#fff' }]}>
      <Text style={styles.header}>Settings</Text>
      
      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Enable Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
        />
      </View>
      
      <Button
        title="Back To Home"
        onPress={() => {
          alert('Back out')
          navigation.navigate("Home")
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  settingLabel: {
    fontSize: 18,
  },
});

export default SettingsScreen;
