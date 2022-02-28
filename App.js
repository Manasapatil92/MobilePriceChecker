import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
//project imports
import Login from './src/screens/Login';
import PriceResult from './src/screens/PriceResult';
import Register from './src/screens/Register';
import { ScanPrice } from './src/screens/ScanPrice';
import StoreNLocation from './src/screens/StoreNLocation';
import ScanResult from './src/screens/ScanResult';

const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="PriceResult"
          component={PriceResult}
          options={{
            title: 'Item details',
          }}
        />
        <Stack.Screen
          name="ScanPrice"
          component={ScanPrice}
          options={{
            title: 'Scan Barcode/QR Code',
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'User Profile',
          }}
        />
        <Stack.Screen
          name="StoreNLocation"
          component={StoreNLocation}
          options={{
            title: 'Client and Store Location',
          }}
        />
        <Stack.Screen
          name="ScanResult"
          component={ScanResult}
          options={{
            title: 'Item Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

