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
    var selcat= document.getElementById("selcatvg");
    var selcatval = selcat.options[selcat.selectedIndex].value;



    if ((inpt31 == "")){
        alert("No of nodes cannot be blank");
    }
   else if ((inpt32 == "")){
        alert("No of edges cannot be blank");
    }
   else  if ((inpt33 == "")){
        alert("Cyclomatic Complexity cannot be blank");
    }
    
    else if((inpt31== 15)&&(inpt32== 19)&&(inpt33== 6) && (selcatval == 1)){

         alert("All are correct!");
         document.getElementById("c31").style.backgroundColor="#BEFF99  ";
         document.getElementById("c32").style.backgroundColor="#BEFF99  ";
         document.getElementById("c33").style.backgroundColor="#BEFF99  ";
         document.getElementById("selcatvg").style.backgroundColor="#BEFF99  ";
        // document.getElementById("c31").value="";
        // document.getElementById("c32").value="";
        // document.getElementById("c33").value="";
    }

    else if((inpt31 != 15)){
       alert("Incorrect. No of nodes should be including the ENTRY and EXIT node");
       document.getElementById("c31").style.backgroundColor="#FFAB99 ";
    }

    else if((inpt32 != 19)){
        alert("Incorrect. Check no of edges");
        document.getElementById("c32").style.backgroundColor="#FFAB99 ";
     }

     else if((inpt33 != 6)){
        alert("Incorrect. Check Cyclomatic Complexity");
        document.getElementById("c33").style.backgroundColor="#FFAB99 ";

     }
     else if((selcatval != 1)){
        alert("Incorrect. Check module category");
        document.getElementById("selcat").style.backgroundColor="#FFAB99 ";
     }

    else{
        alert("Try Again")
    }
}

/********************************************* Function to show CFG ***********************************************/

function drawbtex3(){

    document.getElementById("dispuml3").style.display="block";
    document.getElementById("calbtn3").disabled=false;
    window.scrollBy(0, 400);
}  