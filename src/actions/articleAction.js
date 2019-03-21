// http://127.0.0.1:8000
// http://68.183.192.166

export const GET_ARTICLE_REQUEST = 'GET_ARTICLE_REQUEST';
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS';
export const GET_ARTICLE_FAIL = 'GET_ARTICLE_FAIL';

export function getArticle(id) {
    return (dispatch) => {
        dispatch({
            type: GET_ARTICLE_REQUEST,
        })

        fetch('http://68.183.192.166/api/v0/news/' + id + '/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: GET_ARTICLE_SUCCESS,
                payload: {
                    author_name: response.author_name,
                    title: response.title,
                    desc: response.desc,
                    text: response.text,
                    image: response.image,
                    created_at: response.created_at,
                },
            })
        })
        .catch(error => {
            dispatch({
                type: GET_ARTICLE_FAIL,
            })
        })
    }
}