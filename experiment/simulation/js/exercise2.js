/*Redeveloped
Lab: Software Engineering
Exp: Estimation of Test Coverage Metrics and Structural Complexity
File Name: exercise2.js
Author: Prakriti Dhang*/



function addbtnt21() {
  document.getElementById("inp23").style.display = "block";
  document.getElementById("drawbtn2").disabled = false;

}
/***************************************************** Function to Calulate Cyclomatic Complexity   ***************************************************/
function calex2() {
  var inpt21 = document.getElementById("c21").value;
  var inpt22 = document.getElementById("c22").value;
  var inpt23 = document.getElementById("c23").value;

  if ((inpt21 == "")){
    alert("No of nodes cannot be blank");
}
else if ((inpt22 == "")){
    alert("No of edges cannot be blank");
}
else  if ((inpt23 == "")){
    alert("Cyclomatic Complexity cannot be blank");
}

else if ((inpt21 == 10) && (inpt22 == 11) && (inpt23 == 3)) {

    alert("All are correct!");
    document.getElementById("c21").style.backgroundColor="#BEFF99  ";
    document.getElementById("c22").style.backgroundColor="#BEFF99  ";
    document.getElementById("c23").style.backgroundColor="#BEFF99  ";
    //document.getElementById("c21").value = "";
    //document.getElementById("c22").value = "";
    //document.getElementById("c23").value = "";

  }

  else if ((inpt21 != 10)) {
    alert("Incorrect. No of nodes should be including the ENTRY and EXIT node");
    document.getElementById("c21").style.backgroundColor="#FFAB99 ";
  }

  else if ((inpt22 != 11)) {
    alert("Incorrect. Check no of edges");
    document.getElementById("c22").style.backgroundColor="#FFAB99 ";
  }

  else if ((inpt23 != 3)) {
    alert("Incorrect. Check Cyclomatic Complexity");
    document.getElementById("c23").style.backgroundColor="#FFAB99 ";
  }

  else {
    alert("Try Again")
  }
}

/***************************************************** Function to show linear path of CFG  ******************************/

function chkex21() {
  var inptp1 = document.getElementById("p1").value;
  var inptp2 = document.getElementById("p2").value;
  var inptp3 = document.getElementById("p3").value;
  var inptp4 = document.getElementById("p4").value;

  if ((inptp1 == 2) && (inptp2 == 7) && (inptp3 == 8) && (inptp4 == 9)) {

    alert("All are correct!");

  }
  else {
    alert("Try Again");
  }
}

function chkex22() {
  var inptp2a = document.getElementById("p2a").value;
  var inptp2b = document.getElementById("p2b").value;
  var inptp2c = document.getElementById("p2c").value;
  var inptp2d = document.getElementById("p2d").value;
  var inptp2e = document.getElementById("p2e").value;
  var inptp2f = document.getElementById("p2f").value;
  var inptp2g = document.getElementById("p2g").value;
  var inptp2h = document.getElementById("p2h").value;

  if ((inptp2a == 2) && (inptp2b == 7) && (inptp2c == 3) && (inptp2d == 5) && (inptp2e == 6) && (inptp2f == 7) && (inptp2g == 8) && (inptp2h == 9)) {

    alert("All are correct!");

  }
  else {
    alert("Try Again");
  }
}

function chkex23() {
  var inptp3a = document.getElementById("p3a").value;
  var inptp3b = document.getElementById("p3b").value;
  var inptp3c = document.getElementById("p3c").value;
  var inptp3d = document.getElementById("p3d").value;
  var inptp3e = document.getElementById("p3e").value;
  var inptp3f = document.getElementById("p3f").value;
  var inptp3g = document.getElementById("p3g").value;
  var inptp3h = document.getElementById("p3h").value;
  var inptp3i = document.getElementById("p3i").value;
  var inptp3j = document.getElementById("p3j").value;

  if ((inptp3a == 2) && (inptp3b == 7) && (inptp3c == 3) && (inptp3d == 5) && (inptp3e == 4) && (inptp3f == 5) && (inptp3g == 6) && (inptp3h == 7)&& (inptp3i == 8) && (inptp3j == 9) ) {

    alert("All are correct!");

  }
  else {
    alert("Try Again");
  }
}




/***************************************************** Function to show CFG  **************************************/

function drawbtex2() {

  document.getElementById("dispuml2").style.display = "block";
  document.getElementById("calbtn2").disabled = false;
  document.getElementById("chkbtn1").disabled = false;
  document.getElementById("chkbtn2").disabled = false;
  document.getElementById("chkbtn3").disabled = false;
  window.scrollBy(0, 400);


}