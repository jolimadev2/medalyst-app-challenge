import React, {useState} from 'react'
import { View, Text,ImageBackground, TextInput, FlatList, StyleSheet } from 'react-native'
import FetchAPI from '../components/FetchAPI';



const StarwarsScreen = () => {

  const [searchQuery, setsearchQuery] = useState('')

  return (
    
   <View style={styles.container}>
    
    <Text style={styles.title}>STAR WARS PAGE</Text>
  <TextInput 
    style={styles.searchInput}
    placeholder='Search the character...'
    onChangeText={ text => setsearchQuery(text)}
    value={searchQuery}
  />
    <FetchAPI searchQuery={searchQuery}/>
   </View>
   
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8c8c8c',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 16
  }
})


export default StarwarsScreen;