//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById("ball");
var velocity = 10;
var positionX = 0;
var reverse = false;
var positionY = 0;

//write a function that can change the position of the html element "ball"
function moveBall() {
  if (reverse) {
    positionX = positionX - velocity;
    ball.style.left = positionX + "px";
    ball.style.background = "green";
    ball.style.width = "75px";
    ball.style.height = "75px";
    
    positionY = positionY - velocity;
    ball.style.top = positionY + "px";
  } else {   
    positionX = positionX + velocity;
    ball.style.left = positionX + "px";
    ball.style.background = "red";
    ball.style.width = "25px";
    ball.style.height = "25px";
    
    positionY = positionY + velocity;
    ball.style.top = positionY + "px";

  }
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;
  if (positionX > Xmax || positionX == Xmin || positionY > Ymax || positionY == Ymin) {
    console.log("X flipped");
    reverse = !reverse;
  }
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
