import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from './screens/SearchScreen';
import MovieListScreen from './screens/MovieListScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName = "Search">
      <Stack.Screen name = "Search" component = {SearchScreen}/>
      <Stack.Screen name = "Result" component = {MovieListScreen} />
      <Stack.Screen name = "Details" component = {MovieDetailsScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  state = {
    movies: null
    /*Fill in list of movies here? */
  };

  updateSearchResult = movies => {
    this.setState({movies})
  }

  render(){
    return (
      <View style={styles.container}>
        <NavigationContainer >
          <MainStack 
            screenProps = {{
              // movies: this.state.movies,
              // updateMovies: this.updateSearchResult
            }}
          />
        </NavigationContainer>
          
    
      <StatusBar style="auto" />
      </View>
    ); 
  }

}
