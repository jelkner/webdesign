/* playlist.js */
window.onload = init;

function init() {
  var button = document.getElementById("factorButton");
  button.onclick = handleButtonClick;

  addValidation();
}

function addValidation() {
  var loc = window.location.href;
  var HTMLvalidLinkStr = 'http://validator.w3.org/check?uri=' + loc;
  var CSSvalidLinkStr = 'http://jigsaw.w3.org/css-validator/validator?uri=' +
                        loc + '?profile=css3';
  document.getElementById("vLink1").setAttribute("href", HTMLvalidLinkStr);
  document.getElementById("vLink2").setAttribute("href", CSSvalidLinkStr);
}

function handleButtonClick(e) {
  var number = document.getElementById("numberInput").value;
  var outputP = document.getElementById("output");
  
  outputP.innerHTML = "Your number is " + number + "!";
}
