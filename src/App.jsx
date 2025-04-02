import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator from './screens/MainNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';




const App = () => {
  const Stack = createNativeStackNavigator()
  return ( 
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
      >
        <Stack.Screen name='MainNavigator' component={MainNavigator}  />

      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;