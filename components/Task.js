import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.dash}></View>
      <Text style={styles.taskText}>{props.text}</Text>


      <View style={styles.dash}></View>
      <Text style={styles.delete} onPress={props.onDelete}>
        Done
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
    width: "100%",
  },
  dash: {
    width: "40%",
    marginVertical: 10,
    height: 10,
    backgroundColor: "#a6c9ff",
    borderRadius: 5,
  },
  taskText: {
    fontFamily: "Montserrat",
    textTransform: "capitalize",
  },
  delete: {
    backgroundColor: "#a6c9ff",
    color: "#fff",
    borderRadius: 5,
    alignSelf: "flex-end",
    padding: 10,
    marginTop: 25,
  },
});

export default Task;
