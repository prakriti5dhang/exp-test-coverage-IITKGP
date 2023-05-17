/*Redeveloped
Lab: Software Engineering
Exp: Estimation of Test Coverage Metrics and Structural Complexity
File Name: main.js
Author: Prakriti Dhang*/

/* Exercise number choice */
var ex= document.getElementById("selectex");
function subex(){

  if(ex.options[ex.selectedIndex].value==0){
    document.getElementById("exercise1").style.display="none";
    document.getElementById("ex1").style.display="none";
    document.getElementById("exercise3").style.display="none";
    document.getElementById("ex3").style.display="none";
    document.getElementById("para1").style.display="none";
    document.getElementById("dispres").style.display="none";
    document.getElementById("show_result1").style.display="none";
    document.getElementById("show_result2").style.display="none";
    document.getElementById("dispuml1").style.display="none";
    document.getElementById("dispuml2").style.display="none";
    document.getElementById("dispuml3").style.display="none";
    document.getElementById("dispviewbtn").disabled=true;
    document.getElementById("viewsol").disabled=true;
    
}
    if(ex.options[ex.selectedIndex].value==1){
        document.getElementById("exercise1").style.display="block";
        document.getElementById("ex1").style.display="block";
        document.getElementById("exercise2").style.display="none";
       document.getElementById("ex2").style.display="none";
       document.getElementById("exercise3").style.display="none";
    document.getElementById("ex3").style.display="none";
        document.getElementById("para1").style.display="block";
        document.getElementById("dispres").style.display="none";
        document.getElementById("show_result1").style.display="none";
        document.getElementById("show_result2").style.display="none";
        document.getElementById("dispuml3").style.display="none";
        document.getElementById("dispuml2").style.display="none";
        document.getElementById("dispviewbtn").disabled=false;
        document.getElementById("viewsol").disabled=true;
       
    }
    if(ex.options[ex.selectedIndex].value==2){
      document.getElementById("exercise2").style.display="block";
      document.getElementById("ex2").style.display="block";
      document.getElementById("exercise1").style.display="none";
      document.getElementById("ex1").style.display="none";
      document.getElementById("exercise3").style.display="none";
    document.getElementById("ex3").style.display="none";
      document.getElementById("para1").style.display="block";
      document.getElementById("dispres").style.display="none";
      document.getElementById("show_result1").style.display="none";
      document.getElementById("show_result2").style.display="none";
      document.getElementById("dispuml1").style.display="none";
      document.getElementById("dispuml3").style.display="none";
      document.getElementById("dispviewbtn").disabled=false;
      document.getElementById("viewsol").disabled=true;
     
  }
  if(ex.options[ex.selectedIndex].value==3){
    document.getElementById("exercise3").style.display="block";
    document.getElementById("ex3").style.display="block";
    document.getElementById("exercise2").style.display="none";
    document.getElementById("ex2").style.display="none";
    document.getElementById("exercise1").style.display="none";
    document.getElementById("ex1").style.display="none";
    document.getElementById("para1").style.display="block";
    document.getElementById("dispres").style.display="none";
    document.getElementById("show_result1").style.display="none";
    document.getElementById("show_result2").style.display="none";
    document.getElementById("dispuml1").style.display="none";
    document.getElementById("dispuml2").style.display="none";
    
    document.getElementById("dispviewbtn").disabled=false;
    document.getElementById("viewsol").disabled=true;
   
}
    
    
}
/* Submit button to directly view the solution*/

function viewsolutionb(){ //submit button
  document.getElementById("dispres").style.display="block";
  document.getElementById("show_result1").style.display="none";
  document.getElementById("show_result2").style.display="none";
  document.getElementById("show_result3").style.display="none";
    document.getElementById("viewsol").disabled=false;
    document.getElementById("dispviewbtn").disabled=true;
    if(ex.options[ex.selectedIndex].value==1){
    window.scrollBy(0, 2000);
    }
    if(ex.options[ex.selectedIndex].value==2){
      window.scrollBy(0, 2800);
    }
    if(ex.options[ex.selectedIndex].value==3){
      window.scrollBy(0, 2800);
    }
}

function solview(){  //view solution button
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

}
 
/********************************************* Table 1 ****************************************/


function drawbtex1(){

  document.getElementById("dispuml1").style.display="block";
  var namespace = joint.shapes;

  var graph = new joint.dia.Graph({}, { cellNamespace: namespace });

  paper = new joint.dia.Paper({
      el: document.getElementById('stchart_diag_ex1'),
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

  var initialst = new joint.shapes.standard.Image();
  initialst.resize(25, 25);
  initialst.position(29,107);
  //actor1.position(103, 15);
  initialst.attr('root/title', 'joint.shapes.standard.BoarderedImage');
  initialst.attr('label/fontSize', 16);
  initialst.attr('body/strokeWidth', 2);
  initialst.attr('border/rx', 2);
  initialst.attr('image/xlinkHref', 'images/initial_state.png');
  initialst.addTo(graph);

  var finalst = new joint.shapes.standard.Image();
  finalst.resize(25, 25);
  finalst.position(445,393);
  //actor1.position(103, 15);
  finalst.attr('root/title', 'joint.shapes.standard.BoarderedImage');
  finalst.attr('label/fontSize', 16);
  finalst.attr('body/strokeWidth', 2);
  finalst.attr('border/rx', 2);
  finalst.attr('image/xlinkHref', 'images/endstate.png');
  finalst.addTo(graph);


  var state1 = new joint.shapes.standard.Rectangle();
        
  state1.position(166, 99);
  state1.resize(100, 40);
  state1.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arrstate[0],
          //text:arractivity[0],
          fill: 'black',
          fontSize: 16
      }
  });
  state1.addTo(graph);

  var evnt1 = new joint.shapes.standard.Rectangle();
        
  evnt1.position(166, 136);
  evnt1.resize(100, 40);
  evnt1.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          //text: arrstate[0],
          text:arractivity[0],
          fill: 'black',
          fontSize: 16
      }
  });
  evnt1.addTo(graph);


  var state2 = new joint.shapes.standard.Rectangle();
        
  state2.position(463, 159);
  state2.resize(100, 40);
  state2.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arrstate[1],
          fill: 'black',
          fontSize: 16
      }
  });
  state2.addTo(graph);

  var evnt2 = new joint.shapes.standard.Rectangle();
        
  evnt2.position(463, 196);
  evnt2.resize(100, 40);
  evnt2.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arractivity[1],
          fill: 'black',
          fontSize: 16
      }
  });
  evnt2.addTo(graph);

  var state3 = new joint.shapes.standard.Rectangle();
        
  state3.position(164, 386);
  state3.resize(100, 40);
  state3.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arrstate[2],
          fill: 'black',
          fontSize: 16
      }
  });
  state3.addTo(graph);

  var evnt3 = new joint.shapes.standard.Rectangle();
        
  evnt3.position(164, 422);
  evnt3.resize(100, 40);
  evnt3.attr({
      body: {
          rx: 3, // add a corner radius
          ry: 3,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arractivity[2],
          fill: 'black',
          fontSize: 16
      }
  });
  evnt3.addTo(graph);

  joint.shapes.standard.Link.define('examples.CustomLink', {
    attrs: {
        line: {
            stroke: 'black',
            strokeWidth: 2,
            targetMarker: {
                'type': 'rect',
                
            }
        }
    },
    
  });


var linkis1 = new joint.shapes.standard.Link();
linkis1.source(initialst);
linkis1.target(state1);
linkis1.addTo(graph);
linkis1.appendLabel({
          attrs: {
              text: {
                  text: arrevent[0],
                  fontSize: 16
              }
              
        }
      });
      linkis1.addTo(graph);

      

var link1 = new joint.shapes.standard.Link();
link1.source(state1);
link1.target(state2);
link1.addTo(graph);
        link1.appendLabel({
          attrs: {
              text: {
                  text: arrevent[1],
                  fontSize: 16
              }
              
        },
        position: {
          distance: 0.25
      }
      });
      link1.addTo(graph);

var link2 = new joint.shapes.standard.Link();
link2.position(164, 386);
link2.source(evnt2);
link2.target(evnt1);
link2.addTo(graph);
        link2.appendLabel({
          attrs: {
              text: {
                  text: arrevent[2],
                  fontSize: 16
              }
              
        }
      });
      link2.addTo(graph);

      var link3 = new joint.shapes.standard.Link();
      link3.source(evnt1);
      link3.target(state3);
      link3.addTo(graph);
              link3.appendLabel({
                attrs: {
                    text: {
                        text: arrevent[3],
                        fontSize: 16
                    }
                    
              }
            });
            link3.addTo(graph);


            var link4 = new joint.shapes.standard.Link();
            link4.source(evnt2);
            link4.target(state3);
            link4.addTo(graph);
                    link4.appendLabel({
                      attrs: {
                          text: {
                              text: arrevent[4],
                              fontSize: 16
                          }
                          
                    }
                  });
                  link4.addTo(graph);


      var linkfs3 = new joint.shapes.standard.Link();
      linkfs3.source(state3);
      linkfs3.target(finalst);
      linkfs3.addTo(graph);
      linkfs3.appendLabel({
          attrs: {
              text: {
                  text: arrevent[5],
                  fontSize: 16
              }
              
        }
       
      });
      linkfs3.addTo(graph);

}

  

  



  