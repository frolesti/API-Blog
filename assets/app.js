//-------------button functionalities----------------------//
let imgs = document.querySelectorAll("img");
console.log(imgs)
imgs.forEach((img)=> {
    if(img.classList.contains("edit")){
        img.addEventListener("click", editPost())
    }
    if(img.classList.contains("close")){
        img.addEventListener("click", closePost())
    }
    if(img.classList.contains("delete")){
        img.addEventListener("click", deletePost())
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

//------------------modal rendering-------------------------//

let posts = document.querySelectorAll(".post")
let modal = document.getElementById("modal")

posts.forEach((p) => {
    console.log(p)
    p.addEventListener("click", renderModal(p))
})

function renderModal(post){
    modal.style.visibility = "hidden"
    console.log("Hi, I'm changing visibility")
}