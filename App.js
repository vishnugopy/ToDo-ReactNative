import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View , Platform, TouchableOpacity } from 'react-native';
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

    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.textform}>
      <TextInput style={styles.input} placeholder=" Add a task " />
      <TouchableOpacity style={styles.button}>

        <View style={styles.buttonholder}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  wrapper:{
    paddingTop:50,
    paddingHorizontal:20,
  },
  headerTitle:{
    fontSize:20,
    fontWeight:'bold',
  },
  items:{
    marginTop:10,
  },
  textform:{
    position:'absolute',
    bottom:30,
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    outline:0,
    paddingHorizontal:10,
    
  },
  input:{
    height:60,
    paddingHorizontal:20,
    paddingVertical:30,
    width:"85%",
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:'#E8EAED',
    borderWidth:10,
    outline:0, 
  },
  button:{
    width:50,
    height:50,
    borderRadius:50,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
  },
  buttonholder:{
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText:{
    fontSize:30,
    fontWeight:'bold',
  },
  
  });
