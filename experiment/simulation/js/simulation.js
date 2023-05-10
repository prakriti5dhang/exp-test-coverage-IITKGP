/*Redeveloped
Lab: Software Engineering
Exp: Estimation of Test Coverage Metrics and Structural Complexity
File Name: simulation.js
Author: Prakriti Dhang*/

function playsimulation(){

    document.getElementById("playbtn").disabled=true;
   
    canvas8 = document.getElementById("myCanvas8");
    ctx8 = canvas8.getContext("2d");
    var posY8= 130 ;
    var speed8=1;

    function drawLine8(){
    
    ctx8.strokeStyle = 'red';
    ctx8.lineWidth = 7;
    ctx8.beginPath();
    ctx8.moveTo(0, posY8); /*  0-130*/
    ctx8.lineTo(0, 180);
    ctx8.stroke();
}

function moveLine8 () {
	posY8 += speed8;
  
  if (posY8 < 0 || posY8 > canvas8.height) {
	  speed8 = speed8 * -1;
  }
}

function loop8() {
	// clear old frame;
 // ctx.clearRect(0,0,canvas.width, canvas.height);
  moveLine8();
  drawLine8();
cancelani8=  requestAnimationFrame(loop8);
}
requestAnimationFrame(loop8);
setTimeout(canvas9, 2200);


    function canvas9(){

    canvas9 = document.getElementById("myCanvas9");
    ctx = canvas9.getContext("2d");
    var posY = 130 ;
    var speed=1;

    function drawLine(){
    
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(0, posY); /*  0-130*/
    ctx.lineTo(0, 180);
    ctx.stroke();
}

function moveLine () {
	posY += speed;
  
  if (posY < 0 || posY > canvas9.height) {
	  speed = speed * -1;
  }
}

function loop() {
	// clear old frame;
 // ctx.clearRect(0,0,canvas.width, canvas.height);
  moveLine();
  drawLine();
cancelani=  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
setTimeout(canvas10, 2200);
} 
    

function canvas10(){

    canvas10 = document.getElementById("myCanvas10");
    ctx10 = canvas10.getContext("2d");
    var posY10 = 130 ;
    var speed10=1;

    function drawLine10(){
    
    ctx10.strokeStyle = 'red';
    ctx10.lineWidth = 7;
    ctx10.beginPath();
    ctx10.moveTo(0, posY10); /*  0-130*/
    ctx10.lineTo(0, 180);
    ctx10.stroke();
}

function moveLine10 () {
	posY10 += speed10;
  
  if (posY10 < 0 || posY10 > canvas10.height) {
	  speed10 = speed10 * -1;
  }
}

function loop10() {
	// clear old frame;
 // ctx.clearRect(0,0,canvas.width, canvas.height);
  moveLine10();
  drawLine10();
cancelani10=  requestAnimationFrame(loop10);
}
requestAnimationFrame(loop10);
}
}



/***************************************  Onchange function select path******************************************/
function selectpath(){

var selpath = document.getElementById("pathselect");
var selval= selpath.options[selpath.selectedIndex].value;


/********************************* Path 1 *************************************************/
if(selval == 1){
document.getElementById("head1").innerText="Path 1";

canvas1 = document.getElementById("myCanvas1");
ctx1 = canvas1.getContext("2d");
var posY1= 130 ;
var speed1=1;

function drawLine1(){

ctx1.strokeStyle = 'blue';
ctx1.lineWidth = 7;
ctx1.beginPath();
ctx1.moveTo(0, posY1); /*  0-130*/
ctx1.lineTo(0, 180);
ctx1.stroke();
}

function moveLine1 () {
posY1 += speed1;

if (posY1 < 0 || posY1 > canvas1.height) {
speed1 = speed1 * -1;
}
}

function loop1() {
// clear old frame;
// ctx.clearRect(0,0,canvas.width, canvas.height);
moveLine1();
drawLine1();
cancelani1=  requestAnimationFrame(loop1);
}
requestAnimationFrame(loop1);
setTimeout(canvas2, 2200);


function canvas2(){

  canvas2 = document.getElementById("myCanvas2");
  ctx2 = canvas2.getContext("2d");
  var posY2= 130 ;
  var speed2=1;
  
  function drawLine2(){
  
  ctx2.strokeStyle = 'blue';
  ctx2.lineWidth = 7;
  ctx2.beginPath();
  ctx2.moveTo(0, posY2); /*  0-130*/
  ctx2.lineTo(0, 180);
  ctx2.stroke();
  }
  
  function moveLine2 () {
  posY2 += speed2;
  
  if (posY2 < 0 || posY2> canvas2.height) {
  speed2 = speed2 * -1;
  }
  }
  
  function loop2() {
  // clear old frame;
  // ctx.clearRect(0,0,canvas.width, canvas.height);
  moveLine2();
  drawLine2();
  cancelani2=  requestAnimationFrame(loop2);
  }
  requestAnimationFrame(loop2);
  setTimeout(canvas3, 2200);

}

function canvas3(){
  canvas3 = document.getElementById("myCanvas3");
  ctx3 = canvas3.getContext("2d");
  var posY3= 130 ;
  var speed3=1;
  
  function drawLine3(){
  
  ctx3.strokeStyle = 'blue';
  ctx3.lineWidth = 7;
  ctx3.beginPath();
  ctx3.moveTo(0, posY3); /*  0-130*/
  ctx3.lineTo(0, 180);
  ctx3.stroke();
  }
  
  function moveLine3 () {
  posY3 += speed3;
  
  if (posY3 < 0 || posY3 > canvas3.height) {
  speed3 = speed3 * -1;
  }
  }
  
  function loop3() {
  // clear old frame;
  // ctx.clearRect(0,0,canvas.width, canvas.height);
  moveLine3();
  drawLine3();
  cancelani3=  requestAnimationFrame(loop3);
  }
  requestAnimationFrame(loop3);
  setTimeout(canvas4, 2200);

}

function canvas4(){
  canvas4 = document.getElementById("myCanvas4");
ctx4 = canvas4.getContext("2d");
var posY4= 130 ;
var speed4=1;

function drawLine4(){

ctx4.strokeStyle = 'blue';
ctx4.lineWidth = 7;
ctx4.beginPath();
ctx4.moveTo(0, posY4); /*  0-130*/
ctx4.lineTo(0, 180);
ctx4.stroke();
}

function moveLine4 () {
posY4 += speed4;

if (posY4 < 0 || posY4 > canvas4.height) {
speed4 = speed4 * -1;
}
}

function loop4() {
// clear old frame;
// ctx.clearRect(0,0,canvas.width, canvas.height);
moveLine4();
drawLine4();
cancelani4=  requestAnimationFrame(loop4);
}
requestAnimationFrame(loop4);
setTimeout(canvas5, 2200);
}

function canvas5(){
  canvas5 = document.getElementById("myCanvas5");
ctx5 = canvas5.getContext("2d");
var posY5= 130 ;
var speed5=1;

function drawLine5(){

ctx5.strokeStyle = 'blue';
ctx5.lineWidth = 7;
ctx5.beginPath();
ctx5.moveTo(0, posY5); /*  0-130*/
ctx5.lineTo(0, 180);
ctx5.stroke();
}

function moveLine5 () {
posY5 += speed5;

if (posY5 < 0 || posY5 > canvas5.height) {
speed5 = speed5 * -1;
}
}

function loop5() {
// clear old frame;
// ctx.clearRect(0,0,canvas.width, canvas.height);
moveLine5();
drawLine5();
cancelani5=  requestAnimationFrame(loop5);
}
requestAnimationFrame(loop5);
setTimeout(canvas6, 2200);
}


function canvas6(){
  canvas6 = document.getElementById("myCanvas6");
  ctx6 = canvas6.getContext("2d");
  var posY6= 130 ;
  var speed6=1;
  
  function drawLine6(){
  
  ctx6.strokeStyle = 'blue';
  ctx6.lineWidth = 7;
  ctx6.beginPath();
  ctx6.moveTo(0, posY6); /*  0-130*/
  ctx6.lineTo(0, 180);
  ctx6.stroke();
  }
  
  function moveLine6 () {
  posY6 += speed6;
  
  if (posY6 < 0 || posY6 > canvas6.height) {
  speed6 = speed6 * -1;
  }
  }
  
  function loop6() {
  // clear old frame;
  // ctx.clearRect(0,0,canvas.width, canvas.height);
  moveLine6();
  drawLine6();
  cancelani6=  requestAnimationFrame(loop6);
  }
  requestAnimationFrame(loop6);
  setTimeout(canvas8, 2200);

}

function canvas8(){
canvas8 = document.getElementById("myCanvas8");
ctx8 = canvas8.getContext("2d");
var posY8= 130 ;
var speed8=1;

function drawLine8(){

ctx8.strokeStyle = 'blue';
ctx8.lineWidth = 7;
ctx8.beginPath();
ctx8.moveTo(0, posY8); /*  0-130*/
ctx8.lineTo(0, 180);
ctx8.stroke();
}

function moveLine8 () {
posY8 += speed8;

if (posY8 < 0 || posY8 > canvas8.height) {
speed8 = speed8 * -1;
}
}

function loop8() {
// clear old frame;
// ctx.clearRect(0,0,canvas.width, canvas.height);
moveLine8();
drawLine8();
cancelani8=  requestAnimationFrame(loop8);
}
requestAnimationFrame(loop8);
setTimeout(canvas9, 2200);
}

function canvas9(){

canvas9 = document.getElementById("myCanvas9");
ctx = canvas9.getContext("2d");
var posY = 130 ;
var speed=1;

function drawLine(){

ctx.strokeStyle = 'blue';
ctx.lineWidth = 7;
ctx.beginPath();
ctx.moveTo(0, posY); /*  0-130*/
ctx.lineTo(0, 180);
ctx.stroke();
}

function moveLine () {
posY += speed;

if (posY < 0 || posY > canvas9.height) {
speed = speed * -1;
}
}

function loop() {
// clear old frame;
// ctx.clearRect(0,0,canvas.width, canvas.height);
moveLine();
drawLine();
cancelani=  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
setTimeout(canvas10, 2200);
} 


function canvas10(){

canvas10 = document.getElementById("myCanvas10");
ctx10 = canvas10.getContext("2d");
var posY10 = 130 ;
var speed10=1;

function drawLine10(){

ctx10.strokeStyle = 'blue';
ctx10.lineWidth = 7;
ctx10.beginPath();
ctx10.moveTo(0, posY10); /*  0-130*/
ctx10.lineTo(0, 180);
ctx10.stroke();
}

function moveLine10 () {
posY10 += speed10;

if (posY10 < 0 || posY10 > canvas10.height) {
speed10 = speed10 * -1;
}
}

function loop10() {
// clear old frame;
// ctx.clearRect(0,0,canvas.width, canvas.height);
moveLine10();
drawLine10();
cancelani10=  requestAnimationFrame(loop10);
}
requestAnimationFrame(loop10);
}
}
 /********************************* Path 2 *************************************************/
else if(selval == 2){
    document.getElementById("head1").innerText="Path 2";
    
    canvas1 = document.getElementById("myCanvas1");
    ctx1 = canvas1.getContext("2d");
    var posY1= 130 ;
    var speed1=1;
    
    function drawLine1(){
    
    ctx1.strokeStyle = 'red';
    ctx1.lineWidth = 7;
    ctx1.beginPath();
    ctx1.moveTo(0, posY1); /*  0-130*/
    ctx1.lineTo(0, 180);
    ctx1.stroke();
    }
    
    function moveLine1 () {
    posY1 += speed1;
    
    if (posY1 < 0 || posY1 > canvas1.height) {
    speed1 = speed1 * -1;
    }
    }
    
    function loop1() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine1();
    drawLine1();
    cancelani1=  requestAnimationFrame(loop1);
    }
    requestAnimationFrame(loop1);
    setTimeout(canvas7, 2200);
    
    
    function canvas7(){
    
      canvas7 = document.getElementById("myCanvas7");
      ctx7 = canvas7.getContext("2d");
      var posY7= 130 ;
      var speed7=1;
      
      function drawLine7(){
      
      ctx7.strokeStyle = 'red';
      ctx7.lineWidth = 7;
      ctx7.beginPath();
      ctx7.moveTo(0, posY7); /*  0-130*/
      ctx7.lineTo(0, 180);
      ctx7.stroke();
      }
      
      function moveLine7 () {
      posY7 += speed7;
      
      if (posY7 < 0 || posY7> canvas7.height) {
      speed7 = speed7 * -1;
      }
      }
      
      function loop7() {
      // clear old frame;
      // ctx.clearRect(0,0,canvas.width, canvas.height);
      moveLine7();
      drawLine7();
      cancelani7=  requestAnimationFrame(loop7);
      }
      requestAnimationFrame(loop7);
      setTimeout(canvas11, 2200);
    
    }
    
    function canvas11(){
      canvas11 = document.getElementById("myCanvas11");
      ctx11 = canvas11.getContext("2d");
      var posY11= 130 ;
      var speed11=1;
      
      function drawLine11(){
      
      ctx11.strokeStyle = 'red';
      ctx11.lineWidth = 7;
      ctx11.beginPath();
      ctx11.moveTo(0, posY11); /*  0-130*/
      ctx11.lineTo(0, 180);
      ctx11.stroke();
      }
      
      function moveLine11 () {
      posY11 += speed11;
      
      if (posY11 < 0 || posY11 > canvas11.height) {
      speed11 = speed11 * -1;
      }
      }
      
      function loop11() {
      // clear old frame;
      // ctx.clearRect(0,0,canvas.width, canvas.height);
      moveLine11();
      drawLine11();
      cancelani11=  requestAnimationFrame(loop11);
      }
      requestAnimationFrame(loop11);
      setTimeout(canvas12, 2200);
    
    }


    function canvas12(){
      canvas12 = document.getElementById("myCanvas12");
      ctx12 = canvas12.getContext("2d");
      var posY12= 130 ;
      var speed12=1;
      
      function drawLine12(){
      
      ctx12.strokeStyle = 'red';
      ctx12.lineWidth = 7;
      ctx12.beginPath();
      ctx12.moveTo(0, posY12); /*  0-130*/
      ctx12.lineTo(0, 180);
      ctx12.stroke();
      }
      
      function moveLine12 () {
      posY12 += speed12;
      
      if (posY12 < 0 || posY12 > canvas12.height) {
      speed12 = speed12 * -1;
      }
      }
      
      function loop12() {
      // clear old frame;
      // ctx.clearRect(0,0,canvas.width, canvas.height);
      moveLine12();
      drawLine12();
      cancelani12=  requestAnimationFrame(loop12);
      }
      requestAnimationFrame(loop12);
      setTimeout(canvas4, 2200);

    }
    
    function canvas4(){
      canvas4 = document.getElementById("myCanvas4");
    ctx4 = canvas4.getContext("2d");
    var posY4= 130 ;
    var speed4=1;
    
    function drawLine4(){
    
    ctx4.strokeStyle = 'red';
    ctx4.lineWidth = 7;
    ctx4.beginPath();
    ctx4.moveTo(0, posY4); /*  0-130*/
    ctx4.lineTo(0, 180);
    ctx4.stroke();
    }
    
    function moveLine4 () {
    posY4 += speed4;
    
    if (posY4 < 0 || posY4 > canvas4.height) {
    speed4 = speed4 * -1;
    }
    }
    
    function loop4() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine4();
    drawLine4();
    cancelani4=  requestAnimationFrame(loop4);
    }
    requestAnimationFrame(loop4);
    setTimeout(canvas5, 2200);
    }
    
    function canvas5(){
      canvas5 = document.getElementById("myCanvas5");
    ctx5 = canvas5.getContext("2d");
    var posY5= 130 ;
    var speed5=1;
    
    function drawLine5(){
    
    ctx5.strokeStyle = 'red';
    ctx5.lineWidth = 7;
    ctx5.beginPath();
    ctx5.moveTo(0, posY5); /*  0-130*/
    ctx5.lineTo(0, 180);
    ctx5.stroke();
    }
    
    function moveLine5 () {
    posY5 += speed5;
    
    if (posY5 < 0 || posY5 > canvas5.height) {
    speed5 = speed5 * -1;
    }
    }
    
    function loop5() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine5();
    drawLine5();
    cancelani5=  requestAnimationFrame(loop5);
    }
    requestAnimationFrame(loop5);
    setTimeout(canvas6, 2200);
    }
    
    
    function canvas6(){
      canvas6 = document.getElementById("myCanvas6");
      ctx6 = canvas6.getContext("2d");
      var posY6= 130 ;
      var speed6=1;
      
      function drawLine6(){
      
      ctx6.strokeStyle = 'red';
      ctx6.lineWidth = 7;
      ctx6.beginPath();
      ctx6.moveTo(0, posY6); /*  0-130*/
      ctx6.lineTo(0, 180);
      ctx6.stroke();
      }
      
      function moveLine6 () {
      posY6 += speed6;
      
      if (posY6 < 0 || posY6 > canvas6.height) {
      speed6 = speed6 * -1;
      }
      }
      
      function loop6() {
      // clear old frame;
      // ctx.clearRect(0,0,canvas.width, canvas.height);
      moveLine6();
      drawLine6();
      cancelani6=  requestAnimationFrame(loop6);
      }
      requestAnimationFrame(loop6);
      setTimeout(canvas8, 2200);
    
    }
    
    function canvas8(){
    canvas8 = document.getElementById("myCanvas8");
    ctx8 = canvas8.getContext("2d");
    var posY8= 130 ;
    var speed8=1;
    
    function drawLine8(){
    
    ctx8.strokeStyle = 'red';
    ctx8.lineWidth = 7;
    ctx8.beginPath();
    ctx8.moveTo(0, posY8); /*  0-130*/
    ctx8.lineTo(0, 180);
    ctx8.stroke();
    }
    
    function moveLine8 () {
    posY8 += speed8;
    
    if (posY8 < 0 || posY8 > canvas8.height) {
    speed8 = speed8 * -1;
    }
    }
    
    function loop8() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine8();
    drawLine8();
    cancelani8=  requestAnimationFrame(loop8);
    }
    requestAnimationFrame(loop8);
    setTimeout(canvas9, 2200);
    }
    
    function canvas9(){
    
    canvas9 = document.getElementById("myCanvas9");
    ctx = canvas9.getContext("2d");
    var posY = 130 ;
    var speed=1;
    
    function drawLine(){
    
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(0, posY); /*  0-130*/
    ctx.lineTo(0, 180);
    ctx.stroke();
    }
    
    function moveLine () {
    posY += speed;
    
    if (posY < 0 || posY > canvas9.height) {
    speed = speed * -1;
    }
    }
    
    function loop() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine();
    drawLine();
    cancelani=  requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    setTimeout(canvas10, 2200);
    } 
    
    
    function canvas10(){
    
    canvas10 = document.getElementById("myCanvas10");
    ctx10 = canvas10.getContext("2d");
    var posY10 = 130 ;
    var speed10=1;
    
    function drawLine10(){
    
    ctx10.strokeStyle = 'red';
    ctx10.lineWidth = 7;
    ctx10.beginPath();
    ctx10.moveTo(0, posY10); /*  0-130*/
    ctx10.lineTo(0, 180);
    ctx10.stroke();
    }
    
    function moveLine10 () {
    posY10 += speed10;
    
    if (posY10 < 0 || posY10 > canvas10.height) {
    speed10 = speed10 * -1;
    }
    }
    
    function loop10() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine10();
    drawLine10();
    cancelani10=  requestAnimationFrame(loop10);
    }
    requestAnimationFrame(loop10);
    }



}


/********************************* Path 3 *************************************************/
else if(selval == 3){
    document.getElementById("head1").innerText="Path 3";

    canvas8 = document.getElementById("myCanvas8");
    ctx8 = canvas8.getContext("2d");
    var posY8= 130 ;
    var speed8=1;

    function drawLine8(){
    
    ctx8.strokeStyle = 'green';
    ctx8.lineWidth = 7;
    ctx8.beginPath();
    ctx8.moveTo(0, posY8); /*  0-130*/
    ctx8.lineTo(0, 180);
    ctx8.stroke();
}

function moveLine8 () {
	posY8 += speed8;
  
  if (posY8 < 0 || posY8 > canvas8.height) {
	  speed8 = speed8 * -1;
  }
}

function loop8() {
	// clear old frame;
 // ctx.clearRect(0,0,canvas.width, canvas.height);
  moveLine8();
  drawLine8();
cancelani8=  requestAnimationFrame(loop8);
}
requestAnimationFrame(loop8);
setTimeout(canvas9, 2200);


    function canvas9(){

    canvas9 = document.getElementById("myCanvas9");
    ctx = canvas9.getContext("2d");
    var posY = 130 ;
    var speed=1;

    function drawLine(){
    
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(0, posY); /*  0-130*/
    ctx.lineTo(0, 180);
    ctx.stroke();
}

function moveLine () {
	posY += speed;
  
  if (posY < 0 || posY > canvas9.height) {
	  speed = speed * -1;
  }
}

function loop() {
	// clear old frame;
 // ctx.clearRect(0,0,canvas.width, canvas.height);
  moveLine();
  drawLine();
cancelani=  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
setTimeout(canvas10, 2200);
} 
    

function canvas10(){

    canvas10 = document.getElementById("myCanvas10");
    ctx10 = canvas10.getContext("2d");
    var posY10 = 130 ;
    var speed10=1;

    function drawLine10(){
    
    ctx10.strokeStyle = 'green';
    ctx10.lineWidth = 7;
    ctx10.beginPath();
    ctx10.moveTo(0, posY10); /*  0-130*/
    ctx10.lineTo(0, 180);
    ctx10.stroke();
}

function moveLine10 () {
	posY10 += speed10;
  
  if (posY10 < 0 || posY10 > canvas10.height) {
	  speed10 = speed10 * -1;
  }
}

function loop10() {
	// clear old frame;
 // ctx.clearRect(0,0,canvas.width, canvas.height);
  moveLine10();
  drawLine10();
cancelani10=  requestAnimationFrame(loop10);
}
requestAnimationFrame(loop10);
}
}
else {
    document.getElementById("head1").innerText="Select Path";
    alert("select path");
}

}


function replaybtn(){
    document.getElementById("replaybtn").style.display="block";
    document.getElementById("replaybtn").disabled=false;
}



 
  function replaybtn(){
    document.getElementById("head1").innerHTML="Path 1";
    document.getElementById("playbtn").disabled=false;
    document.getElementById("replaybtn").disabled=true;
    location.reload();
   
  }