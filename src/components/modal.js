export const postModalComponent = {
    name: 'postModal',
    template: (post) => {
    `<div class="modal-item">
        <div id="modal" class="modal-item-post">
            <img src="assets/media/x-mark.svg" alt="close button" id="close-modal">
            <h3 class="modal--post-title">${post.title}</h3>
            <p class="modal--post-user" >username - <span>user@mail.com</span></p>
            <p class="modal--post-body">${post.body}</p>
            <div class="modal--post-comments">
                <h4>Comments</h4>
                <button id="load-comments">Load Comments</button></div>
            <div class="modal--post-buttons">
                <img class="edit" src="assets/media/editar.svg" alt="edit button">
                <img class="delete" src="assets/media/delete.svg" alt="delete button">
            </div>
        </div>
    </div>`
    },
    render: function ($thiscontainer, post, user, comments) {
        const $thisElement = renderModal($thiscontainer, this.template, post)
        return $thisElement
    },
}

function renderModal($thiscontainer, template, post) {
    const html = template(post)
    $thiscontainer.append(html)
}
