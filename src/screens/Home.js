import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigateButton } from '../components/NavigateButton';
import { useEffect, useState } from 'react';
import { loadData, saveData } from '../datamodel/mydata';
import { AddTodo } from './AddToDo';
import { addNewTask, completeTask, deleteTask, setTask } from '../datamodel/manageData';
import { DisplayList } from '../components/ToDoList';



export const Home = ({ tasks, setTasks }) => {

  const navigation = useNavigation();
  const gotoAddTodoHandler = () => {
    navigation.navigate('Add New Todo');
  };

  return (
    <View style={styles.container}>

      <View>
        <View style={styles.title}>
          <Text style={styles.titleText}>My Todo List</Text>
        </View>
        <View>
          <View style={styles.line} />
        </View>
        <ScrollView style={styles.tasklist} > 
        {tasks.map((t) => ( <View key={t.id}>
            <DisplayList tasks={t}/>
            </View>))}
        </ScrollView>
        {/* <ScrollView>
        {tasks.map((task) => 
          (<Text>{task.subject}</Text>))}
        </ScrollView> */}

      </View>

      <View style={styles.bottom}>
        <View style={[styles.line, { height: 2 }]} />
        <NavigateButton style={styles.bottom} fun={gotoAddTodoHandler} icon='add-circle' label='Add New Todo' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  },

  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  bottom: {
    padding: 5,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  line: {
    height: 2.5,
    width: '100%',
    backgroundColor: 'black',
  },
  tasklist: {
    height:600
  }
});
