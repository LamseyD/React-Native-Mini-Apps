//display movie detail screen

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { fetchMovieDetails } from '../util/movies'

export default class MovieDetailsScreen extends React.Component{
    // static navigationOptions = ({navigation}) => {
    //     return {
            
    //     };
    // }

    state = {
        details: "",
        err: ""
    };

    getMovieDetails = async () => {
        const result = this.props.route.params
        try {
            let search_id = result.imdbID
            const Search = await fetchMovieDetails(search_id)
            console.log(Search)
            this.setState({details: Search})
        } catch (err){
            const errMessage = err.message
            this.setState({err: errMessage})
        }
        
    }

    componentDidMount(){
        this.getMovieDetails()   
    }

    componentWillUnmount(){
        this.setState({details:null})
    }

    render() {
        return(
            <View style = {styles.constainer}>
                <Text>{this.state.details.Title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});