import { postListComponent } from './components/postList.js'

(async () => {
    let page = 0
    const $container = $('.main-wrapper')
    $('.pagination a li').on('click', function(e) { 
        e.preventDefault()
        page = ($(e.target).text()) -1
        $('.pagination a li').removeClass('is-active')
        $(this).addClass('is-active')
        $('.wrapper-list').remove()
        postListComponent.render($container, page)
    })
    
    await postListComponent.render($container, page)
})()
