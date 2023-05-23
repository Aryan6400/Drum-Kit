var buttonSet = document.querySelectorAll(".drum")
for(i=0;i<buttonSet.length;i++){
    buttonSet[i].addEventListener("click", function(){
        var btnText = this.textContent;        
        makeSound(btnText);
        buttonAnimation(btnText);
    });
}

document.addEventListener("keydown", function(KeyboardEvent){
    var keyText = KeyboardEvent.key;
    makeSound(keyText);
    buttonAnimation(keyText);
});

document.querySelector("span").addEventListener("click", function(){
    makeSound("w");
    setTimeout(function(){
        makeSound("a");
    }, 250);
    setTimeout(function(){
        makeSound("s");
    }, 500);
    setTimeout(function(){
        makeSound("d");
    }, 750);
    setTimeout(function(){
        makeSound("j");
    }, 1000);
    setTimeout(function(){
        makeSound("k");
    }, 1250);
    setTimeout(function(){
        makeSound("l");
    }, 1500);
})


document.querySelector("h2").classList.add("yellow");
setTimeout(function(){
    document.querySelector("h2").classList.remove("yellow");
}, 3000);

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
    
}
