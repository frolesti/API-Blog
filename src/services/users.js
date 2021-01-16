import { API_BASE_URL } from './config.js'

function getById(userId) {
    return $.ajax(`${API_BASE_URL}/users/${userId}`, {
        method: 'GET',
    })
}

export default { getById }
