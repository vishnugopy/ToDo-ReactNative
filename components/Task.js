import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.taskText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
    width: "100%",
  },
  taskText: {
    fontFamily: "Montserrat",
    textTransform: "capitalize",
  }
});

export default Task;
