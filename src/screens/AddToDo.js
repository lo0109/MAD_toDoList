import { StyleSheet, Text, View , TextInput, FlatList, Alert} from 'react-native';
import { NavigateButton } from '../components/NavigateButton';
import { useEffect, useState } from 'react';
import { DisplayList } from '../components/ToDoList';
import { loadData, saveData } from '../datamodel/mydata';

export const AddTodo = ({navigation}) =>{
    const goBackHandler = () =>{
        navigation.goBack() ;
    };
    
    // const saveHandler = () =>{
    //     console.log('Saved');
    // };
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState([])

    useEffect( ()=>{
        const firstload = async()=>{
            const data =await loadData()
            setTasks(data.tasks)
        }
        firstload()
    },[])

    // const changeTextHandler =(val) => setText(val);
    // const changeSubHandler =(val) => setSubject(val);
    const addText =()=> {
        if (subject==="") return ;
        const maxid = tasks.reduce((a,tk)=> Math.max(a,tk.id), 0);
        setTasks(tasks => [...tasks, {id:maxid+1, subject, text, completed: false}]);
        console.log({tasks})
        useEffect( ()=>{
            saveData({tasks})
        },[tasks]);
        setSubject('');
        setText('');
        }

    return (
        <View style={styles.container}>
            <View>
              <View style={styles.title}>
                <Text style = {styles.titleText}>New Todo</Text>
              </View>
              <View>
                <View style={styles.line}/>
              </View>
              <View>
                <Text style={styles.titleText}>Subject</Text>
                <TextInput 
                    style={styles.textbox} 
                    placeholder='Subject...' 
                    value={subject} 
                    onChangeText={setSubject}/>
                <View>
                </View>
                <Text style={styles.titleText}>Description</Text>
                
                <TextInput 
                    style={styles.textbox} 
                    placeholder='Item Description...' 
                    multiline={true}
                    value={text}
                    onChangeText={setText}/>
                
              </View>
            </View>
            <View style={styles.bottom} >
                <View style={[styles.line, {height:2}]}/>
                <View style={styles.button} >
                    <NavigateButton icon='backspace-outline' label="Cancel" fun={goBackHandler}/>
                    <NavigateButton icon='archive-outline' label="Save" fun={addText}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            padding:10,
            flexDirection: 'column',
            justifyContent:'space-between',
        },
        title: {
            flexDirection: 'row',
            justifyContent:'center',
            alignContent: 'center',
          },
        titleText: {
            fontSize:25,
            fontWeight:'bold',
            padding:10,
        },
        bottom: {
            padding:5,
            width:'100%', 
            marginBottom:10,
        },
        button:{
            justifyContent:'space-evenly', 
            borderColor:'black',
            flexDirection: 'row',
        },
        line: {
            height: 2.5,
            width: '100%',
            backgroundColor: 'black',
        },
        textbox:{
            width:300,
            borderWidth:1,
            borderColor:'grey',
            padding: 5,
        }
        
    }
)