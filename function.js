var mode = document.getElementById("mode")
var menu = document.getElementById("menu")
var logo = document.getElementById("logo")
var logo2 = document.getElementById("logo2")
var modeValue = 1
function toggleMode(){
    if(modeValue == 1){
        document.getElementById("style").href = "style-dm.css"
        mode.src = "img/dark-mode-button.png"
        modeValue = 0
        mode.style.filter = "brightness(200%)"
        menu.style.filter = "brightness(300%)"
        // mode.style.filter = "invert()"
        logo.src = 'img/logo_white.png'
        logo2.src = 'img/logo_white.png'
    }else{
        modeValue = 1
        document.getElementById("style").href = "style-lm.css"
        mode.src = "img/light_mode_button.png"
        mode.style.filter = "brightness(100%)"
        menu.style.filter = "brightness(0%)"
        logo.src = 'img/logo.png'
        logo2.src = 'img/logo.png'
    }
    console.log(modeValue)
}