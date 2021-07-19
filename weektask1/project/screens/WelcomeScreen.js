import React from 'react';
import { ImageBackground, StyleSheet, Text, View,Image } from 'react-native';
import colors from
const WelcomeScreen = () => {
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>

            <View style={{paddingTop:'10%',paddingLeft:'25%'}}>
            <Image  style={styles.logo} source={require('../assets/logo-red.png')}></Image>
             </View>
             <View style={{margin:'-35%',paddingLeft:'65%'}}>
             <Text >Shell What You Don't Need</Text>   
             </View>
    <View style={[styles.container1]}></View>
    <View style={styles.container2} ></View>
    
  </ImageBackground>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
   
          logo:{
            
            margin:'10%',
            alignItems:'center',
        width: '50%',
        height:'40%',
       
               },
               

        container1:{
            flex:0.80,
            backgroundColor:'#fc5c65',
            marginTop:'120%',
        justifyContent: 'flex-end',

        },

    container2:{
        flex:0.75,
        backgroundColor:'#4ECDC4',
        justifyContent: 'flex-end',
        

        
    }
})


