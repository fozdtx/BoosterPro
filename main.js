function settings(){
  var txt = "settings";
  return txt;
}
function open_settings(){
  
  // if (ARGS === "settings"){
    
    // action
    document.getElementById("action").innerHTML = '<a href="settings.html" id="action_settings"></a>';
    setTimeout(function(){
      document.getElementById("action_settings").click();
    }, 0001);
  // }
  
}