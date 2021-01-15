
export function postListView(post) {

    const $wrapperList = $('<section class="wrapper-list"></section>')
    const $postCont = $('<div class="post-list"></div>');
    $postCont.append(`<h2 class="post-title"><a>${post.title}</a></h2>`);
    $postCont.append(`<p class="post-body">${post.body}</p>`);
    $wrapperList.append($postCont)
    $wrapperList.append(`
    <div class="post-buttons">
        <img class="edit" src="assets/media/editar.svg" alt="edit button">
        <img class="delete" src="assets/media/delete.svg" alt="delete button">
    </div>`)
    $('.main-wrapper').append($wrapperList)

}