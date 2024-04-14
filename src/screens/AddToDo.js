import { StyleSheet, Text, View, TextInput, FlatList, Alert, ScrollView } from 'react-native';
import { NavigateButton } from '../components/NavigateButton';
import { useEffect, useState } from 'react';
import { loadData, saveData } from '../datamodel/mydata';
import { addNewTask, completeTask, deleteTask } from '../datamodel/manageData';
import { DisplayList } from '../components/ToDoList';


export const AddTodo = ({ navigation, tasks, setTasks }) => {
    const goBackHandler = () => {
        navigation.goBack();
    };

    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');

    const addText = () => {
        if (subject === "" || text==='') return;
        const maxid = tasks.reduce((a, tk) => Math.max(a, tk.id), 0);
        setTasks(tasks => [...tasks, { id: maxid + 1, subject, text, completed: false }]);
        saveData(tasks)
        setSubject('');
        setText('');
        alert("New Task created")
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>New Todo</Text>
                </View>
                <View>
                    <View style={styles.line} />
                </View>
                <View>
                    <Text style={styles.titleText}>Subject</Text>
                    <TextInput
                        style={styles.textbox}
                        placeholder='Subject...'
                        value={subject}
                        onChangeText={setSubject} />
                    <View>
                    </View>
                    <Text style={styles.titleText}>Description</Text>

                    <TextInput
                        style={styles.textbox}
                        placeholder='Item Description...'
                        multiline={true}
                        value={text}
                        onChangeText={setText} />

                </View>
            </View>
            <View style={styles.bottom} >
                <View style={[styles.line, { height: 2 }]} />
                <View style={styles.button} >
                    <NavigateButton icon='backspace-outline' label="Cancel" fun={goBackHandler} />
                    <NavigateButton icon='archive-outline' label="Save" fun={addText} />
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
            padding: 10,
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        title: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
        },
        titleText: {
            fontSize: 25,
            fontWeight: 'bold',
            padding: 10,
        },
        bottom: {
            padding: 5,
            width: '100%',
            marginBottom: 10,
        },
        button: {
            justifyContent: 'space-evenly',
            borderColor: 'black',
            flexDirection: 'row',
        },
        line: {
            height: 2.5,
            width: '100%',
            backgroundColor: 'black',
        },
        textbox: {
            width: 300,
            borderWidth: 1,
            borderColor: 'grey',
            padding: 5,
        }

    }
)