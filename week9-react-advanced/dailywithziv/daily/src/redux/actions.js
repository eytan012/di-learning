export const INIT_MOVIE = 'INIT_MOVIE'
export const MOVIE_SELECTED = 'MOVIE_SELECTED'
export const GET_YOGA = 'GET_YOGA'

export const initMovies = () => {
    const api = [
        {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,},
        {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,},
        {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,},
        {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,},
        {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,},
    ]
    return {
        type: INIT_MOVIE,
        payload: api
    }
}

export const getYoga =()=> async (dispatch) => {
    try{
        const res = await fetch('https://zivuch.github.io/yogaapi.json')
        const data = await res.json()
        dispatch({
            type:GET_YOGA,
            payload: data
        })
    }catch (e){
        console.log(e)
    }
}


export const movieDetails = (movie) => {
    return {
        type: MOVIE_SELECTED,
        payload: movie
    }
}