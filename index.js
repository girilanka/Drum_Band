var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i =0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var clickDrum = this.innerHTML;
        playSound(clickDrum);
        var currentText = "0";

    switch(clickDrum){
        case "1":
            currentText = "one";
            break;

        case "2":
            currentText = "two";
            break;

        case "3":
            currentText = "three";
            break;
            
            
        case "4":
            currentText = "four";
            break;

        case "5":
            currentText = "five";
            break;

        case "6":
            currentText = "six";
            break;

        case "7":
            currentText = "seven";
     
    }
        createAnimation(currentText);
        
    });
}


document.addEventListener("keypress", function(event){
    var currentClass = "0";
    playSound(event.key);

    switch(event.key){
        case "1":
            currentClass = "one";
            break;

        case "2":
            currentClass = "two";
            break;

        case "3":
            currentClass = "three";
            break;
            
            
        case "4":
            currentClass = "four";
            break;

        case "5":
            currentClass = "five";
            break;

        case "6":
            currentClass = "six";
            break;

        case "7":
            currentClass = "seven";
     
    }
    createAnimation(currentClass);
    
});







function playSound(key){
    switch(key){
        case "1":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "2":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "3":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
            
        case "4":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "5":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "6":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "7":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();  
        
     }
}

function createAnimation(currentTextOrClass){
   var activateButton = document.querySelector("."+currentTextOrClass);

   activateButton.classList.add("pressed");

   setTimeout(function(){
    activateButton.classList.remove("pressed");
   },200);
}