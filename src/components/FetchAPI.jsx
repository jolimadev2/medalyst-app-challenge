import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const apiUrl = 'https://swapi.dev/api/people/';



/**
 * ** JUAN
 * FetchAPI component to display and filter Star Wars characters.
 * @param {string} searchQuery - Search text to filter characters by name.
 * @returns {JSX.Element} React component that displays the list of characters and filtering options.
 *
 */
const FetchAPI = ({ searchQuery }) => {
  const [isLoading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [selectedValue, setSelectedValue] = useState(25); // Default value


  //WE fetch the API and catch if there is an error. Juan 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCharacters(data.results || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const filterCharacters = () => {
      if (!searchQuery) {
        setFilteredCharacters([]);
      } else {
        const filteredData = characters.filter(character =>
          character.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCharacters(filteredData);
      }
    };

    filterCharacters();
  }, [characters, searchQuery]);

  // Update filtered characters when selectedValue changes. Juan
  useEffect(() => {
    const updateFilteredCharacters = () => {
      setFilteredCharacters(characters.slice(0, selectedValue));
    };

    updateFilteredCharacters();
  }, [characters, selectedValue]);

  const renderCharacter = ({ item }) => (
    <View style={styles.characterContainer}>
      <Text style={styles.characterName}>Name: {item.name}</Text>
      <Text style={styles.characterDetail}>Eye Color: {item.eye_color}</Text>
    </View>
  );

  const handleSelectResults = (value) => {
    setSelectedValue(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, selectedValue === 25 && styles.selectedButton]}
          onPress={() => handleSelectResults(25)}
        >
          <Text style={styles.buttonText}>25 results</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedValue === 50 && styles.selectedButton]}
          onPress={() => handleSelectResults(50)}
        >
          <Text style={styles.buttonText}>50 results</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedValue === 100 && styles.selectedButton]}
          onPress={() => handleSelectResults(100)}
        >
          <Text style={styles.buttonText}>100 results</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="yellow" />
      ) : filteredCharacters.length === 0 ? (
        <Text style={styles.noResultsText}>No results found :(</Text>
      ) : (
        <FlatList
          data={filteredCharacters}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCharacter}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8c8c8c',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: 'yellow', 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  characterContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  characterDetail: {
    fontSize: 14,
    color: 'black',
  },
  noResultsText: {
    marginTop: 20,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FetchAPI;
