const $ = document
const pass = $.getElementById("password")
const showOrHide = $.getElementById("showOrHide")

function showOrHideFunc(){
    let passStat = pass.getAttribute("type")
    if(passStat == "password"){
        pass.setAttribute("type", "text")
    }else{
        pass.setAttribute("type", "password")
    }
}

showOrHide.addEventListener("click", showOrHideFunc)