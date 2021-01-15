import { getPostApi } from "./services/api_handler.js";

getPostApi()

//-------------button functionalities----------------------//
let imgs = document.querySelectorAll("img");

imgs.forEach((img)=> {
    if(img.classList.contains("edit")){
        img.addEventListener("click", editPost)
    }
    if(img.classList.contains("close")){
        img.addEventListener("click", closePost)
    }
    if(img.classList.contains("delete")){
        img.addEventListener("click", deletePost)
    }
})

function editPost(){
    console.log("Editing post")
}
function closePost(){
    console.log("Closing post")
}
function deletePost(){
    console.log("Deleting post")
}
