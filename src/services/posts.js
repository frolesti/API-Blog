import { API_BASE_URL, LIST_LIMIT } from './config.js'

function list(page = 0, limit = LIST_LIMIT) {
    const start = page * limit
    return $.ajax(`${API_BASE_URL}/posts?_start=${start}&_limit=${limit}`, {
        method: 'GET',
    })
}

function getById(postId) {
    return $.ajax(`${API_BASE_URL}/posts/${postId}`, {
        method: 'GET',
    })
}

function create(post) {
    return $.ajax(`${API_BASE_URL}/posts`, {
        method: 'POST',
        data: post,
    })
}

function update(post) {
    return $.ajax(`${API_BASE_URL}/posts/${post.id}`, {
        method: 'PUT',
        data: post,
    })
}

function remove(postId) {
    return $.ajax(`${API_BASE_URL}/posts/${postId}`, {
        method: 'DELETE',
    })
}

export default {
    list,
    getById,
    create,
    update,
    remove,
}
