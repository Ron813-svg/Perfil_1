import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../components/CardStyle'; 
// Componente Card para mostrar información de perfil utilizando props

const ProfileCard = ({ name, age, imageUri }) => {
  return (
    <View style={styles.card}>
      <Image source={imageUri} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>{age} años</Text>
      </View>
    </View>
  );
};

export default ProfileCard;