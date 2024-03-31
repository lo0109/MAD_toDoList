import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigateButton } from '../components/NavigateButton';
import { DisplayList } from '../components/ToDoList';
import { useState } from 'react';

const pressme = () => console.log('Pressed');
const toDoList = [{id:'1', name:'Buy milk'}, {id:'2',name:'Buy bread'}, {id:'3',name:'Buy eggs'}]; 
export const Home = () => {
    // const [todos, setTodos] = useState([]);
    // const textBoxHandler= ()=>{
    //     const title = text;
    //     const maxid = todos.reduce((a,todo)=> Math.ax(a,todo.id),0);
    //     const newTodo = {id:maxid+1, title, finish:false};
    //     setTodos(cur => [...cur, newTodo]);
    // };


    const navigation = useNavigation();
    const gotoAddTodoHandler = () =>{
        navigation.navigate('Add New Todo');
    };

    return (
        <View style={styles.container}>
        
          <View>
              <View style={styles.title}>
                <Text style = {styles.titleText}>My Todo List</Text>
              </View>
              <View>
                <View style={styles.line}/>
              </View>
              <DisplayList item={toDoList} />
            </View>

          <View style={styles.bottom}>
              <View style={[styles.line, {height:2}]}/>
              <NavigateButton style={styles.bottom} fun={gotoAddTodoHandler} icon='add-circle' label='Add New Todo'  />
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    flexDirection: 'column',
    justifyContent:'space-between'
  },

  title: {
    flexDirection: 'row',
    justifyContent:'center',
    alignContent: 'center',
    padding:10,
  },

  titleText: {
    fontSize:25,
    fontWeight:'bold',
  },
  bottom: {
    padding:5,
    alignItems:'center',
    width:'100%', 
    justifyContent:'center', 
    marginBottom:10,
  },
  line: {
    height: 2.5,
    width: '100%',
    backgroundColor: 'black',
  }
});
