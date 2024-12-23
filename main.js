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

// let headInputDrop = document.getElementById("inputDrop");

// function toggleInput(){
//     headInputDrop.style.display = window.innerWidth < 992 ? "none" : "flex";
// }

// toggleInput();

// window.addEventListener("resize", toggleInput) // resize event listener for inputDrop on mobile view and below 992px.

// InputDrop


// Cart

function cartActive(){

    // Mobile view cart below 576px:
    if(window.innerWidth <= 576){
        document.getElementById("cartList").style.width = "70%";
        document.getElementById("cartList").style.display = "flex";
        document.body.style.backgroundColor = "rgba(0,0,0,.2)";
    }
    // Tablet view cart below 768px:
    else if(window.innerWidth <= 768){
        document.getElementById("cartList").style.width = "60%";
        document.getElementById("cartList").style.display = "flex";
        document.body.style.backgroundColor = "rgba(0,0,0,.2)";
    }
    // Tablet view cart below 992px:
    else if(window.innerWidth <= 992){
        document.getElementById("cartList").style.width = "40%";
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

    // Mobile view search below 576px:
    if(window.innerWidth <= 576){
        document.getElementById("searchInput").style.width = "60%";
        document.getElementById("searchInput").style.display = "flex";
        document.body.style.backgroundColor = "rgba(0,0,0,.2)";
    }
    // Tablet view search below 768px:
    else if(window.innerWidth <= 768){
        document.getElementById("searchInput").style.width = "50%";
        document.getElementById("searchInput").style.display = "flex";
        document.body.style.backgroundColor = "rgba(0,0,0,.2)";
    }
    else if(window.innerWidth <= 992){
        document.getElementById("searchInput").style.width = "40%";
        document.getElementById("searchInput").style.display = "flex";
        document.body.style.backgroundColor = "rgba(0,0,0,.2)";
    }

}
// function searchPlace(){
function searchRemove(){
    document.getElementById("searchInput").style.display = "none";
    document.body.style.backgroundColor = "";
}

// Search Input


// Navigation Bar

function navToggle(){
    const navList = document.getElementById("navList");
    const selectList = document.querySelectorAll("#selectInputList")

    // Mobile view nav below 576px:
    if(window.innerWidth <= 992){
        navList.style.height = navList.style.height === "63vh" ? "0" : "63vh";
        selectList.forEach((list)=>{
            list.style.paddingLeft = "0";
        });
    }
}

// Navigation Bar