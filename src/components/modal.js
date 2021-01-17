import usersService from '../services/users.js'
import commentsService from '../services/comments.js'

export const postModalComponent = {
    name: 'postModal',
    template: (post, user, comments) => (
        `<div>
            <div id="modal" class="modal-item-post">
                <img src="assets/media/x-mark.svg" alt="close button" id="close-modal">
                <h3 class="modal--post-title">${post.title}</h3>
                <p class="modal--post-user" >${user.name} - <span>${user.email}</span></p>
                <p class="modal--post-body">${post.body}</p>
                <div class="modal--post-comments">
                    <h4>Comments</h4>
                    <button id="load-comments">Load Comments</button>
                </div>
                <div class="modal--post-buttons">
                    <img class="edit" src="assets/media/editar.svg" alt="edit button">
                    <img class="delete" src="assets/media/delete.svg" alt="delete button">
                </div>
            </div>
            <div class="modal-item-background">
            </div>
        </div>`
    ),
    render: async function ($container, post) {
        const { userId, id: postId } = post

        const user = await usersService.getById(userId)
        const comments = await commentsService.listByPostId(postId)

        const html = this.template(post, user, comments)
        const $modal = $(html)

        const $commentsList = $modal.find('.modal--post-comments')
        const $closeButton = $modal.find('#close-modal')
        const $closeBackground = $modal.find('.modal-item-background')

        // comments.forEach(comment => {
        //     // TODO: Create new component Comment
        //     const $comment = $(`<div>${JSON.stringify(comment)}</div>`)
        //     $commentsList.append($comment)
        // })

        $closeButton.on('click', () => {
            $modal.remove()
        })
        $closeBackground.on('click', () => {
            console.log('hi!');
            $modal.remove()
        })

        $container.append($modal)
    },
}

function renderModal($thiscontainer, template, post) {
    const html = template(post)
    $thiscontainer.append(html)
}
