/* byte.js */
window.onload = init;

function init() {
  var button = document.getElementById("inputButton");
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
  let number = document.getElementById("numberInput").value;
  let outputP = document.getElementById("output");
  let outStr = "";

  if (number < 0 || number > 255) {
    outStr += "Your number, " + number + ", is not in range.";
    outStr += " Please enter a number between 0 and 255.";
  } else {
    outStr += "Your number, " + number + ", is in range.";
  }
  outputP.innerHTML = outStr;
}
