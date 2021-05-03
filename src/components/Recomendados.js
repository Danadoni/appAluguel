import React from 'react';
import {View, Text, StyleSheet, Touchable,ImageBackground} from 'react-native';
import{TouchableOpacity} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';

function Recomendados(props){
return (
        <ImageBackground 
        source={props.imagem} 
        style={estilos.container}
        blurRadius={3}
        borderTopLeftRadius={3}
        borderTopRightRadius={3}
        borderBottomLeftRadius = {3}
        borderBottomRightRadius = {3}
        >
                <Text style ={[estilos.nome, estilos.shadow]}> {props.nome} </Text>
                <Text style ={[estilos.nome, estilos.shadow]}>{props.oferta}  </Text>
                
                </ImageBackground>
);

}

export default Recomendados;

const estilos = StyleSheet.create({


    container:{
        width:195,
        height:145,
        marginHorizontal:5,
        borderRadius:10,
        marginHorizontal:10,
        marginVertical:10,
        elevation:3,
        padding:5,
        opacity:0.8
        

    },
    nome:{
    fontFamily :'Montserrat_500Medium',
    fontSize:15,
    color:"#FFF"

    },
    offer:{
        fontFamily:'Montserrat_700Bold',
        fontSize:15,
        color:"#FFF",
        
        

    },
    shadow:{
        textShadowOffset:{width:1,height:2},
        textShadowRadius:2,
        textShadowColor:'#000',
        
       


    }


})