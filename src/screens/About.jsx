//Importaciones necesarias de React y componentes
import React from 'react';
import { View, Button } from 'react-native';
import Card from '../components/Card';
import Img from '../../assets/Imagen.jpeg';
import styles from '../styles/globalStyles.js'; 
//Pantalla de información adicional

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Card
        name="Rony Javier Ramirez Alvarado"
        age={18}
        imageUri={Img}
      />
      <View style={styles.button}>
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
