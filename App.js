import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View , Platform, TouchableOpacity, Keyboard ,Image ,Icon} from 'react-native';
import Task from './components/Task';
import imag from './assets/plus.png';

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (task === '' || task === null) {
    alert("Please add a task");
    }else{
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask('');
  }
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
          ToDo
        </Text>

        <Image source={imag} />
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
      <TextInput style={styles.input} maxLength={40} placeholder=" Add a task " onChangeText={text => setTask(text)} value={task} />
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
    textAlign:'center',
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
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:29,
    color:'#a6c9ff',
  },
  
  
  });
