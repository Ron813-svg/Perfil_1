//Librerias importadas
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Pantallas importadas
import Home from './src/screens/Home';
import About from './src/screens/About';

const Stack = createNativeStackNavigator();
{/** Parte para la navegación entre pantallas */}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





