import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigateButton } from '../components/NavigateButton';
import { DisplayList } from '../components/ToDoList';
import { useState } from 'react';

const toDoList = [{ id: '1', subject: 'Buy milk', text:'first', completed:false }, { id: '2', subject: 'Buy bread',text:'second', completed:false }, { id: '3', subject: 'Buy eggs',text:'third', completed:false }];
export const Home = () => {
  // const [todos, setTodos] = useState([]);
  // const textBoxHandler= ()=>{
  //     const title = text;
  //     const maxid = todos.reduce((a,todo)=> Math.ax(a,todo.id),0);
  //     const newTodo = {id:maxid+1, title, finish:false};
  //     setTodos(cur => [...cur, newTodo]);
  // };
  const navigation = useNavigation();
  const gotoAddTodoHandler = () => {
    navigation.navigate('Add New Todo');
    const [tasks, setTasks] = useState([])
  };
  // const isFocused = useIsFocused();
  // useEffect( ()=> {
  //     const loadData = async ()=> {
  //         const data = await AddTodo();

  //     }
  // })
  const deleteTask = (id) => {
    setTasks(tks=> tks.filter(t=> t.id != id)
    )};
  const completeTask =(id) => {
    setTasks(tks => {
      const newtks = tks.map(t=>{
        const newlist = {...t};
        if (t.id === id) newlist.completed=true;
        return newlist
      })
      return newtks
    })
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
        <FlatList
          data={toDoList}
          renderItem={({item}) => <DisplayList task={item} cmp={completeTask} del={deleteTask} />}
          keyExtractor={t => t.id}
        />
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
  }
});
