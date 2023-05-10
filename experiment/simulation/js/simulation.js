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

if(selval == 1){
document.getElementById("head1").innerText="Path 1";

}

else if(selval == 2){
    document.getElementById("head1").innerText="Path 2";

}

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