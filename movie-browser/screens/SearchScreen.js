//display search screen. Grab search form component from ../components/SearchForm

import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import {fetchMovies} from '../util/movies';

export default class SearchScreen extends React.Component{
    state = {
        search_querry: "",
        err: "",
    }
    
    search = async () => {
        try{
            //g flag -> replaces multiple times
            let processed_string = this.state.search_querry.replace(/\s+/g,'+')
            const Search = await fetchMovies(processed_string)
            console.log(Search)
            this.props.navigation.push('Result',Search)
            
        }catch (err){
            const errMessage = err.message
            this.setState({err: errMessage})
        }
        //Grab search from util
        //push movie list screen on the stack
    };

    handleSearchUpdate = search_querry => {
        this.setState({search_querry})
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.error}>{this.state.err}</Text>
                <TextInput      
                    style = {styles.text_input}     
                    placeholder="Movie Title"
                    value={this.state.search_querry}
                    onChangeText={this.handleSearchUpdate}
                    autoCapitalize = "words"
                />
                <Button 
                    title = "Search" 
                    onPress = {this.search}
                />
                {/* <SearchForm onSubmit={}/> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        flex: 1,
        alignItems: 'center',    
    },

    text: {
        textAlign: "center"
    },
    
    text_input: {
        height: 30, 
        width: 320,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: "left"
    },

    error: {
        textAlign: 'center',
        color: 'red',
    },
})