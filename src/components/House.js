import React from 'react';
import {View, Text, StyleSheet, Touchable,Image} from 'react-native';
import{TouchableOpacity} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';

function House(props){

    return (

        <View style = {estilos.container}>
            <View style={estilos.areaFoto}>
            <Image  style ={estilos.foto}source={props.image}></Image>
            
            </View>
            <View style={estilos.areaDescricao}>
            <Text style={estilos.descricao}>{props.descricao}  </Text>
            <Text style={estilos.preco}>{props.preco} </Text>
            </View>
        </View>
      

    );



}

const estilos = StyleSheet.create({
container:{
    marginHorizontal:5,
    flexDirection:'row',
    backgroundColor:"#ffff",
    borderRadius:10,
    alignItems:'center',
    width:180,
    height:80,
    elevation:2,
    },
areaFoto:{
    marginVertical:15,
    marginHorizontal:10,
    borderRadius:10


},
foto:{
    width:80,
    height:60,
    borderRadius:10
},
areaDescricao:{
    width:'35%',
    height:'80%'
    
    
},
descricao:{
fontFamily:'Montserrat_500Medium',
fontSize:7,
marginHorizontal:2,
textAlign:'justify'

},
preco:{
fontFamily:'Montserrat_700Bold',
fontSize:12

}




})

export default House