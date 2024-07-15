import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'



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
<View style={StyleSheet.container}>
    <TextInput
    style={StyleSheet.inputBarra}
    placeholder='Search a Character'
    value={searchQuery}
    onChangeText={text => setSearchQuery(text)}
    
    />
    <Button title='Search' onPress={handleSearch}/>
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
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
        marginRight: 8
    },
})





export default SearchBar;