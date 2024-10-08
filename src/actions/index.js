import { 
    SET_RECENT_POSTS,
    SET_RESULTS_POSTS
} from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get('https://swapi.dev/api/people/3/')
            .then(response => {
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.posts
                })
            })
    }
}

export function fetchPostsWithQuery(query, callback) {
    return function(dispatch) {
        axios.get(`https://swapi.dev/api/people/?search=r2`)
            .then(response => {
                dispatch({
                    type: SET_RESULTS_POSTS,
                    payload: response.data.posts
                })
                if(callback) { callback() }
            })
    }
}