
import { postDetailComponent } from './postDetail.js'
import postsService from '../services/posts.js'

export const postListComponent = {
    name: 'postList',
    render: async ($container) => {
        const posts = await postsService.list()

        const $wrapperList = $('<section class="wrapper-list"></section>')
        $container.append($wrapperList)

        posts.forEach((post) => {
            postDetailComponent.render($wrapperList, post)
        })
    },
}
