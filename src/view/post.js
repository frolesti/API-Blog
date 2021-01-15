import { renderModal } from "./modal.js"

export const postComponent = {
    name: 'post',
    template: ({title, body, id}) => {
        const $postCont = $('<div class="post-list"></div>');
        $postCont.append(`<h2 class="post-title"><a>${title}</a></h2>`);
        $postCont.append(`<p class="post-body">${body}</p>`);
        return $postCont
    },
    listeners: function ($thisElement, post) {

        $('.post-title').on('click', renderModal)
    },
    render: function ($postContainer, post) {
        const $thisElement = renderTemplatePost($postContainer, this.template, post)
        this.listeners($thisElement, post)
        return $thisElement
    },
}

function renderTemplatePost($postContainer, template, post) {
    const $wrapperPost = $('<div class="wrapper-post"></div>')
    const html = template(post)
    $wrapperPost.append(html)
    $wrapperPost.append(`
    <div class="post-buttons">
        <img class="edit" src="assets/media/editar.svg" alt="edit button">
        <img class="delete" src="assets/media/delete.svg" alt="delete button">
    </div>`)

    $postContainer.append($wrapperPost)
}


