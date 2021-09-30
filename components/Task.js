import React from 'react';
import { View , Text , StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';


const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemleft}>
                < View style={styles.square}>
                    </View>
                    <Text style={styles.taskText}>
               {props.text}
                </Text>
            </View>
            <View style={styles.circular}></View>
            </View>
            
    );
};


const styles = StyleSheet.create({ 
    item:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginBottom:10,
        marginTop:10,
        width:"100%",
    },
    itemleft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
        width:5,
        height:5,
        borderRadius:5,
        backgroundColor:'#55BCF6',
        opacity:0.5,
        marginRight:10,
    },
    taskText:{
        fontFamily: "Montserrat",
        maxWidth:"99%",
        textTransform:'capitalize',
    },
    circular:{
        width:12,
        height:12,
        borderRadius:5,
        borderColor:'#ff4d8e',
        borderWidth:2,
    },
});

export default Task;