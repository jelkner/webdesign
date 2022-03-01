/* byte.js */
window.onload = init;

function init() {
  const button = document.getElementById('inputButton');
  button.onclick = processButtonClick;
  addValidation();
}

function addValidation() {
  const loc = window.location.href;
  let HTMLvalidLinkStr = 'http://validator.w3.org/check?uri=' + loc;
  let CSSvalidLinkStr = 'http://jigsaw.w3.org/css-validator/validator?uri=' +
                        loc + '?profile=css3';
  document.getElementById("vLink1").setAttribute("href", HTMLvalidLinkStr);
  document.getElementById("vLink2").setAttribute("href", CSSvalidLinkStr);
}

function convertToBase(num, base) {
  if (num == 0 )
    return "0";
  let conversion = "";
  while (num > 0) {
    conversion = num % base + conversion;
    num = Math.floor(num / base);
  }
  return conversion;
}

function processButtonClick(e) {
  const number = document.getElementById("numberInput").value;
  const unsigned = document.getElementById("unsigned");
  unsigned.innerHTML = number;
  const bin = document.getElementById("bin");
  bin.innerHTML = convertToBase(number, 2);
}
