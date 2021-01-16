import { getPostApi } from "./services/api_handler.js";

export const $container = $('.main-wrapper')

getPostApi($container)

//-------------button functionalities----------------------//
let imgs = document.querySelectorAll("img");

// imgs.forEach((img)=> {
//     if(img.classList.contains("edit")){
//         img.addEventListener("click", editPost)
//     }
//     if(img.classList.contains("close")){
//         img.addEventListener("click", closePost)
//     }
//     if(img.classList.contains("delete")){
//         img.addEventListener("click", deletePost)
//     }
// })

//-----------------showing comments---------------------------//

function showComment(com){
    $(".modal--post-comments").html(`
    <h4 id="comTag">Comments</h4>
    <p class="comment-name">${com.name}</p>
    <p class="comment-body">${com.body}</p>
    <p class="user-mail">${com.mail}</p>`)
}

function hideComment(){
    console.log("Should close")
    $(".modal--post-comments").html(`
    <h4>Comments</h4>
    <button id="load-comments">Load Comments</button></div>`)
}

const loadButton = $("#load-comments");
loadButton.on("click", showComment);

$("p").on("click", hideComment);


//-------------------editing post-----------------------------//

$(".edit>.modal--post-buttons").on("click", editComment)

function editComment(){
    console.log("hi")
    $("#modal").html(`
    <div class="modal--edit-comment">
        <h4>Edit post</h4>
        <img src="assets/media/x-mark.svg" alt="close button" id="close-modal">
    </div>

    <h5>Title</h5>
    <input type="text">
    <h5>Body</h5>
    <input type="text">
    `)
}

/*document.addEventListener("click", (e) =>{
    console.log(e.target)
    let modalChildren = modal.children;
    console.log(modalChildren)                -------------> cerrar modal clickando fuera
})*/

