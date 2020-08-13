import React from 'react'
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  row: {
    margin: 10,
    padding: 20,
    flexDirection:'row',
    justifyContent: 'center'
  },
  image: {
    width: 150,
    height: 300,
    resizeMode: 'contain'
  },
  text: {
    paddingLeft: 50,
    paddingTop: 150,
    fontSize: 32
  }
})

// fetchPoster = async input_link => {
//   try {
//     const attempt = await fetch(input_link)
//     const result = input_link
//   } catch (error) {
//     const result = ""
//   }
//   return result
// }

const Row = props => (
  <TouchableOpacity style={styles.row} onPress={() => props.onSelectMovie(props)}>

      <Image
        style = {styles.image}
        source = {props.Poster}
      />
      <Text style = {styles.text} >{props.Title.toUpperCase()}</Text>
    {/* <Text>{props.name}</Text>
    <Text>{props.phone}</Text> */}
  </TouchableOpacity>
)

Row.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
}

export default Row
