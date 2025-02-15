import { Text,View, StyleSheet, Pressable } from "react-native";
import {Ionicons} from "@expo/vector-icons";

export const NavigateButton =({icon, label, fun })=>{
    return (
        <Pressable style={({pressed})=> (pressed ? {opacity:0.5} : {})} onPress = {fun}>
            <View style={styles.container}>
                <Ionicons name={icon} size={40} color='green'/>
                <Text style={styles.text} >{label}</Text>
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
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'teal',
    },
}
)