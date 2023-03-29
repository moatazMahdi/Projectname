import React from "react";
import { View, Text, Image, } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Propartes from "./Propares";

const Detailscomponent = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#1E1B26' }}>
            <Image  source={props.image} style={{ width: '100%', height: 210,  }}  />
            <View style={{ flexDirection: 'row', marginTop: 0,flex:1,backgroundColor:'white' }}>
                <Image source={props.image} style={{ width: 160, height: 260, borderRadius: 20,position:'absolute',top:-150,marginLeft:20 }} />
                <View style={{width:'100%',position:'absolute',left:170}}>
                    <View style={{ flexDirection: 'row', }}>
                        <Propartes
                            iconName={'book-open-page-variant'}
                            text={props.numPage}
                        />
                        <Propartes
                            iconName={'star'}
                            text={props.rating}
                        />

                    </View>
                    <Propartes
                        iconName={'account-tie'}
                        text={props.rating}
                    />
                </View>
                <View>
                <Text style={{color:'black',marginLeft:20,marginTop:120,fontSize:25}}>{props.authors}</Text>
                <Text style={{color:'gray',marginLeft:20,marginTop:5,fontSize:18}}>{props.description}</Text>
                </View>
                <View style={{width:60,height:60,backgroundColor:'red',position:'absolute',right:15,borderRadius:9999,bottom:15,justifyContent:'center',alignItems:'center'}}>
                <MaterialCommunityIcons
                color='#fff'
                name='bookmark'
                size={30}
               
            />
                </View>
            </View>

        </View>
    )
}
export default Detailscomponent;