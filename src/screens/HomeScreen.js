import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Welcome!</Text>
        <Text style={{fontSize: 16, marginTop: 10}}>
          Explore the app using the tabs below.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
});

export default HomeScreen;
