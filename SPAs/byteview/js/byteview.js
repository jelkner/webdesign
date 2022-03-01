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
  const digits = "0123456789ABCDEF";
  if (num == 0 )
    return "0";
  let conversion = "";
  while (num > 0) {
    conversion = digits[num % base] + conversion;
    num = Math.floor(num / base);
  }
  return conversion;
}

function padZeros(numStr, base) {
  let targetLen = null;
  if (base == 1)  {
    targetLen = 8;
  } else if (base == 8) {
    targetLen = 3;
  } else if (base == 16) {
    targetLen = 2;
  };
  while (numStr.length < targetLen) {
    numStr = "0" + numStr;
  }
  return numStr;
}

function convert8bitToHTMLcolor(num) {
  const redBits = num >>> 5;
  const greenBits = (num >>> 2) & 7;
  const blueBits = num & 3;
  let color = "#";
  color += padZeros(convertToBase(Math.floor((redBits / 7) * 255), 16), 16);
  color += padZeros(convertToBase(Math.floor((greenBits / 7) * 255), 16), 16);
  color += padZeros(convertToBase(Math.floor((blueBits / 3) * 255), 16), 16);
  return color;
}

function convertToCodePage437(num) {
  const codePageUnicode = [
    null, "&#x263A;", "&#x263B;", "&#x2665;",
    "&#x2666;", "&#x2663;", "&#2660;", "&#x2022;",
    "&#x25D8;", "&#x25CB;", "&#x25D9;", "&#x2642;",
    "&#x2640;", "&#x266A;", "&#x266B;", "&#x263C;"
  ];
  return codePageUnicode[num];
}

function processButtonClick(e) {
  const number = document.getElementById("numberInput").value;
  const unsigned = document.getElementById("unsigned");
  unsigned.innerHTML = number;
  const signed = document.getElementById("signed");
  signed.innerHTML = (number > 127) ? -1 * (number - 127) : number;
  const bin = document.getElementById("bin");
  bin.innerHTML = padZeros(convertToBase(number, 2), 2);
  const oct = document.getElementById("oct");
  oct.innerHTML = padZeros(convertToBase(number, 8), 8);
  const hex = document.getElementById("hex");
  hex.innerHTML = padZeros(convertToBase(number, 16), 16);
  const codePage437 = document.getElementById("codePage437");
  codePage437.innerHTML = convertToCodePage437(number);
  const eightBitColor = document.getElementById("eightBitColor");
  const color = convert8bitToHTMLcolor(number);
  eightBitColor.innerHTML = color; 
  eightBitColor.setAttribute("style", "background-color: " + color);
}
