import React from "react";
import { Text, View, ImageBackground,StyleSheet } from "react-native";



const imgBg = require('../../assets/darthVaderbg.png');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={imgBg} resizeMode="cover" style={styles.imgBg} >
      <Text style={styles.title}>I am your...New Developer</Text>
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
  imgBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems:'center',
    height:700,
  },
  title: {
    textAlign:'center',
    marginBottom:200,
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'yellow',
    
  },
});



export default HomeScreen;
