import React from 'react'
import {FlatList} from 'react-native'
import PropTypes from 'prop-types'

import Row from '../util/Row'

const MovieList = props => <FlatList 
          renderItem={({item}) => <Row {...item} onSelectMovie={props.onSelectMovie}/>} 
          data={props.movies} 
          keyExtractor = {item => item.imdbID}
        />

MovieList.propTypes = {
  movies: PropTypes.array,
}

export default MovieList
