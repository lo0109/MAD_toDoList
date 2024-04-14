import { Text,View, StyleSheet, Pressable } from "react-native";
import {Ionicons} from "@expo/vector-icons";

export const TaskButton =({icon, fun })=>{
    return (
        <Pressable style={({pressed})=> (pressed ? {opacity:0.5} : {})} onPress = {fun}>
            <View style={styles.container}>
                <Ionicons name={icon} size={40} color='white'/>
            </View>
        </Pressable>
        
)}

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

}
)