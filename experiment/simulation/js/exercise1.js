/*Redeveloped
Lab: Software Engineering
Exp: Estimation of Test Coverage Metrics and Structural Complexity
File Name: exercise1.js
Author: Prakriti Dhang*/


function addbtnt1(){
    document.getElementById("inp3").style.display="block";
    document.getElementById("drawbtn").disabled=false;

}

function calex1(){
    var inpt1= document.getElementById("c1").value;
    var inpt2= document.getElementById("c2").value;
    var inpt3= document.getElementById("c3").value;

    if ((inpt1 == "")){
        alert("No of nodes cannot be blank");
    }
   else if ((inpt2 == "")){
        alert("No of edges cannot be blank");
    }
   else  if ((inpt3 == "")){
        alert("Cyclomatic Complexity cannot be blank");
    }
    
    else if((inpt1== 7)&&(inpt2== 7)&&(inpt3== 2)){

         alert("All are correct!");
         document.getElementById("c1").style.backgroundColor="#BEFF99  ";
         document.getElementById("c2").style.backgroundColor="#BEFF99  ";
         document.getElementById("c3").style.backgroundColor="#BEFF99  ";
         
         //document.getElementById("c1").value="";
        // document.getElementById("c2").value="";
        // document.getElementById("c3").value="";
    }

    else if((inpt1 != 7)){
       alert("Incorrect. No of nodes should be including the ENTRY and EXIT nodes");
       document.getElementById("c1").style.backgroundColor="#FFAB99 ";
    }

    else if((inpt2 != 7)){
        alert("Incorrect. Check no of edges");
        document.getElementById("c2").style.backgroundColor="#FFAB99 ";
     }

     else if((inpt3 != 2)){
        alert("Incorrect. Check Cyclomatic Complexity");
        document.getElementById("c3").style.backgroundColor="#FFAB99 ";
     }

    else{
        alert("Try Again")
    }
}
/********************************************* Function to show CFG ****************************************/


function drawbtex1(){

    document.getElementById("dispuml1").style.display="block";
    document.getElementById("calbtn").disabled=false;
   
    window.scrollBy(0, 350);
   
  
  
    
  
  }
  
    
  
    
  
  
  
    