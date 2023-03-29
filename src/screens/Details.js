import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import Detailscomponent from "../components/Detailcomponent";

const Details = ({ route }) => {
    const item = route.params.item;

    return (
        <View style={{ flex: 1, backgroundColor: '#1E1B26' }}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#1E1B26'} />
            <Detailscomponent 
            numPage={item.num_pages} 
            image={{ uri: item.image_url }}
            rating={item.rating}
            authors={item.authors}
            description={item.description}
            />
            <Text style={{color:'black',marginLeft:10}}>{item.authors.substring(0,10) + " ...."}</Text>
        </View>
    )
}
export default Details;