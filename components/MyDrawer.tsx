import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabLayout from '@/app/(tabs)/index'; // Assurez-vous que le chemin est correct
import ExploreScreen from '@/app/(tabs)/explore'; // Assurez-vous que le chemin est correct

// Création du Drawer Navigator
const Drawer = createDrawerNavigator();

// Composant MyDrawer
export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabLayout} options={{ title: 'Home' }} />
        <Drawer.Screen name="Settings" component={ExploreScreen} options={{ title: 'Settings' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
