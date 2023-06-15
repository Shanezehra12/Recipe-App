import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Splash = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Recipe');
    }, 4000);
  }, []);

  return (
    <View style={{flex: 1, margin: 15}}>
      <Image
        style={{width: '90%', height: 180}}
        source={require('../../assets/up.jpeg')}
      />

      <Text style={styles.text1}>Just The Recipe</Text>
      <Text style={styles.text2}>For the one's who love cooking!</Text>

      <Image
        style={{width: '90%', height: 180, alignSelf: 'flex-end'}}
        source={require('../../assets/bottom.png')}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  text1: {
    color: 'red',
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 120,
    alignSelf: 'center',
  },

  text2: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 120,
    alignSelf: 'center',
  },
});
