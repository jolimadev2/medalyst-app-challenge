import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native'



/***
 * Juan
 * @returns component that return a search bar to find an specific character of starwars
 */
const SearchBar = ({onSearch}) => {
const [searchQuery, setSearchQuery] = useState('')


// functio nto handle the search
const handleSearch = () => {
    onSearch(searchQuery);
};




  return (
<View style={styles.container}>
    <TextInput
    style={styles.inputBarra}
    placeholder='Search a Character'
    value={searchQuery}
    onChangeText={text => setSearchQuery(text)}
    />
       <View style={styles.buttonContainer}>
    <Pressable style={styles.buttonSearch} onPress={handleSearch}>
    <Text style={styles.buttonText}>Search</Text>
    </Pressable>
    </View>
</View>
  )
}




const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems:'center',
        marginBottom:16,
        
    },
    inputBarra: {
        flex: 1,
        height: 80,
        borderColor: 'gray',
        borderWidth:10,
        borderRadius:10,
        paddingHorizontal: 18,
        marginLeft:10,
        marginRight: 18,
        backgroundColor:"#f0f0f0",
    },
    buttonContainer:{
        marginVertical: 10,
    },
    buttonSearch: {
        backgroundColor: "#13161c",
        borderRadius: 10,
        marginRight:10,
        paddingVertical: 10,
        paddingHorizontal: 18,
        alignItems: "center",
  },
  buttonText:{
    color: "yellow",
    fontSize: 16,
    fontWeight:'bold'
  }
      
})





export default SearchBar;