import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{useFonts,Montserrat_400Regular,Montserrat_500Medium,Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import 'react-native-gesture-handler';
import {AppLoading} from 'expo';
import Routes from './src/router';


export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular,
    Montserrat_500Medium
  });

 if(!fontsLoaded){

 
 }
 

  return (

   <>

      <StatusBar style='light' backgroundColor='#000' translucent= {false} />
      
       <Routes />
   </>
  );
}

