// let initState = {
//     propertyOne: 'reducer state one',
//     propertyTwo: '',
//     counter: 0
// }
//
//
// export const reducer = (state = initState, action = {}) => {
//     switch (action.type) {
//         case 'propOne':
//         return {...state, propertyOne: action.payload}
//         case 'propTwo':
//             return {...state,propertyTwo: state.propertyOne}
//         case 'counter':
//             return {...state,counter: ++state.counter}
//     }
//     return {...state};
// }


// const initState = {
//     count: 0
// }

// export const reducer = (state = initState, action = {}) => {
//     switch (action.type) {
//         case 'countPlus':
//             return {...state, count: ++state.count}
//         case 'countMinus':
//             return {...state, count: --state.count}
//     }
//     return {...state}
// }


// const initState = {
//       movies:[
//           {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,id:1},
//           {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,id:2},
//           {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,id:3},
//           {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,id:4},
//           {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,id:5},
//       ],
//     chosen:[]
// }
//
// const initState = {
//     chose: 'spiderman'
// }
// export const reducer = (state = initState, action = {}) => {
//     switch (action.type) {
//         case 'MOVIE_SELECTED':
//             return {...state,chose:action.payload}
//         default:
//             return {...state}
//     }
// }
//
// export const moviesReducer = () => {
//     return (
//         [
//             {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,},
//             {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,},
//             {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,},
//             {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,},
//             {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,},
//         ]
//     )
// }

export const reducer = ()=>{

}