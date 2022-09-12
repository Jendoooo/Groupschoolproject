// var explore = document.getElementById("exploremenu")

// function showExploreMenu(){
//     explore.style.display = "flex"
    

// }

// var viewhome = document.getElementById("navLinks")

// function showMenu(){
                    
//     viewhome.style.right ="0"

// }
// function hideMenu(){
//     viewhome.style.right ="-200px"
// }


var menubutton = document.getElementById("menu")
var cancelbutton = document.getElementById("cancel")
var verticalnav = document.getElementById("actualnav")

function showMenu(){
    cancelbutton.style.display = "block"
    menubutton.style.display = "none"
    verticalnav.style.transform = "translateX(200px)"
    verticalnav.style.transition = "1s"

}

function hideMenu(){
    menubutton.style.display = "block"
    cancelbutton.style.display = "none"
    verticalnav.style.transform = "translateX(-200px)"
    verticalnav.style.transition = "1.5s"
    // verticalnav.style.transition = "2s"
}