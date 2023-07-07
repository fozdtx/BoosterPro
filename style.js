function dropdown_1(){
  document.getElementById('cct').style.height = '250px';
  document.getElementById('cct1').innerHTML = '<div class="box-1" id="cct1" onclick="dropdown_2()"> Choose Category <span class="d">⌄</span></div>';
}
function dropdown_2(){
  document.getElementById('cct').style.height = '0.11px';
  document.getElementById('cct1').innerHTML = '<div class="box-1 id="cct1" onclick="dropdown_1()"> Choose Category ⌄</div>';
}