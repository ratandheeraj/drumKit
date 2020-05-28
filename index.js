for (var i = 0; i < 7; i++) {
  var hello = i;
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var innerButton = this.innerHTML;
    makeSound(innerButton);
    buttonAnimation(innerButton);
  });

  document.addEventListener("keypress", function (x) {
    makeSound(x.key);
    buttonAnimation(x.key);
  });
}
function makeSound(key) {
  switch (key) {
    case "w":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "a":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "s":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "k":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "l":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
  }
}
function buttonAnimation(currentKey) {
  var buttonClass = document.querySelector("." + currentKey);
  buttonClass.classList.add("pressed");
  setTimeout(function () {
    buttonClass.classList.remove("pressed");
  }, 100);
}
