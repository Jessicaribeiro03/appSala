import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bem vindo ao Brasil</Text>
        <Text style={styles.description}> is simply dumy text</Text>
        <View style={styles.buttonView}>
          <Button style={styles.button} tittle='Solicitar'/>
        </View>

      </View>
      
      <MapView style={styles.map} />
    </View >

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },

  card: {
    position:'absolut',
    background:#FF69B4,
    zIndex:1,
    width: 100,
    height: 100,
    top:100,
    left:100,
  },

  title: {
    fontFamily: 'Arial',
    top:30,
    height:100,

  },

  description: {

  },

  buttonView:{
    backgroundColor: #FFFF00,

  }



});