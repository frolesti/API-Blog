
import { postModalComponent } from './modal.js'

export const postDetailComponent = {
    name: 'postDetail',
    render: function ($container, post) {
        const { title, body } = post

        const $wrapperPost = $('<div class="wrapper-post"></div>')
        const $postContent = $('<div class="post-content"></div>')
        const $postTitle = $(`<h2 class="post-title"><a>${title}</a></h2>`)
        const $postBody = $(`<p class="post-body">${body}</p>`)

        $postContent.append($postTitle)
        $postContent.append($postBody)

        $wrapperPost.append($postContent)
        $wrapperPost.append(`
            <div class="post-buttons">
                <img class="edit" src="assets/media/editar.svg" alt="edit button">
                <img class="delete" src="assets/media/delete.svg" alt="delete button">
            </div>
        `)

        $postTitle.on('click', async () => {
            await postModalComponent.render($container, post)
        })

        $container.append($wrapperPost)
    },
}
