import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import FetchAPI from "../components/FetchAPI";
import  SearchBar  from "../components/SearchBar"

const StarwarsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>STAR WARS PAGE</Text>
      <SearchBar onSearch={handleSearch} />
      <FetchAPI searchQuery={searchQuery} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8c8c8c",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 16,
  },
});

export default StarwarsScreen;
