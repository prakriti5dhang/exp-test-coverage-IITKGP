/*Redeveloped
Lab: Software Engineering
Exp: Estimation of Test Coverage Metrics and Structural Complexity
File Name: exercise2.js
Author: Prakriti Dhang*/




/***************************************************** Function to show CFG  ***************************************************/

function drawbtex2(){

  document.getElementById("dispuml2").style.display="block";
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

  var initialst = new joint.shapes.standard.Image();
  initialst.resize(25, 25);
  initialst.position(29,36);
  //actor1.position(103, 15);
  initialst.attr('root/title', 'joint.shapes.standard.BoarderedImage');
  initialst.attr('label/fontSize', 16);
  initialst.attr('body/strokeWidth', 2);
  initialst.attr('border/rx', 2);
  initialst.attr('image/xlinkHref', 'images/initial_state.png');
  initialst.addTo(graph);

  var finalst = new joint.shapes.standard.Image();
  finalst.resize(25, 25);
  finalst.position(719,408);
  //actor1.position(103, 15);
  finalst.attr('root/title', 'joint.shapes.standard.BoarderedImage');
  finalst.attr('label/fontSize', 16);
  finalst.attr('body/strokeWidth', 2);
  finalst.attr('border/rx', 2);
  finalst.attr('image/xlinkHref', 'images/endstate.png');
  finalst.addTo(graph);


  var act1 = new joint.shapes.standard.Rectangle();
        
  act1.position(249, 30);
  act1.resize(100, 40);
  act1.attr({
      body: {
          rx: 20, // add a corner radius
          ry: 20,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arract2[0],
          fill: 'black',
          fontSize: 14
      }
  });
  act1.addTo(graph);


  var act2 = new joint.shapes.standard.Rectangle();
        
  act2.position(249, 126);
  act2.resize(100, 40);
  act2.attr({
      body: {
          rx: 20, // add a corner radius
          ry: 20,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arract2[1],
          fill: 'black',
          fontSize: 14
      }
  });
  act2.addTo(graph);


  var fork = new joint.shapes.standard.Image();
  fork.resize(80,12);
  fork.position(261,227);
  //actor1.position(103, 15);
  fork.attr('root/title', 'joint.shapes.standard.BoarderedImage');
 
  fork.attr('image/xlinkHref', 'images/fork-merge.png');
  fork.addTo(graph);


  var act3 = new joint.shapes.standard.Rectangle();
        
  act3.position(181, 310);
  act3.resize(100, 40);
  act3.attr({
      body: {
          rx: 20, // add a corner radius
          ry: 20,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arrparallelact[0],
          fill: 'black',
          fontSize: 14
      }
  });
  act3.addTo(graph);

  var con1 = new joint.shapes.standard.Image();
  con1.resize(40, 30);
  con1.position(66,317);
  //actor1.position(103, 15);
  con1.attr('root/title', 'joint.shapes.standard.BoarderedImage');
  con1.attr('label/fontSize', 16);
  con1.attr('body/strokeWidth', 2);
  con1.attr('border/rx', 2);
  con1.attr('image/xlinkHref', 'images/condtion_ifelse.png');
  con1.addTo(graph);


  var act4 = new joint.shapes.standard.Rectangle();
        
  act4.position(327, 309);
  act4.resize(100, 40);
  act4.attr({
      body: {
          rx: 20, // add a corner radius
          ry: 20,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arrparallelact[1],
          fill: 'black',
          fontSize: 14
      }
  });
  act4.addTo(graph);

  var con2 = new joint.shapes.standard.Image();
  con2.resize(40, 30);
  con2.position(519,317);
  //actor1.position(103, 15);
  con2.attr('root/title', 'joint.shapes.standard.BoarderedImage');
  con2.attr('label/fontSize', 16);
  con2.attr('body/strokeWidth', 2);
  con2.attr('border/rx', 2);
  con2.attr('image/xlinkHref', 'images/condtion_ifelse.png');
  con2.addTo(graph);

  
  var merge = new joint.shapes.standard.Image();
  merge.resize(80, 12);
  merge.position(272,473);
  //actor1.position(103, 15);
  merge.attr('root/title', 'joint.shapes.standard.BoarderedImage');
 
 merge.attr('image/xlinkHref', 'images/fork-merge.png');
  merge.addTo(graph);

  var act5 = new joint.shapes.standard.Rectangle();
        
  act5.position(263, 546);
  act5.resize(100, 40);
  act5.attr({
      body: {
          rx: 20, // add a corner radius
          ry: 20,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arract2[4],
          fill: 'black',
          fontSize: 14
      }
  });
  act5.addTo(graph);


  var act6 = new joint.shapes.standard.Rectangle();
        
  act6.position(480, 546);
  act6.resize(100, 40);
  act6.attr({
      body: {
          rx: 20, // add a corner radius
          ry: 20,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arract2[5],
          fill: 'black',
          fontSize: 14
      }
  });
  act6.addTo(graph);


  var act7 = new joint.shapes.standard.Rectangle();
        
  act7.position(681, 546);
  act7.resize(100, 40);
  act7.attr({
      body: {
          rx: 20, // add a corner radius
          ry: 20,
          fill: '#FFFC8C',
          strokeWidth: 2
      },
      label: {
          text: arract2[6],
          fill: 'black',
          fontSize: 14
      }
  });
  act7.addTo(graph);


  /*joint.shapes.standard.Link.define('examples.CustomLink', {
    attrs: {
        line: {
            stroke: 'black',
            strokeWidth: 2,
            targetMarker: {
                'type': 'rect',
                'stroke': 'transparent'
            }
        }
    },
    
  });

  var link2 = new joint.shapes.examples.CustomLink();
        
        link2.source(act1);
        link2.target(act2);
       link2.addTo(graph);*/

  var link1 = new joint.shapes.standard.Link();
  link1.source(initialst);
  link1.target(act1);
  link1.attr({
    line: {
      strokeWidth: 2,
      targetMarker: { 
        'type': 'path',
        'stroke': 'black',
        'stroke-width': 2,
        'fill': 'white',
        
    }
}
  });
  link1.addTo(graph);

  var link2 = new joint.shapes.standard.Link();
  link2.source(act1);
  link2.target(act2);
  link2.attr({
    line: {
      strokeWidth: 2,
      targetMarker: { 
        'type': 'path',
        'stroke': 'black',
        'stroke-width': 2,
        'fill': 'white',
        
    }
}
  });
  link2.addTo(graph);
  

  var link3 = new joint.shapes.standard.Link();
  link3.source(act2);
  link3.target(fork);
  link3.attr({
    line: {
      strokeWidth: 2,
      targetMarker: { 
        'type': 'path',
        'stroke': 'black',
        'stroke-width': 2,
        'fill': 'white',
        
    }
}
  });
  link3.addTo(graph);
  

  var link4 = new joint.shapes.standard.Link();
  link4.source(fork);
  link4.target(act3);
  link4.attr({
    line: {
      strokeWidth: 2,
      targetMarker: { 
        'type': 'path',
        'stroke': 'black',
        'stroke-width': 2,
        'fill': 'white',
        
    }
}
  });
  link4.addTo(graph);
  

  var link5 = new joint.shapes.standard.Link();
  link5.source(fork);
  link5.target(act4);
  link5.attr({
    line: {
      strokeWidth: 2,
      targetMarker: { 
        'type': 'path',
        'stroke': 'black',
        'stroke-width': 2,
        'fill': 'white',
        
    }
}
  });
  link5.addTo(graph);
  

  var link6 = new joint.shapes.standard.Link();
  link6.source(con1);
  link6.target(merge);
  link6.appendLabel({
    attrs: {
        text: {
            text: '[Test Successful]',
            fontSize: 16
        }
        
  }
});
  link6.attr({
    line: {
      strokeWidth: 2,
      targetMarker: { 
        'type': 'path',
        'stroke': 'black',
        'stroke-width': 2,
        'fill': 'white',
        
    }
}
  });
  link6.addTo(graph);



  var link7 = new joint.shapes.standard.Link();
  link7.source(con2);
  link7.target(merge);
  link7.appendLabel({
    attrs: {
        text: {
            text: '[Test Successful]',
            fontSize: 16
        }
        
  }
});
  link7.attr({
    line: {
      strokeWidth: 2,
      targetMarker: { 
        'type': 'path',
        'stroke': 'black',
        'stroke-width': 2,
        'fill': 'white',
        
    }
}
  });
  link7.addTo(graph);


  var link8 = new joint.shapes.standard.Link();
  link8.source(merge);
  link8.target(act5);
  link8.attr({
    line: {
      strokeWidth: 2,
      targetMarker: { 
        'type': 'path',
        'stroke': 'black',
        'stroke-width': 2,
        'fill': 'white',
        
    }
}
  });
  link8.addTo(graph);


  var link9 = new joint.shapes.standard.Link();
  link9.source(act5);
  link9.target(act6);
  link9.attr({
    line: {
      strokeWidth: 2,
      targetMarker: { 
        'type': 'path',
        'stroke': 'black',
        'stroke-width': 2,
        'fill': 'white',
        
    }
}
  });
  link9.addTo(graph);

  var link10 = new joint.shapes.standard.Link();
  link10.source(act6);
  link10.target(act7);
  link10.attr({
    line: {
      strokeWidth: 2,
      targetMarker: { 
        'type': 'path',
        'stroke': 'black',
        'stroke-width': 2,
        'fill': 'white',
        
    }
}
  });
  link10.addTo(graph);

  var link11 = new joint.shapes.standard.Link();
  link11.source(act7);
  link11.target(finalst);
  link11.attr({
    line: {
      strokeWidth: 2,
      targetMarker: { 
        'type': 'path',
        'stroke': 'black',
        'stroke-width': 2,
        'fill': 'white',
        
    }
}
  });
  link11.addTo(graph);

  var link12 = new joint.shapes.standard.Link();
  link12.source(act3);
  link12.target(con1);
  link12.attr({
    line: {
      strokeWidth: 2,
      targetMarker: { 
        'type': 'path',
        'stroke': 'black',
        'stroke-width': 2,
        'fill': 'white',
        
    }
}
  });
  link12.addTo(graph);

  var link13 = new joint.shapes.standard.Link();
  link13.source(act4);
  link13.target(con2);
  link13.attr({
    line: {
      strokeWidth: 2,
      targetMarker: { 
        'type': 'path',
        'stroke': 'black',
        'stroke-width': 2,
        'fill': 'white',
        
    }
}
  });
  link13.addTo(graph);

  var link14 = new joint.shapes.standard.Link();
  link14.source(con1);
  link14.target(act2);
  link14.appendLabel({
    attrs: {
        text: {
            text: '[Test Fail]',
            fontSize: 16
        }
        
  }
});
  link14.attr({
    line: {
      strokeWidth: 2,
      targetMarker: { 
        'type': 'path',
        'stroke': 'black',
        'stroke-width': 2,
        'fill': 'white',
        
    }
}
  });
  link14.addTo(graph);


  var link15 = new joint.shapes.standard.Link();
  link15.source(con2);
  link15.target(act2);
  link15.appendLabel({
    attrs: {
        text: {
            text: '[Test Fail]',
            fontSize: 16
        }
        
  }
  
});
  link15.attr({
    line: {
      strokeWidth: 2,
      targetMarker: { 
        'type': 'path',
        'stroke': 'black',
        'stroke-width': 2,
        'fill': 'white',
        
    }
}
  });
  link15.addTo(graph);

}