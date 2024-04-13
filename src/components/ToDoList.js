import { View, Text, StyleSheet } from "react-native";
import { NavigateButton } from "./NavigateButton";

export const DisplayList = ({item, cmp, del}) => {
    const {id, text, completed } = item;
    return (
        <View>{item.map((item, key) => {
            return (
            <View style={styles.list} key={item.id}>
                <Text style={styles.listItem}>{text}</Text>
                {!completed && <NavigateButton fun={cmp(id)} icon='checkmark-done-sharp' label='Complete' />}
                <NavigateButton fun={del(id)} icon='trash-sharp' label='Delete' /> 
            </View>
            );
        })}
        </View>
    )
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
