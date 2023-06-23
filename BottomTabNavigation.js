import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import ShowcaseScreen from './ShowcaseScreen';
import MarketplaceScreen from './MarketplaceScreen';
import ServicesScreen from './ServicesScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Showcase') {
            iconName = focused ? 'image' : 'image-outline';
          } else if (route.name === 'Marketplace') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Services') {
            iconName = focused ? 'cog' : 'cog-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}/>
      <Tab.Screen name="Showcase" component={ShowcaseScreen} />
      <Tab.Screen name="Marketplace" component={MarketplaceScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
