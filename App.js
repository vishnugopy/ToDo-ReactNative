import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View , Platform, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';


export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const handleDeleteTask = (index) => {
  let newTaskItems = [...taskItems];
  newTaskItems.splice(index, 1);
  setTaskItems(newTaskItems);
  }

  return (
    <View style={styles.container}> 

      <View style={styles.wrapper}>

        <Text style={styles.headerTitle}>
          Today's Tasks
        </Text>

        <View style={styles.items}>
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => handleDeleteTask(index)}>
                    <Task key={index} text={item} />
                  </TouchableOpacity>
                )
                
                
              })
            }
        </View>

    </View>

    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.textform}>
      <TextInput style={styles.input} placeholder=" Add a task " onChangeText={text => setTask(text)} value={task} />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>

        <View style={styles.buttonholder} >
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
    justifyContent:'space-around',
    alignItems:'center',
    outline:0,
    paddingHorizontal:10,
    
  },
  input:{
    height:60,
    paddingHorizontal:20,

    width:"75%",
    backgroundColor:'#fff',
    borderRadius:15,
    borderColor:'#a6c9ff',
    borderWidth:2,
    outline:0, 
    },
  button:{
    width:50,
    height:50,
    borderRadius:50,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#a6c9ff',
    borderWidth:2,
  },
  buttonholder:{
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
  },
  
  });
