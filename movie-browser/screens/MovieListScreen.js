//Display search result. Grab movie list from ../components/MovieList

import React from 'react';
import { Button, View, StyleSheet, FlatList } from 'react-native';

import MovieList from '../components/MovieList'

const styles = StyleSheet.create({

});

export default class MovieListScreen extends React.Component{
    // static navigationOptions = ({navigation}) => {
    //     return {};
    // }

    state = {
        movies: null
    };

    getMovieList = () => {
        // const result_2 = this.props.navigation.getParams(Search)
        const result = this.props.route.params
        console.log(result)
        this.setState({movies: result})
        //process movie_list
        // this.props.screenProps.updateMovies(result)
        
    };

    componentDidMount(){
        this.getMovieList()   
    }

    componentWillUnmount(){
        this.setState({movies: null})
    }

    handleSelectMovie = movie => {
        this.props.navigation.push('Details', movie)
    }

    render() {
        return(
            <View>
                <MovieList
                    movies = {this.state.movies}
                    onSelectMovie = {this.handleSelectMovie}
                />
            </View>
        );
    }
}

