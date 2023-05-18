/*Redeveloped
Lab: Software Engineering
Exp: Estimation of Test Coverage Metrics and Structural Complexity
File Name: main.js
Author: Prakriti Dhang*/

/* Exercise number choice */
var ex = document.getElementById("selectex");
function subex() {

  if (ex.options[ex.selectedIndex].value == 0) {
    document.getElementById("exercise1").style.display = "none";
    document.getElementById("ex1").style.display = "none";
    document.getElementById("exercise3").style.display = "none";
    document.getElementById("ex3").style.display = "none";
    //document.getElementById("para1").style.display="none";
    document.getElementById("dispres").style.display="none";
    document.getElementById("show_result1").style.display = "none";
    document.getElementById("show_result2").style.display = "none";
    document.getElementById("dispuml1").style.display = "none";
    document.getElementById("dispuml2").style.display = "none";
    document.getElementById("dispuml3").style.display = "none";
    document.getElementById("dispviewbtn").style.display="none";
    document.getElementById("linearpath2").style.display = "none";
    //document.getElementById("viewsol").disabled=true;
    

  }
  if (ex.options[ex.selectedIndex].value == 1) {
    document.getElementById("exercise1").style.display = "block";
    document.getElementById("ex1").style.display = "block";
    document.getElementById("exercise2").style.display = "none";
    document.getElementById("ex2").style.display = "none";
    document.getElementById("exercise3").style.display = "none";
    document.getElementById("ex3").style.display = "none";
    // document.getElementById("para1").style.display="block";
     document.getElementById("dispres").style.display="none";
    document.getElementById("show_result1").style.display="none";
    document.getElementById("show_result2").style.display="none";
    document.getElementById("dispuml3").style.display = "none";
    document.getElementById("dispuml2").style.display = "none";
    document.getElementById("calcompl1").style.display = "block";
    document.getElementById("calcompl2").style.display = "none";
    document.getElementById("calcompl3").style.display = "none";
    document.getElementById("linearpath2").style.display = "none";
    document.getElementById("dispviewbtn").style.display="block";
    document.getElementById("dispviewbtn").disabled=false;
    // document.getElementById("viewsol").disabled=true;

  }
  if (ex.options[ex.selectedIndex].value == 2) {
    document.getElementById("exercise2").style.display = "block";
    document.getElementById("ex2").style.display = "block";
    document.getElementById("exercise1").style.display = "none";
    document.getElementById("ex1").style.display = "none";
    document.getElementById("exercise3").style.display = "none";
    document.getElementById("ex3").style.display = "none";
    //document.getElementById("para1").style.display="block";
     document.getElementById("dispres").style.display="none";
    document.getElementById("show_result1").style.display="none";
    document.getElementById("show_result2").style.display="none";
    document.getElementById("dispuml1").style.display = "none";
    document.getElementById("dispuml3").style.display = "none";
    document.getElementById("calcompl2").style.display = "block";
    document.getElementById("calcompl1").style.display = "none";
    document.getElementById("calcompl3").style.display = "none";
    document.getElementById("linearpath2").style.display = "block";
    document.getElementById("dispviewbtn").style.display="block";
    document.getElementById("dispviewbtn").disabled=false;
     //document.getElementById("viewsol").disabled=true;

  }
  if (ex.options[ex.selectedIndex].value == 3) {
    document.getElementById("exercise3").style.display = "block";
    document.getElementById("ex3").style.display = "block";
    document.getElementById("exercise2").style.display = "none";
    document.getElementById("ex2").style.display = "none";
    document.getElementById("exercise1").style.display = "none";
    document.getElementById("ex1").style.display = "none";
    //document.getElementById("para1").style.display="block";
     document.getElementById("dispres").style.display="none";
    document.getElementById("show_result1").style.display="none";
    document.getElementById("show_result2").style.display="none";
    document.getElementById("dispuml1").style.display = "none";
    document.getElementById("dispuml2").style.display = "none";
    document.getElementById("calcompl1").style.display = "none";
    document.getElementById("calcompl2").style.display = "none";
    document.getElementById("calcompl3").style.display = "block";
    document.getElementById("linearpath2").style.display = "none";
    document.getElementById("dispviewbtn").style.display="block";
    document.getElementById("dispviewbtn").disabled=false;
    // document.getElementById("viewsol").disabled=true;

  }


}
/* Submit button to directly view the solution*/

function viewsolutionb(){ //submit button
  document.getElementById("dispres").style.display="block";
  document.getElementById("show_result1").style.display="none";
  document.getElementById("show_result2").style.display="none";
  document.getElementById("show_result3").style.display="none";
   // document.getElementById("viewsol").disabled=false;
    document.getElementById("dispviewbtn").disabled=true;
    if(ex.options[ex.selectedIndex].value==1){
      document.getElementById("show_result1").style.display="block";
  document.getElementById("show_result2").style.display="none";
  document.getElementById("show_result3").style.display="none";
    window.scrollBy(0, 1800);
    }
    if(ex.options[ex.selectedIndex].value==2){
      document.getElementById("show_result2").style.display="block";
    document.getElementById("show_result1").style.display="none";
    document.getElementById("show_result3").style.display="none";
      window.scrollBy(0, 1800);
    }
    if(ex.options[ex.selectedIndex].value==3){
      document.getElementById("show_result3").style.display="block";
      document.getElementById("show_result1").style.display="none";
      document.getElementById("show_result2").style.display="none";
      window.scrollBy(0, 1800);
    }
}

/*function solview(){  //view solution button
  if(ex.options[ex.selectedIndex].value==1){
  document.getElementById("show_result1").style.display="block";
  document.getElementById("show_result2").style.display="none";
  document.getElementById("show_result3").style.display="none";
    document.getElementById("viewsol").disabled=true;
    
  }
  if(ex.options[ex.selectedIndex].value==2){
    document.getElementById("show_result2").style.display="block";
    document.getElementById("show_result1").style.display="none";
    document.getElementById("show_result3").style.display="none";
      document.getElementById("viewsol").disabled=true;
      
    }
    if(ex.options[ex.selectedIndex].value==3){
      document.getElementById("show_result3").style.display="block";
      document.getElementById("show_result1").style.display="none";
      document.getElementById("show_result2").style.display="none";
        document.getElementById("viewsol").disabled=true;
        
      }
}*/

