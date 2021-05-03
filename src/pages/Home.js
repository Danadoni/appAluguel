import React from 'react';
import {View, Text,StyleSheet,TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import New from '../components/New';
import House from '../components/House';
import Recomendados from '../components/Recomendados'
import {useNavigation} from '@react-navigation/native'
export default function Home(){

    const navigation = useNavigation();
    return (

        <ScrollView


        >
            <View style = {estilos.Container}>
                <View style = {estilos.areaInput}>
            <Feather
                              name="search"
                              size={24}
                              color= "black"
                              />
            
            <TextInput placeholder="Digite o que está procurando " style = {estilos.txtArea}></TextInput>
            </View>
            </View>
            <View style ={estilos.areaNew}>

                <Text style = {estilos.title}> Novidades </Text>

            </View>
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false}>
                <New 
                imagem ={require('../../assets/house1.jpg')}
                nome = "Casa da Praia"
                descricao = "Ótima casa em condomínio fechado, confortável,ooooooooooooo "
                onPress={() => {navigation.navigate('Detail')}}
                />

                <New 
                imagem ={require('../../assets/house2.jpg')}
                nome = "Casa em Florianopolis"
                descricao = "Ótima casa em condomínio fechado, confortável"
                onPress={() => {}}
                />
                  <New 
                imagem ={require('../../assets/house3.jpg')}
                nome = "Casa no sertão "
                descricao = "Ótima casa em condomínio fechado, confortável"
                onPress={() => {}}
                />
                  <New 
                imagem ={require('../../assets/house4.jpg')}
                nome = "Apart chapadao "
                descricao = "Ótima casa em condomínio fechado, confortável"
                onPress={() => {}}
                />
                  <New 
                imagem ={require('../../assets/house5.jpg')}
                nome = "Sitio em taboão  "
                descricao = "Ótima casa em condomínio fechado, confortável"
                onPress={() => {}}
                />

            </ScrollView>

            <View style = {{ flexDirection:'row', marginBottom:5, alignItems:'center',paddingHorizontal:15}}>

                <Text style = {[estilos.title, {marginTop: 20}]}> Próximo de você</Text> 
            </View>
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false}>

            <House image={require('../../assets/house5.jpg')} 
            descricao ='Linda casa a 500m da praia 
            com vista para o mar, com muitos restaurantes e 
            proximo ao centro'
            preco = "R$ 600,80"
            />
            <House image={require('../../assets/house6.jpg')} 
            descricao ='Linda casa a 500m da praia 
            com vista para o mar, com muitos restaurantes e 
            proximo ao centro'
            preco = "R$ 600,80"
            />
            <House image={require('../../assets/house1.jpg')} 
            descricao ='Linda casa a 500m da praia 
            com vista para o mar, com muitos restaurantes e 
            proximo ao centro'
            preco = "R$ 600,80"
            />

</ScrollView>
        
<View style = {{ flexDirection:'row', marginBottom:5, alignItems:'center',paddingHorizontal:15}}>

<Text style = {[estilos.title, {marginTop: 20}]}> Ofertas </Text> 
</View>
            
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false}>

                <Recomendados imagem = {require('../../assets/house3.jpg')}
                              nome = "Casa na Praia"
                              oferta = "70% OFF"
                />
                <Recomendados imagem = {require('../../assets/house2.jpg')}
                              nome = "Casa em Floripa"
                              oferta = "55% OFF"
                />
                <Recomendados imagem = {require('../../assets/house1.jpg')}
                              nome = "Sitio na Tijuca"
                              oferta = "10% OFF"
                />

            </ScrollView>
        
        </ScrollView>
      

    );
}

const estilos = StyleSheet.create({

Container:{

    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    marginVertical:20,
    paddingHorizontal:10
    

},
areaInput:{
    paddingHorizontal:15,
    flexDirection:'row',
    alignItems:'center',
    width:'98%',
    backgroundColor: '#FFF',
    elevation:4,
    paddingHorizontal:10,
    height:37,
    borderRadius:10


},

txtArea:{
    
    width:'95%',
    paddingHorizontal:10,
    fontFamily:'Montserrat_700Bold'
    
   
},

areaNew:{
paddingHorizontal:15,


},
title:{
    fontFamily:'Montserrat_700Bold',
    fontSize:20

}





});