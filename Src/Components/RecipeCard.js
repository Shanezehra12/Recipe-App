import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RecipeCard = ({ recipe }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Image style= {styles.imagestyle} source={{uri: recipe.image}}/>
      <Text style={styles.description}>{recipe.description}</Text>

      <Text style={styles.title}>Ingredients:</Text>
      <Text style={styles.ingredients}>{recipe.ingredients.join(', ')}</Text>

      <Text style={styles.title}>How to Make:</Text>
      <Text style={styles.method}>{recipe.method}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: "black"
  },
  description: {
    fontSize: 18,
    marginBottom: 5,
    color: "black"
  },
  ingredients: {
    fontSize: 16,
    marginBottom: 5,
    color: "black"
  },
  method: {
    fontSize: 16,
    marginBottom: 5,
    color: "black"
  },
  imagestyle: {
    alignSelf: "center",
    width: "100%",
    height: 180
  }
});

export default RecipeCard;
