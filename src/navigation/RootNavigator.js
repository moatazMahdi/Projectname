import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import BookmarksList from '../screens/BookmarksList';
import BooksList from '../screens/BooksList';

const Tab = createBottomTabNavigator();
const tabBarOptions = {
    showLabel: false,
    inactiveTintColor: '#2D3038',
    activeTintColor: '#0000ff',
    style: {
      height: '10%',
      backgroundColor: '#1E1B26'
    }
  };
  
  const screenOptions = (route, color) => {
    let iconName;
  
    switch (route.name) {
      case 'BooksList':
        iconName = 'view-dashboard';
        break;
      case 'BookmarksList':
        iconName = 'bookmark-multiple-outline';
        break;
      default:
        break;
    }
  
    return <MaterialCommunityIcons name={iconName} color={color} size={24} />;
  };
const RootNavigator = () => {
    return (
        <Tab.Navigator  
        initialRouteName='BooksList'
        tabBarOptions={tabBarOptions}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}>
            <Tab.Screen name="BooksList" component={BooksList} options = {{header :()=>null}} />
            <Tab.Screen name="BookmarksList" component={BookmarksList} options = {{header :()=>null}}/>
        </Tab.Navigator>
    );
};

export default RootNavigator;