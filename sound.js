
for(var n=0 ; n<7 ;n++){
  document.querySelectorAll(".drum")[n].addEventListener("click" , function (){
    var key= this.innerHTML;
    sounds(key);
    buttonanimate(key);
  }
);
}

document.addEventListener("keypress" ,function(event){
  sounds(event.key);
  buttonanimate(event.key);
});
function sounds(key)
{
  switch(key){

    case "w":
    var waudio= new Audio("sounds/tom-1.mp3");
    waudio.play();
    break;

    case "a":
    var aaudio= new Audio("sounds/tom-2.mp3");
    aaudio.play();
    break;

    case "s":
    var saudio= new Audio("sounds/tom-3.mp3");
    saudio.play();
    break;

    case "d":
    var daudio= new Audio("sounds/tom-4.mp3");
    daudio.play();
    break;

    case "j":
    var jaudio= new Audio("sounds/snare.mp3");
    jaudio.play();
    break;

    case "k":
    var kaudio= new Audio("sounds/crash.mp3");
    kaudio.play();
    break;

    case "l":
    var laudio= new Audio("sounds/kick-bass.mp3");
    laudio.play();
    break;

    default:console.log("errorincode");
  }
}
function buttonanimate(key){
  var button=document.querySelector("."+key);
  button.classList.add("pressed");
  setTimeout(function(){
    button.classList.remove("pressed");
  },100);
}
