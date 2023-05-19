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
       alert("Incorrect. Check no of nodes");
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
   /* var namespace = joint.shapes;
  
    var graph = new joint.dia.Graph({}, { cellNamespace: namespace });
  
    paper = new joint.dia.Paper({
        el: document.getElementById('cfg_diag_ex1'),
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
  
   
  
  
    var cfg1 = new joint.shapes.standard.Rectangle();
          
    cfg1.position(51, 7);
    cfg1.resize(100, 40);
    cfg1.attr({
        body: {
            rx: 3, // add a corner radius
            ry: 3,
            fill: '#FFFC8C',
            strokeWidth: 2
        },
        label: {
            text: "ENTRY",
            
            fill: 'black',
            fontSize: 16
        }
    });
    cfg1.addTo(graph);
  
    var cfg2 = new joint.shapes.standard.Rectangle();
    cfg2.position(48, 132);      
    
    cfg2.resize(100, 40);
    cfg2.attr({
        body: {
            rx: 3, // add a corner radius
            ry: 3,
            fill: '#FFFC8C',
            strokeWidth: 2
        },
        label: {
            //text: arrstate[0],
            text:"#2",
            fill: 'black',
            fontSize: 16
        }
    });
    cfg2.addTo(graph);
  
  
    var cfg3 = new joint.shapes.standard.Rectangle();
          
    cfg3.position(246, 132);
    cfg3.resize(100, 40);
    cfg3.attr({
        body: {
            rx: 3, // add a corner radius
            ry: 3,
            fill: '#FFFC8C',
            strokeWidth: 2
        },
        label: {
            text: "#3",
            fill: 'black',
            fontSize: 16
        }
    });
    cfg3.addTo(graph);
  
    var cfg4 = new joint.shapes.standard.Rectangle();
          
    cfg4.position(161, 241);
    cfg4.resize(100, 40);
    cfg4.attr({
        body: {
            rx: 3, // add a corner radius
            ry: 3,
            fill: '#FFFC8C',
            strokeWidth: 2
        },
        label: {
            text: "#4",
            fill: 'black',
            fontSize: 16
        }
    });
    cfg4.addTo(graph);
  
    var cfg5 = new joint.shapes.standard.Rectangle();
          
    cfg5.position(161, 355);
    cfg5.resize(100, 40);
    cfg5.attr({
        body: {
            rx: 3, // add a corner radius
            ry: 3,
            fill: '#FFFC8C',
            strokeWidth: 2
        },
        label: {
            text: "#5",
            fill: 'black',
            fontSize: 16
        }
    });
    cfg5.addTo(graph);
  
    var cfg6 = new joint.shapes.standard.Rectangle();
          
    cfg6.position(161, 449);
    cfg6.resize(100, 40);
    cfg6.attr({
        body: {
            rx: 3, // add a corner radius
            ry: 3,
            fill: '#FFFC8C',
            strokeWidth: 2
        },
        label: {
            text: "#6",
            fill: 'black',
            fontSize: 16
        }
    });
    cfg6.addTo(graph);

    var cfg7 = new joint.shapes.standard.Rectangle();
          
    cfg7.position(161, 542);
    cfg7.resize(100, 40);
    cfg7.attr({
        body: {
            rx: 3, // add a corner radius
            ry: 3,
            fill: '#FFFC8C',
            strokeWidth: 2
        },
        label: {
            text: "EXIT",
            fill: 'black',
            fontSize: 16
        }
    });
    cfg7.addTo(graph);
  
    
  
  var linkis1 = new joint.shapes.standard.Link();
  linkis1.source(cfg1);
  linkis1.target(cfg2);
  linkis1.addTo(graph);
  
     
  
        
  
  var link1 = new joint.shapes.standard.Link();
  link1.source(cfg1);
  link1.target(cfg3);
  link1.addTo(graph);
         
       
  
  var link2 = new joint.shapes.standard.Link();
 
  link2.source(cfg2);
  link2.target(cfg4);
  link2.addTo(graph);
     
  
        var link3 = new joint.shapes.standard.Link();
        link3.source(cfg3);
        link3.target(cfg4);
        link3.addTo(graph);
               
        var link3a = new joint.shapes.standard.Link();
        link3a.source(cfg4);
        link3a.target(cfg3);
        link3a.addTo(graph);    
  
  
              var link4 = new joint.shapes.standard.Link();
              link4.source(cfg4);
              link4.target(cfg5);
              link4.addTo(graph);
                     
                   
  
  
        var linkfs3 = new joint.shapes.standard.Link();
        linkfs3.source(cfg5);
        linkfs3.target(cfg6);
        linkfs3.addTo(graph); 
        

        var linkfs4 = new joint.shapes.standard.Link();
        linkfs4.source(cfg6);
        linkfs4.target(cfg7); 
        linkfs4.addTo(graph);*/
  
  }
  
    
  
    
  
  
  
    