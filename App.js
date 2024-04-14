import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { Home } from "./src/screens/Home";
import { AddTodo } from "./src/screens/AddToDo";
import { addNewTask } from "./src/datamodel/manageData";

const Stack = createStackNavigator();

export default function App() {
const { tasks, setTasks } = addNewTask();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' >{props => <Home {...props} tasks={tasks} setTasks={setTasks} />}</Stack.Screen>
        <Stack.Screen name='Add New Todo' >{props => <AddTodo {...props} tasks={tasks} setTasks={setTasks} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}