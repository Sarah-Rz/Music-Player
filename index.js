play = (str) => {
    if(str === "r" || str === "R") {
        document.getElementById('display').innerText = "Remove";
    } 
    if(str === "c" || str === "C") {
        document.getElementById('display').innerText = "Come On Get High";
    } 
    if(str === "f" || str === "F") {
        document.getElementById('display').innerText = "Fold";
    } 
    if(str === "l" || str === "L") {
        document.getElementById('display').innerText = "Lights";
    } 
    if(str === "i" || str === "I") {
        document.getElementById('display').innerText = "I will Fade";
    } 
    if(str === "h" || str === "H") {
        document.getElementById('display').innerText = "Headlights";
    } 
    if(str === "n" || str === "N") {
        document.getElementById('display').innerText = "Nothing else";
    } 
    if(str === "p" || str === "P") {
        document.getElementById('display').innerText = "Pulse";
    } 
    if(str === "a" || str === "A") {
        document.getElementById('display').innerText = "Again";
    } 

    let audio = document.getElementById(str);
    audio.play();
}

pause = (str) => {
    let audio = document.getElementById(str);
    audio.pause();
}

window.document.onkeyup = event => { 
    if(event.key === "r" || event.key === "R") {
        play("R");
    } 
    if(event.key == "Enter") {
        pause("R");
    } 

    if(event.key === "c" || event.key === "C") {
        play("C");
    } 
    if(event.key == "Enter") {
        pause("C");
    } 

    if(event.key === "f" || event.key === "F") {
        play("F");
    }
    if(event.key == "Enter") {
        pause("F");
    } 

    if(event.key === "l" || event.key === "L") {
        play("L");
    } 
    if(event.key == "Enter") {
        pause("L");
    } 

    if(event.key === "i" || event.key === "I") {
        play("I");
    } 
    if(event.key == "Enter") {
        pause("I");
    } 

    if(event.key === "h" || event.key === "H") {
        play("H");
    }
    if(event.key == "Enter") {
        pause("H");
    }  

    if(event.key === "n" || event.key === "N") {
        play("N");
    } 
    if(event.key == "Enter") {
        pause("N");
    } 

    if(event.key === "p" || event.key === "P") {
        play("P");
    } 
    if(event.key === "Enter") {
        pause("P");
    } 

    if(event.key === "a" || event.key === "A") {
        play("A");
    } 
    if(event.key == "Enter") {
        pause("A");
    } 

    if(event.key === "s" || event.key === "S") {
        play("S");
    } 
    if(event.key == "Enter") {
        pause("S");
    } 
    
}