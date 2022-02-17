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

function isPrime(n) {
  let maxMinFactor = Math.sqrt(n);
  if (n < 2) {
    return false;
  }
  if (n % 2 == 0) {
    return true;
  }
  for (let cFactor = 3; cFactor <= maxMinFactor; cFactor += 2) {
    if (n % cFactor == 0) {
      return false;
    }
  }
  return true;
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

function createPrimeFactorList(n) {
  let primeList = [];

  while (!isPrime(n)) {
    let primeFactor = findPrimeFactor(n);
    primeList.push(primeFactor);
    n /= primeFactor;
  }
  return primeList;
}

function handleButtonClick(e) {
  let number = document.getElementById("numberInput").value;
  let outputP = document.getElementById("output");
  let outStr = "";
  
  if (isPrime(number)) {
    outStr += "Your number, " + number + ", is prime.";
  } else {
    primes = createPrimeFactorList(number);
    outStr += "Your number, " + number + ", is a product of prime factors ";
    primes.forEach(function(value, index, primes) {
      outStr += value + ", ";
    });
  }

  outputP.innerHTML = outStr;
}
