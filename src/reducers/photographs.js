import { GET_PHOTOGRAPHS_REQUEST, GET_PHOTOGRAPHS_SUCCESS, GET_PHOTOGRAPHS_FAIL } from '../actions/photographsAction';

const initialState = {
    list: [],
    isFetching: false,
    error: '',
}

export function photographsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PHOTOGRAPHS_REQUEST:
            return { ...state, isFetching: true, error: ''}

        case GET_PHOTOGRAPHS_SUCCESS:
            return { ...state, list: action.payload, isFetching: false, error: '' }

        case GET_PHOTOGRAPHS_FAIL:
            return { ...state, error: true, isFetching: false }

        default:
            return state
    }
}