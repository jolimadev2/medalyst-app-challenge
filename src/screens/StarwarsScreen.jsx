import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from "react-native";
import FetchAPI from "../components/FetchAPI";
import  SearchBar  from "../components/SearchBar";



const imgBg = require('../../assets/darthVaderbg.png');

const StarwarsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");



  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={imgBg} resizeMode="cover" style={styles.imgBg} >
      <Text style={styles.title}>Find your Character</Text>
      <SearchBar onSearch={handleSearch} />
      <FetchAPI searchQuery={searchQuery} styles={styles.fetchContainer} />
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
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 16,
    color: 'white',
  },
  fetchContainer:{
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'red'
  }
});

export default StarwarsScreen;
