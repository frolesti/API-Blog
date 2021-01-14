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

//------------------modal rendering-------------------------//

let posts = document.querySelectorAll(".post")
let modal = document.getElementById("modal")

posts.forEach((p) => {
    p.addEventListener("click", renderModal)
})

function renderModal(){
    modal.style.display = "block"
}


//----------------closing modal--------------------------------//

let closeBtn = document.getElementById("close-modal")

closeBtn.addEventListener("click", () =>{
    modal.style.display = "none";
})

/*document.addEventListener("click", (e) =>{
    console.log(e.target)
    let modalChildren = modal.children;
    console.log(modalChildren)                -------------> cerrar modal clickando fuera
})*/

