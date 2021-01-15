import { postListView } from "../view/listPost.js";

export function getPostApi() {
    return $.ajax("https://jsonplaceholder.typicode.com/posts", {
        method: 'GET'
    }).then(
        function success(json, statusText, jqXHR) {
            json.forEach((post) => {
                postListView(post)
            })
            // console.log('statusText success', statusText);
        },
        function failed(jqXHR, errorStatus, errorMessage) {
            // console.log(errorMessage);
        }
    )
}

export function getUserApi() {
    return $.ajax("https://jsonplaceholder.typicode.com/users", {
    method: 'GET'
    }).then(
        function success(json, statusText, jqXHR) {
            json.forEach(user => {
                // console.log('user', user);
            });
            console.log('statusText success', statusText);
        },
        function failed(jqXHR, errorStatus, errorMessage) {
            console.log(errorMessage);
        }
    )
}

export function getCommentsApi() {
    return $.ajax("https://jsonplaceholder.typicode.com/comments", {
    method: 'GET'
    }).then(
        function success(json, statusText, jqXHR) {
            json.forEach(comment => {
                // console.log('comment', comment);
            });
            console.log('statusText success', statusText);
        },
        function failed(jqXHR, errorStatus, errorMessage) {
            console.log(errorMessage);
        }
    )
}