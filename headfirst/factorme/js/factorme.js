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

function findPrimeFactor(n) {
  if (n < 1) {
    return -1;
  }
  if (n % 2 == 0) {
    return 2;
  }
  for (let cf = 3; cf < n/2; cf += 2) {
    if (n % cf == 0) {
      return cf;
    }
  }
  return -1;
}

function handleButtonClick(e) {
  let number = document.getElementById("numberInput").value;
  let outputP = document.getElementById("output");
  let outStr = "";
  
  outStr += "Your number, " + number + ", has a prime factor of ";
  outStr += findPrimeFactor(number) + ".";

  outputP.innerHTML = outStr;
}
