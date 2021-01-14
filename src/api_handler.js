
function getPostApi() {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((json) => {
        json.data.forEach(post => {
        });
    })
}

function getUserApi() {
    return axios.get("https://jsonplaceholder.typicode.com/users")
    .then((json) => {
        json.data.forEach(user => {

        });
    })
}

function getCommentsApi() {
    return axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((json) => {
        json.data.forEach(comment => {

        });
    })
}

getPostApi()
getUserApi()
getCommentsApi()