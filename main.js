
function openNav() {    document.getElementById("mySidenav").style.width = "45%";
document.getElementById("mySidenav").style.zIndex = "2";
document.getElementById("main").style.marginLeft = "45%";
document.getElementById("menuhambuger").style.visibility = "hidden";
}
function closeNav() {    document.getElementById("mySidenav").style.width = "0";    
document.getElementById("main").style.marginLeft= "0";
document.getElementById("menuhambuger").style.visibility = "visible";
}

