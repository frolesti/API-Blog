
export const postModalComponent = {
    name: 'postModal',
    template: ({ title, body }) => {
    `<div id="modal" class="modal">
        <img src="assets/media/x-mark.svg" alt="close button" id="close-modal">
        <h3 class="modal--post-title">${title}</h3>
        <p class="modal--post-body">${body}</p>
        <div class="modal--post-user">
            User
            <div class="user-info">
                <p>user.username}</p>
                <p>user.email}</p>
            </div>
        </div>
        <div class="modal--post-comments">
            <h4>Comments</h4>
            <button id="load-comments">Load Comments</button></div>

        <div class="modal--post-buttons">
            <img class="edit" src="assets/media/editar.svg" alt="edit button">
            <img class="delete" src="assets/media/delete.svg" alt="delete button">
        </div>
    </div>`}
    ,
    getChildren: function () {
        return {
            $buttonCloseModal: document.querySelector('.close'),
            $backgroundModal: document.querySelector('.modal-item'),
        }
    },
    listeners: function (action) {
        // action = [add, remove]

        const actionEventListener = action === 'remove'
            ? 'removeEventListener'
            : 'addEventListener'

        const {
            $buttonCloseModal,
            $backgroundModal,
        } = this.getChildren()

        $buttonCloseModal[actionEventListener]('click', event => {
            event.stopPropagation()
            document.querySelector('.modal-item').remove()
        })

        $backgroundModal[actionEventListener]('click', () => {
            document.querySelector('.modal-item').remove()
        })
    },
    render: function ($container, pin) {
        renderModal($container, this.template, pin)
        this.listeners('add')
    },
}

export function renderModal($container, template, post) {
    const html = template(post)
    $container.append(html)
}