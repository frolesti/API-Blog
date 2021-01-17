import { postListComponent } from './components/postList.js'

(async () => {
    const $container = $('.main-wrapper')
    await postListComponent.render($container)
})()
