import { View, Text, StyleSheet } from "react-native";
import { NavigateButton } from "./NavigateButton";

export const DisplayList = ({task, cmp, del}) => {
    const {id, subject, text, completed} = task
    return (
            <View style={styles.list}>
                <Text style={styles.listItem}>Subject: {subject}</Text>
                {!completed && <NavigateButton fun={cmp(id)} icon='checkmark-done-sharp' label='Complete' />}
                <NavigateButton fun={del(id)} icon='trash-sharp' label='Delete' /> 
            </View>
            );
}

const styles = StyleSheet.create(
    {
        list: {
            backgroundColor:'teal',
            borderColor:'white',
            borderRadius:5,
            margin:2,
            padding:5
          },
        listItem:{
            color:'white',
            fontSize:20,
            fontWeight:'bold',
        },
    }
)
