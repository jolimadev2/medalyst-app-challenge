import React, {useState, useEffect} from 'react'
import { ActivityIndicator,View, Text, FlatList, StyleSheet } from 'react-native'



const apiUrl = 'https://swapi.dev/api/people'


const FetchAPI = ({searchQuery}) => {

  const [isLoading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCharacters(data.results || []); 
        setLoading(false);
      } catch(error) {
        console.error('errror fetching: ', error);
        setLoading(false);
      }
    };
  

    fetchData();
  }, []);
  
useEffect(() => {
  if(searchQuery) {
    const filteredCharacters = characters.filter(character => 
      character.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredCharacters(filteredData);
  } else {
    setFilteredCharacters(characters); //show all of them if there is no searching
  }

}, [characters,searchQuery])

const renderCharacter = ({item}) => {
<View style={styles.characterContainer}>
            <Text style={styles.characterName}>Name: {item.name}</Text>
            <Text style={styles.characterDetail}>Eyes Color: {item.eye_color}</Text>
          </View>
}

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ): (
        <FlatList 
          data={filteredCharacters}
          keyExtractor={({item, index}) => index.toString()}
          renderItem={renderCharacter}
          
          
        />
      )}

    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#8c8c8c'
  },
  characterContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  characterName:{
    fontSize: 18,
    fontWeight:'bold'
  },
  characterDetail: {
    fontSize:14,
    color: '#666'
  },
})




export default FetchAPI;