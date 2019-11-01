var disc = document.getElementById('disc');
var player = document.getElementById('audioPlayer')
var bouton =  document.getElementById('modelec');

bouton.addEventListener('click', play)
disc.addEventListener('click', play);

 function play(){
    if(player.paused) {
        player.load();
        player.play();
        bouton.innerHTML = '<i class="fa fa-pause" id="icon"></i>';
        disc.style.animation ="rotation 3s linear infinite";
        disc.style.webkitAnimation = "rotation 3s linear infinite";
        disc.style.webkitAnimationPlayState = "running";
        disc.style.animationPlayState = "running";
        

     } else {
        player.pause();
        bouton.innerHTML = '<i class="fa fa-play" id="icon"></i>';
        disc.style.webkitAnimationPlayState = "paused";
        disc.style.animationPlayState = "paused";
    }
 }