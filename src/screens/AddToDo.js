import { StyleSheet, Text, View , TextInput, FlatList} from 'react-native';
import { NavigateButton } from '../components/NavigateButton';
import { useState } from 'react';


export const AddTodo = ({navigation}) =>{
    const goBackHandler = () =>{
        navigation.goBack();
    };
    const saveHandler = () =>{
        console.log('Saved');
    };
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const changeTextHandler =(val) => setText(val);
    const changeSubHandler =(val) => setSubject(val);


    return (
        <View style={styles.container}>
            <View>
              <View style={styles.title}>
                <Text style = {styles.titleText}>New Todo</Text>
              </View>
              <View>
                <View style={styles.line}/>
              </View>
     
        

            </View>
            <View style={styles.bottom} >
                <View style={[styles.line, {height:2}]}/>
                <View style={styles.button} >
                    <NavigateButton icon='backspace-outline' label="Cancel" fun={goBackHandler}/>
                    <NavigateButton icon='archive-outline' label="Save" fun={saveHandler}/>
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