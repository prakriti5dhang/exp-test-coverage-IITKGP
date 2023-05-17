/*Redeveloped
Lab: Software Engineering
Exp: Estimation of Test Coverage Metrics and Structural Complexity
File Name: exercise3.js
Author: Prakriti Dhang*/


/********************************************* Function to show CFG ***********************************************/

function drawbtex3(){

    document.getElementById("dispuml3").style.display="block";
    var namespace = joint.shapes;
  
    var graph = new joint.dia.Graph({}, { cellNamespace: namespace });
  
    paper = new joint.dia.Paper({
        el: document.getElementById('activity_diag_ex2'),
        model: graph,
        //x: 0,
        //y: 0,
        //width: $('#ucdiagram1').width(),
        //height:  $('#ucdiagram1').height(), // height had to be increased
       
        background: {
            color: '#ffffff', //'rgba(0, 255, 0, 0.3)'
        },
        
        cellViewNamespace: namespace
    });
}  