function templateModal(post) {
    const template = 
        `<div id="modal" class="modal">
        <img src="assets/media/x-mark.svg" alt="close button" id="close-modal">
        <div class="modal--post-title">${post.title}</div>
        <div class="modal--post-body">${post.body}</div>
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
    </div>`
    return template
}

export function renderModal(post) {
    $('.main-wrapper').append(templateModal(post))
    $('.modal').css('display', 'block')
}

let closeBtn = document.getElementById("close-modal")

closeBtn.addEventListener("click", () =>{
    modal.style.display = "none";
})

/*document.addEventListener("click", (e) =>{
    console.log(e.target)
    let modalChildren = modal.children;
    console.log(modalChildren)                -------------> cerrar modal clickando fuera
})*/