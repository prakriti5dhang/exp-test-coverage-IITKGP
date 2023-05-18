/*Redeveloped
Lab: Software Engineering
Exp: Estimation of Test Coverage Metrics and Structural Complexity
File Name: exercise3.js
Author: Prakriti Dhang*/


function addbtnt31(){
    document.getElementById("inp33").style.display="block";
    document.getElementById("drawbtn3").disabled=false;
  
  }
  
  /***************************************************** Function to Calulate Cyclomatic Complexity   ***************************************************/
  function calex3(){
    var inpt31= document.getElementById("c31").value;
    var inpt32= document.getElementById("c32").value;
    var inpt33= document.getElementById("c33").value;

    if((inpt31== 15)&&(inpt32== 19)&&(inpt33== 6)){

         alert("All are correct!");
         document.getElementById("c31").value="";
         document.getElementById("c32").value="";
         document.getElementById("c33").value="";
    }

    else if((inpt31 != 15)){
       alert("Incorrect. Check no of nodes");
    }

    else if((inpt32 != 19)){
        alert("Incorrect. Check no of edges");
     }

     else if((inpt33 != 6)){
        alert("Incorrect. Check Cyclomatic Complexity");
     }

    else{
        alert("Try Again")
    }
}

/********************************************* Function to show CFG ***********************************************/

function drawbtex3(){

    document.getElementById("dispuml3").style.display="block";
    document.getElementById("calbtn3").disabled=false;
   
}  