import { useEffect, useState } from "react";
import { AddTodo, setTask } from "../screens/AddToDo";
import { loadData, saveData } from "./mydata";


export const addNewTask = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const load = async () => {
            const data = await loadData()
            setTasks(data?.tasks)
        }
        load()
    }, [])
    useEffect(() => {
        saveData({ tasks })
    }, [tasks])
    return { tasks, setTasks }
}

export const deleteTask = (id) => {
    console.log('delete')
    setTasks(tks => tks.filter(t => t.id != id)
    )
};

export const completeTask = (id) => {
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