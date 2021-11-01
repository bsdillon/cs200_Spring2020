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
