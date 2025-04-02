import React, { FC } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen'
import Icon from '../components/Icon'
import ProfileScreen from './ProfileScreen'
import SettingsScreen from './SettingsScreen'



const Tab = createBottomTabNavigator()

const MainNavigator = () => {


  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false,
        tabBarHideOnKeyboard:true,
        lazy:true,
    }}
    >
        <Tab.Screen 
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon:({color,size})=>(
            <Icon
            name={"home"}
            size={size}
            iconFamily="Ionicons"
            color={color}
            />
          )
        }}
        />

        <Tab.Screen 
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon:({color,size})=>(
            <Icon
            name={"account"}
            size={size}
            iconFamily="MaterialCommunityIcons"
            color={color}
            />
          )
        }}
        />
        <Tab.Screen 
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon:({color,size})=>(
            <Icon
            name={"settings"}
            size={size}
            iconFamily="Ionicons"
            color={color}
            />
          )
        }}
        />

    </Tab.Navigator>
  )
}

export default MainNavigator