import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screen
import LoginScreen from './login';
import HomeScreen from './home';
import ProfileScreen from './profile';
import ProductListScreen from './listprodct'; // pastikan nama file sama

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Login: undefined;
  Home: { token: string; email: string };
  Profile: { token: string; email: string };
  listprodct: { token: string; email: string };
};

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="listprodct" 
        component={ProductListScreen} 
        options={{ headerTitle: 'List Product' }} 
      />
    </Stack.Navigator>
  );
}
