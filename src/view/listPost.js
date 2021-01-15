import { renderModal } from "./modal.js"

const postComponent = {
    name: 'post',
    template: ({title, body, id}) => {
        const $wrapperList = $('<section class="wrapper-list"></section>')
        const $postCont = $('<div class="post-list"></div>');
        $postCont.append(`<h2 class="post-title"><a>${title}</a></h2>`);
        $postCont.append(`<p class="post-body">${body}</p>`);
        $wrapperList.append($postCont)
        $wrapperList.append(`
        <div class="post-buttons">
            <img class="edit" src="assets/media/editar.svg" alt="edit button">
            <img class="delete" src="assets/media/delete.svg" alt="delete button">
        </div>`)
        return $wrapperList
    },
    listeners: function (post) {
        $('.post-title').on('click', () => {
            console.log('hi!');
            renderModal(post)
        })
    },
    render: function ($container, post) {
        const $thisElement = renderTemplate($container, this.template, post)
        this.listeners(post)
        return $thisElement
    },
}
function renderTemplate($container, template, post) {
    const html = template(post)
    $container.append(html)
}

export function postListView($container, post) {
    console.log();
    postComponent.render($container, post)
}


