import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native'



/***
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
        flexDirection: 'column',
        alignItems:'center',
        marginBottom:16,
    },
    inputBarra: {
        flex: 1,
        height: 80,
        borderColor: 'gray',
        borderWidth:15,
        borderRadius:10,
        paddingHorizontal: 8,
        marginRight: 8,
        
    },
    buttonContainer:{
        marginVertical: 10,
    },
    buttonSearch: {
        backgroundColor: "black",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: "center",
  },
  buttonText:{
    color: "yellow",
    fontSize: 16,
    fontWeight:'bold'
  }
      
})





export default SearchBar;