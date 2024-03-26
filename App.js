import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
const pressme = () => console.log('Pressed');
const toDoList = [{id:'1', name:'Buy milk'}, {id:'2',name:'Buy bread'}, {id:'3',name:'Buy eggs'}]; 
export default function App() {
  return (
    <View style={styles.container}>
      
      <View>
        <View style={styles.title}>
          <Text style = {styles.titleText}>My Todo List</Text>
        </View>
      
        {/* <View>
          <View style={styles.line}/>
          <View>{toDoList.map((item) => {
            return (
              <View style={styles.list}>
                <Text style={styles.listItem}>{item.name}</Text>
              </View>
            );
          })}
          </View>
        </View>
      </View>

      <View style={{alignItems:'center',width:'100%', justifyContent:'center', marginBottom:40}}>
        <View style={[styles.line, {height:2}]}/>
        <Text style={styles.addToDo} onPress={pressme}>Add NEW ToDo</Text>
      </View> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    padding:10,
    flexDirection: 'column',
    justifyContent:'space-between'
  },

  title: {
    flexDirection: 'row',
    justifyContent:'center',
    alignContent: 'center',
    marginTop:30,
    padding:10,
  },

  titleText: {
    fontSize:25,
    fontWeight:'bold',
  },

  list: {
    backgroundColor:'green',
    borderColor:'white',
    borderRadius:5,
    margin:2,
    padding:5
  },
  
  listItem:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
  },

  addToDo: {
    fontSize:20,
    fontWeight: 'bold',
    color: 'blue',
    padding:5,
  },
  line: {
    height: 5,
    width: '100%',
    backgroundColor: 'black',
  }
});
