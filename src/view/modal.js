let posts = document.querySelectorAll(".post")
let modal = document.getElementById("modal")

posts.forEach((p) => {
    p.addEventListener("click", renderModal)
})

function renderModal(){
    modal.style.display = "block"
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