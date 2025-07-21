import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/globalStyles.js';
//Pantalla de inicio 

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Modulo 5: Desarrollo de componentes para dispositivos móviles</Text>
      <Text style={styles.infoText}>Durante este modulo aprenderemos a crear apps utilizando React Native.</Text>
      <Text style={styles.titleText}>Contenido del Modulo</Text>
      <Text style={styles.infoText}>1. Introducción a React Native y Expo Go</Text>
      <Text style={styles.infoText}>2. Componentes básicos</Text>
      <Text style={styles.infoText}>3. Estilos y diseño</Text>
      <Text style={styles.infoText}>4. Navegación entre pantallas</Text>
      <View style={styles.button}>
        <Button
          title="Ir a mas Informacion"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </View>
  );
}
