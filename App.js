import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import Task from "./components/Task";
import AddIcon from "./assets/addico.png";
import ImgError from "./assets/error.png";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [Data, setData] = useState([]);
  console.log(Data);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    try {
      const myArray = AsyncStorage.getItem("@MySuperStore");
      setData(myArray);
    } catch (error) {
      console.log(error);
    }
  };
  const updateTask = () => {
    try {
      AsyncStorage.setItem("@MySuperStore", JSON.stringify(taskItems));
    } catch (error) {
      console.log(error);
    }
  };

  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const handleAddTask = () => {
    if (task === "" || task === null) {
      alert("Please add a task");
    } else {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      updateTask();
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    let newTaskItems = [...taskItems];
    newTaskItems.splice(index, 1);
    setTaskItems(newTaskItems);
    updateTask();
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.headerTitle}>ToDo</Text>
        <ScrollView style={styles.items}>
          {taskItems.length === 0 ? (
            <Image
              style={{
                width: "100%",
                height: 150,
                resizeMode: "cover",
                opacity: 0.2,
                marginVertical: 200,
              }}
              source={ImgError}
            />
          ) : (
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleDeleteTask(index)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })
          )}
        </ScrollView>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.textform}
      >
        <TextInput
          style={styles.input}
          maxLength={40}
          placeholder=" Add a task "
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <View style={styles.buttonholder}>
            <Image
              style={{
                height: 30,
                width: 30,
              }}
              source={AddIcon}
            />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
    position: "relative",
  },
  wrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
  },
  items: {
    marginTop: 10,
    marginBottom: 120,
    paddingBottom: 200,
  },
  textform: {
    position: "absolute",
    bottom: 0,
    zIndex: 999,
    backgroundColor: "#000",
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    fontFamily: "Montserrat",
    height: 60,
    paddingHorizontal: 20,
    width: "75%",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#082032",
    borderWidth: 2,
  },
  button: {
    width: "23%",
    height: 60,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#a6c9ff",
  },
  buttonholder: {
    alignItems: "center",
    justifyContent: "center",
  },
});
