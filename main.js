// window.onload = function (){



// let canvas = document.getElementById('canvas');
// let context = canvas.getContext('2d');

let img = new Image();

img.src = './img/carousel-img.png';

img.onload = function(){

    // context.imageSmoothingEnabled = true;

    context.drawImage(img, 100, 100, 200, 200);
    
} 


// context.moveTo(0, 00);
// context.lineTo(600, 400);
// context.stroke();


// context.beginPath();
// context.rect(50, 50, 200, 150);
// context.lineWidth = 10;
// context.fillStyle = "green";
// context.strokeStyle = "red";
// context.strokeStyle = "#0f0";
// context.fill();
// context.font = '20px Arial ';
// context.fillStyle = "#00f";
// context.fillText("salom Asad", 300, 300);

// context.strokeStyle = "gray";
// context.strokeText('Hello', 100, 150)
// context.stroke();

// context.beginPath();
// context.arc(450, 150, 100, 0, 2* Math.PI)
// context.stroke();


// };

var canvas = document.getElementById("canvas"); 
var context = canvas.getContext("2d"); 
var x = 0; 
var y = 100; 
var t;
 
// function draw() { 
//   context.beginPath(); 
//   context.rect(x, y, 100, 100); 
//   context.fillStyle="red"; 
//   context.fill(); 
// }
setInterval(
    // img.onload = function(){
function draw() { 
    // context.drawImage(img, 100, 100, 200, 200);
    context.clearRect(0, 0, 600, 600)
    context.beginPath(); 
    context.rect(x, y, 100, 100); 
    context.fillStyle = "red"; 
    context.fill(); 

    t = Date.now();

    // console.log(t);
   
    x += 1; 
    y+=1;
    if (x >= 600 && y >=600) { 
      x = -100 ;
      y= -100;
    } 
  }
  , 1)
  ;