var player = document.querySelector('#audioPlayer');
var disc = document.getElementById('disc');

function play(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);
    var bouton =  document.getElementById('modelec');
    console.log(bouton)


    if (player.paused) {
        player.load();
        player.play();
        bouton.innerHTML = '<i class="fa fa-pause" id="icon"></i>';
        console.log('lecture')
        console.log(bouton)
        disc.style.transform = "rotate(2520deg)";
        disc.style.webkitTransform = "rotate(2520deg)";
        disc.style.transition = "all 33s ease";
        disc.style.webkittransition = "all 33s ease";
    } else {
        player.pause();	
        bouton.innerHTML = '<i class="fa fa-play" id="icon"></i>';
        console.log('pause')
        console.log(bouton)
        disc.style.transform = "rotate(0deg)";
        disc.style.webkitTransform = "rotate(0deg)";
        disc.style.transition = "all 0.0s";
        disc.style.webkittransition = "all 0.0s";
    }

    
}

