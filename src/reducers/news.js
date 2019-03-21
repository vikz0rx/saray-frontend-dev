import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAIL } from '../actions/newsActions';

const initialState = {
    list: [],
    isFetching: false,
    error: '',
}

export function newsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS_REQUEST:
            return { ...state, isFetching: true, error: ''}

        case GET_NEWS_SUCCESS:
            return { ...state, list: action.payload, isFetching: false, error: '' }

        case GET_NEWS_FAIL:
            return { ...state, error: true, isFetching: false }

        default:
            return state
    }
}