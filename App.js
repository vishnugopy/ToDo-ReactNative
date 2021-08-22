import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';


export default function App() {
  return (
    <View style={styles.container}> 

      <View style={styles.wrapper}>

        <Text style={styles.headerTitle}>
          Today's Tasks
        </Text>

        <View style={styles.items}>
< Task text={'suoidhsuoihduhs'} />
< Task text={'Task 2'} />
      </View>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  wrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  headerTitle:{
  fontSize:20,
  fontWeight:'bold',
  },
  items:{
  marginTop:10,
  },
  });
