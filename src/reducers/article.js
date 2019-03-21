import { GET_ARTICLE_REQUEST, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAIL } from '../actions/articleAction';

const initialState = {
    title: '',
    body: '',
    isFetching: false,
    error: '',
}

export function articleReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLE_REQUEST:
            return { ...state, isFetching: true, error: ''}

        case GET_ARTICLE_SUCCESS:
            return { ...state, author_name: action.payload.author_name, title: action.payload.title, desc: action.payload.desc, text: action.payload.text, image: action.payload.image, created_at: action.payload.created_at, isFetching: false, error: '' }

        case GET_ARTICLE_FAIL:
            return { ...state, error: true, isFetching: false }

        default:
            return state
    }
}