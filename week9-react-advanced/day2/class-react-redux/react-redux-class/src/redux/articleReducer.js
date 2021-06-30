const initialState = {
    articles: [],
    searchTerm:''
}


export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'setChoosenArticle':
            return {...state, articles: action.payload}
    }
    return {...state}
}