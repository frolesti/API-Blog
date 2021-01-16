import { API_BASE_URL } from './config.js'

function listByPostId(postId) {
    return $.ajax(`${API_BASE_URL}/comments/?postId=${postId}`, {
        method: 'GET'
    })
}

export default { listByPostId }
