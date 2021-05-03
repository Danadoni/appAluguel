import React from 'react';
import {View, Text, StyleSheet, Touchable,Image} from 'react-native';
import{TouchableOpacity} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';

function New(props){
return (
    <TouchableOpacity onPress={props.onPress} style = {estilos.container}>

    <Image 
    
    source = {props.imagem}
    style = {estilos.foto}
    
    
    
    />
    <View style ={estilos.legenda}>

    <Text style ={estilos.title}> {props.nome} </Text>

    <View style ={estilos.dot}/>

    <Text style = {estilos.novo}> novo </Text>

    </View>
    <Text style = {estilos.descricao}> {props.descricao} </Text> 

    <View style = {estilos.rodape}>
        <View style ={{width:'80%',justifyContent:'flex-end'}}>
            <Text style = {estilos.descricao}>R$ 1.204,90</Text>
        </View>
    <View style = {{width:'20%'}}>

    <Ionicons name = "ios-add-circle" size ={24} />
    </View>

</View>
    </TouchableOpacity>



);

}
const estilos = StyleSheet.create({

    container:{
    
    paddingHorizontal:15,
    backgroundColor:"#fff",
    marginTop:10,
    marginHorizontal:5,
    borderRadius:10,
    width:160,
    height:215,
    alignItems:'center',
    elevation:2

    
    


    },

    foto:{
        width:150,
        height:90,
        borderRadius:10,
        marginTop:15

    },
    legenda:{
    flexDirection:'row',
    alignItems:'center',


    },
    title:{
        fontFamily: 'Montserrat_700Bold',
        fontSize:12,
        color: '#4f4a4a',
        marginRight:2
    },
    dot:{
        backgroundColor:'red',
        width:5,
        height:5,
        borderRadius:4
    },
    novo:{

        fontFamily: 'Montserrat_700Bold',
        fontSize:9,
        color: 'red'

    },
    rodape:{
        flexDirection:'row',
        marginTop:15,
        marginHorizontal:10


    },

    descricao:{
        fontFamily: 'Montserrat_500Medium',
        fontSize:11,
        marginTop:6



    }

})



export default New ;