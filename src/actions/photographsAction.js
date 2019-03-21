// http://127.0.0.1:8000
// http://68.183.192.166

export const GET_PHOTOGRAPHS_REQUEST = 'GET_PHOTOGRAPHS_REQUEST';
export const GET_PHOTOGRAPHS_SUCCESS = 'GET_PHOTOGRAPHS_SUCCESS';
export const GET_PHOTOGRAPHS_FAIL = 'GET_PHOTOGRAPHS_FAIL';

export function getPhotographs() {
    return (dispatch) => {
        dispatch({
            type: GET_PHOTOGRAPHS_REQUEST,
        })

        fetch('http://68.183.192.166/api/v0/photographs/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: GET_PHOTOGRAPHS_SUCCESS,
                payload: response,
            })
        })
        .catch(error => {
            alert(error.message)
            dispatch({
                type: GET_PHOTOGRAPHS_FAIL,
            })
        })
    }
}