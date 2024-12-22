// InputDrop

function bgPrimary(){
    document.getElementById("outlineColorDropDown").style.outline = "4px solid rgba(13, 109, 253, 0.35)";
}

function bgNone(){
    document.getElementById("outlineColorDropDown").style.outline = "none";
}

function bgPrimaryBox(){
    document.getElementById("outlineColorInput").style.outline = "4px solid rgba(13, 109, 253, 0.35)";
}

function bgNoneBox(){
    document.getElementById("outlineColorInput").style.outline = "none";
}

// Responsive Mobile

let headInputDrop = document.getElementById("inputDrop");

function toggleInput(){
    headInputDrop.style.display = window.innerWidth < 992 ? "none" : "flex";
}

toggleInput();

window.addEventListener("resize", toggleInput) // resize event listener for inputDrop on mobile view and below 992px.

// InputDrop


// Cart

function cartActive(){

    // Mobile view cart below 576px:
    if(window.innerWidth < 576){
        document.getElementById("cartList").style.width = "60%";
        document.getElementById("cartList").style.display = "flex";
        document.body.style.backgroundColor = "rgba(0,0,0,.2)";
    }
    else{
        document.getElementById("cartList").style.display = "flex";
        document.body.style.backgroundColor = "rgba(0,0,0,.2)";
    }
}

function cartDeActive(){
    document.getElementById("cartList").style.display = "none";
    document.body.style.backgroundColor = "";
}

// Cart

// Search Input

function searchPlace(){

    if(window.innerWidth < 576){
        document.getElementById("searchInput").style.display = "flex";
        document.body.style.backgroundColor = "rgba(0,0,0,.2)";
    }

}

function searchRemove(){
    document.getElementById("searchInput").style.display = "none";
    document.body.style.backgroundColor = "";
}

// Search Input