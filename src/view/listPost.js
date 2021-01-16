
import { postComponent } from "./post.js"

const listComponent = {
    name: 'listPost',
    template: () => {
        const $wrapperList = $('<section class="wrapper-list"></section>')
        return $wrapperList
    },
    render: function ($container, json) {
        renderTemplate($container, this.template)

        const $postContainer = $('.wrapper-list')
        json.forEach((post) => {
            postComponent.render($postContainer, post)
        })
    },
}
function renderTemplate($container, template) {
    const html = template
    $container.append(html)
}

export function postListView($container, json) {
    listComponent.render($container, json)
}


