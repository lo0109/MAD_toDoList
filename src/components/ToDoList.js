import { View, Text, StyleSheet, Button } from "react-native";
import { TaskButton } from "./TaskButton";
import { useState } from "react";
export const DisplayList = ({ tasks, setTasks }) => {

    const [toggle, setToggle] = useState(true);
    
        const deleteTask = (id) => {
        console.log('delete')
        setTasks(tks => tks.filter(t => t.id != id)
        )
    };

    const completeTask = (id) => {
        console.log('complete')
        setTasks(tks => {
            const newtks = tks.map(t => {
                const newlist = { ...t };
                if (t.id === id)
                    newlist.completed = true
                return newlist
            })
            return newtks
        })
    };


    return (
        <View>
                
            <View key={tasks.id} style={styles.list}>
                <View style={{flexDirection:'row', flex:1, justifyContent: 'space-between'}} >
                    <View>
                        <Text style={styles.listItem}>Subject: {tasks.subject}</Text>
                    </View>
                    <View>
                        <TaskButton  fun={()=> setToggle(!toggle)} icon='chevron-expand-outline'/>
                    </View>
                </View>
                {toggle && <Text style={styles.ItemDes} > Description: {tasks.text}</Text>}
                <View style={styles.buttonView} >
                    {!tasks.completed && <TaskButton fun={() => completeTask(tasks.id)} icon='checkmark-done-sharp' />}
                    <TaskButton fun={() => deleteTask(tasks.id)} icon='trash-sharp'/>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create(
    {
        list: {
            backgroundColor: 'teal',
            borderColor: 'white',
            borderRadius: 5,
            margin: 2,
            padding: 5
        },
        listItem: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
        },
        buttonView: {
            justifyContent: 'space-evenly',
            flexDirection: 'row',
        },
        ItemDes: {
            color: 'white',
            fontSize: 20,
            fontStyle: 'italic',
        }
    }
)


    // const deleteTask = (itemId) => {
    //     const objWithIdIndex = tasks.findIndex(
    //         (object) => object.id === itemId
    //     );
    //     const updatedList = [...tasks];
    //     updatedList.splice(objWithIdIndex, 1);
    //     setTasks(updatedList);
    // };

    // const completeTask = (itemId) => {
    //     const objWithIdIndex = tasks.findIndex(
    //         (object) => object.id === itemId
    //     );
    //     const updatedList = [...tasks];
    //     updatedList[objWithIdIndex].completed = true;
    //     setTasks(updatedList);
    // };