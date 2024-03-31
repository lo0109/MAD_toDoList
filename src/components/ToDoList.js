import { View, Text, StyleSheet } from "react-native";

export const DisplayList = ({item}) => {
    return (
        <View>{item.map((item, key) => {
            return (
            <View style={styles.list}>
                <Text style={styles.listItem} key={item.id}>{item.name}</Text>
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