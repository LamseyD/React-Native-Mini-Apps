// Grab movie details here

export const fetchMovies = async (input) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${input}&apikey=f4ae269c`)
    const result = await response.json()
    // console.log(result)
    if (!result.Search){
        throw new Error(JSON.stringify(result.Error))
    }
    
    return result.Search
}

export const fetchMovieDetails = async (input) => {
    const response = await fetch(`http://www.omdbapi.com/?i=${input}&apikey=f4ae269c`)
    const result = await response.json()
    if (result.Response === "False"){
        throw new Error(JSON.stringify(result.Error))
    }
    return result
}