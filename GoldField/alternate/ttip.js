      var ttips = {};
      
      function addToolTip(id,value)
      {
        ttips[id]=value;
      }
            
      function showTTip(ttID)
      {
        var tag = document.getElementById("tooltip");
        tag.innerHTML=ttips[ttID];
        var loc = document.getElementById(ttID);
        var rect = loc.getBoundingClientRect();
        tag.style.left = rect.left + window.scrollX + 5;
        tag.style.top = rect.top + window.scrollY + 5;
        tag.style.visible = "visible";
        tag.style.display = "block"
      }
      
      function hideTTip()
      {
        var tag = document.getElementById("tooltip");
        tag.innerHTML="empty";
        tag.style.visible = "hidden";
        tag.style.display = "none"
      }

addToolTip("object","OBJECT - Portions of software data and operations that are contained in one packet of software code.");
addToolTip("tuple","TUPLE - A list of values contained by parenthesis (red,blue,green,yellow), (1,2,3,4,5,6)");
addToolTip("keyword","KEYWORD - Text that has a specific meaning in the program. Keywords like 'var' can ONLY be used for that one meaning.");
addToolTip("variable","VARIABLE - Text that you can define to store data in a program. See also FIELD.");
addToolTip("field","FIELD - Text that you can define to store data in a program. See also VARIABLE.");
addToolTip("dotOperator","DOT OPERTOR - The '.' character indicating 'has a part' as in x.y which is read 'x has a part y'.");
addToolTip("Boolean","BOOLEAN - Boole was a mathematician who explored the math of true and false statements. Boolean math deals with any statement that can be reduced to either true or false.");
addToolTip("control structure","CONTROL STRUCTURE - Decision code elements that redirect the code execution. See also BOOLEAN, FLOW.");
addToolTip("if","IF - The simplest control structure that tests for true or false conditions. See also CONTROL STRUCTURE");
addToolTip("flow","FLOW - The path through the code as if drawn with a pencil through the lines.");
