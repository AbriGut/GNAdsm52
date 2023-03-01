import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Screenfeed } from './src/screens/Screenfeed';
import { Screenprofile } from './src/screens/Screenprofile';
import { Screennotifications } from './src/screens/Screennotifications';
import { Screennarticle } from './src/screens/Screenarticle';
import { Screenother } from './src/screens/Screenother';
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      activeColor="#e91e63"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: 'pink' }}
      initialRouteName="Feed"
      labelStyle={{ fontSize: 12 }}
      //style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={Screenfeed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Screennotifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Screenprofile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
