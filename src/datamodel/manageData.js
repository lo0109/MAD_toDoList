import { useEffect, useState } from "react";
import { AddTodo, setTask } from "../screens/AddToDo";
import { loadData, saveData } from "./mydata";


export const addNewTask = () => {
    const [tasks, setTasks] = useState([]);

    useEffect( ()=>{
        const load = async()=>{
            const data =await loadData()
            setTasks(data?.tasks)
        }
        load()
    },[])
    useEffect( ()=>{
        saveData({tasks})
    },[tasks])
    return {tasks,setTasks}
}

