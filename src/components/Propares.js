import React from "react";
import { View, Text } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Propartes = (props) => {
    return (
        <View style={{ marginHorizontal: 10, flexDirection: 'row', marginTop: 10 }}>
            <MaterialCommunityIcons
                color='#64676D'
                name={props.iconName}
                size={25}
                style={{ paddingLeft: 16 }}
            />
            <Text style={{ color: 'black', marginLeft: 10, fontSize: 18 }}>{props.text}</Text>
        </View>
    )
}

export default Propartes;