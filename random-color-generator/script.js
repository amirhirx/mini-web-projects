const newColor = document.getElementById("newColor")
const colorRgbCode = document.getElementById("colorRgbCode")

function randomNumber(max){
    return Math.floor(Math.random() * 256)
}
function randomColor(){
    let red = randomNumber(256)
    let green = randomNumber(256)
    let blue = randomNumber(256)
    let color = `rgb(${red}, ${green}, ${blue})`
    return color
}
function setRandomBackground(){
    let currentColor = randomColor()
    document.body.style.background = currentColor
    colorRgbCode.innerHTML = currentColor
}

setRandomBackground()

newColor.addEventListener("click", setRandomBackground)
document.addEventListener("keydown", (event)=>{
    if(event.code == "Enter")
        setRandomBackground()
})