
function showPopup(){
    var popup = document.getElementById('popup');
    popup.classList.add('show')
}

function hidePopup(){
    var popup = document.getElementById('popup');
    popup.classList.remove('show')
}

var sound = new Audio();
sound.src = "audio/click.mp3"
sound.volume = 0.35