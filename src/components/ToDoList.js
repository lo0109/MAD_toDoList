import { View, Text, StyleSheet } from "react-native";
import { TaskButton } from "./TaskButton";
import { useNavigation } from "@react-navigation/native";
import { addNewTask } from "../datamodel/manageData";
export const DisplayList = ({ tasks }) => {
    const deleteTask = (id) => {
       console.log('delete')
        // setTasks(tks => tks.filter(t => t.id != id)
        // )
    };

    const completeTask = (id) => {
        console.log('complete')

        // setTasks(tks => {
        //     const newtks = tks.map(t => {
        //         const newlist = { ...t };
        //         if (t.id === id)
        //             newlist.completed = true
        //         return newlist
        //     })
        //     return newtks
        // })
    };

    return (
        <View>

            <View key={tasks.id} style={styles.list}>
                <Text style={styles.listItem}>Item: {tasks.id} Subject: {tasks.subject}</Text>
                <Text> Description: {tasks.text}</Text>
                <View style={styles.buttonView} >
                    {!tasks.completed && <TaskButton fun={completeTask(tasks.id)} icon='checkmark-done-sharp' />}
                    <TaskButton fun={deleteTask(tasks.id)} icon='trash-sharp' />
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
