
import { postDetailComponent } from './postDetail.js'
import postsService from '../services/posts.js'

export const postListComponent = {
    name: 'postList',
    render: async ($container, page) => {
        console.log(page);

        const posts = await postsService.list(page)

        const $wrapperList = $('<section class="wrapper-list"></section>')
        $container.append($wrapperList)

        posts.forEach((post) => {
            postDetailComponent.render($wrapperList, post)
        })
    },
}
