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
    /* Row 0 */
    "NUL", "&#x263A;", "&#x263B;", "&#x2665;",
    "&#x2666;", "&#x2663;", "&#2660;", "&#x2022;",
    "&#x25D8;", "&#x25CB;", "&#x25D9;", "&#x2642;",
    "&#x2640;", "&#x266A;", "&#x266B;", "&#x263C;",
    /* Row 1 */
    "&#x25BA;", "&#x25C4;", "&#x2195;", "&#x203C;",
    "&#x00B6;", "&#x00A7;", "&#x25AC;", "&#x21A8;",
    "&#x2191;", "&#x2193;", "&#x2192;", "&#x2190;",
    "&#x221F;", "&#x2194;", "&#x25B2;", "&#x25BC;",
    /* Row 2 */
    " ", "!", '"', "#",
    "$", "%", "&amp;", "'",
    "(", ")", "*", "+",
    ",", "-", ".", "/",
    /* Row 3 */
    "0", "1", "2", "3",
    "4", "5", "6", "7",
    "8", "9", ":", ";",
    "&lt;", "=", "&gt;", "?",
    /* Row 4 */
    "@", "A", "B", "C",
    "D", "E", "F", "G",
    "H", "I", "J", "K",
    "L", "M", "N", "O",
    /* Row 5 */
    "P", "Q", "R", "S",
    "T", "U", "V", "W",
    "X", "Y", "Z", "[",
    "\", "]", "^", "_",
    /* Row 6 */
    "`", "a", "b", "c",
    "d", "e", "f", "g",
    "h", "i", "j", "k",
    "l", "m", "n", "o",
    /* Row 7 */
    "p", "q", "r", "s",
    "t", "u", "v", "w",
    "x", "y", "z", "{",
    "|", "}", "~", "&#x2302",
    /* Row 8 */
    "&#x00C7;", "&#x00FC;", "&#x00E9;", "&#x00E2;",
    "&#x00E4;", "&#x00E0;", "&#x00E5;", "&#x00E7;",
    "&#x00EA;", "&#x00EB;", "&#x00E8;", "&#x00EF;",
    "&#x00EE;", "&#x00EC;", "&#x00C4;", "&#x00C5;",
    /* Row 9 */
    "&#x00C9;", "&#x00E6;", "&#x00C6;", "&#x00F4;",
    "&#x00F6;", "&#x00F2;", "&#x00FB;", "&#x00F9;",
    "&#x00FF;", "&#x00D6;", "&#x00DC;", "&#x00A2;",
    "&#x00A3;", "&#x00A5;", "&#x20A7;", "&#x0192;",
    /* Row A */
    "&#x00E1;", "&#x00ED;", "&#x00F3;", "&#x00FA;",
    "&#x00F1;", "&#x00D1;", "&#x00AA;", "&#x00BA;",
    "&#x00BF;", "&#x2310;", "&#x00AC;", "&#x00BD;",
    "&#x00BC;", "&#x00A1;", "&#x00AB;", "&#x00BB;",
    /* Row B */
    "&#x2591;", "&#x2592;", "&#x2593;", "&#x2502;",
    "&#x2524;", "&#x2561;", "&#x2562;", "&#x2556;",
    "&#x2555;", "&#x2563;", "&#x2551;", "&#x2557;",
    "&#x255D;", "&#x255C;", "&#x255B;", "&#x2510;",
    /* Row C */
    "&#x2541;", "&#x2534;", "&#x252C;", "&#x251C;",
    "&#x2500;", "&#x253C;", "&#x255E;", "&#x255F;",
    "&#x255A;", "&#x2554;", "&#x2569;", "&#x2566;",
    "&#x2560;", "&#x2550;", "&#x256C;", "&#x2567;",
    /* Row D */
    "&#x2568;", "&#x2564;", "&#x2565;", "&#x2559;",
    "&#x2558;", "&#x2522;", "&#x2553;", "&#x256B;",
    "&#x256A;", "&#x2518;", "&#x250C;", "&#x2588;",
    "&#x2584;", "&#x258C;", "&#x2590;", "&#x2580;",
    /* Row E */
    "&#x03B1;", "&#x00DF;", "&#x0393;", "&#x03C0;",
    "&#x03A3;", "&#x03C3;", "&#x00B5;", "&#x03C4;",
    "&#x03A6;", "&#x0398;", "&#x03A9;", "&#x03B4;",
    "&#x221E;", "&#x03C6;", "&#x03B5;", "&#x2229;",
    /* Row F */
    "&#x2261;", "&#x00B1;", "&#x2265;", "&#x2264;",
    "&#x2320;", "&#x2321;", "&#x00F7;", "&#x2248;",
    "&#x00B0;", "&#x2219;", "&#x00B7;", "&#x221A;",
    "&#x207F;", "&#x00B2;", "&#x25A0;", "NBSP"
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
  const output = document.getElementById("output");
  output.setAttribute("style", "visibility: visible");
}
