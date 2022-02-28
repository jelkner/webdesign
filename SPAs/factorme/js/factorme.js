/* factorme.js */
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
  if (n == 0 || n == 1) {
    return false;
  }
  if (n == 2 || n == 3) {
    return true;
  }
  if (n % 2 == 0) {
    return false;
  }
  let factMax = Math.sqrt(n) + 2;
  for (let candidateFact = 3; candidateFact <= factMax; candidateFact += 2) {
    if (n % candidateFact == 0) {
      return false;
    }
  }
  return true;
}

function findLowestPrimeFactor(n) {
  if (n % 2 == 0) {
    return 2;
  }
  if (n % 3 == 0) {
    return 3;
  }
  let factMax = Math.sqrt(n) + 2;
  for (let candidateFact = 3; candidateFact < factMax; candidateFact += 2) {
    if (n % candidateFact == 0) {
      return candidateFact;
    }
  }
  return n;
}

function createPrimeFactorList(n) {
  let primeFactsList = [];
  while (!isPrime(n)) {
    let primeFactor = findLowestPrimeFactor(n);
    primeFactsList.push(primeFactor);
    n /= primeFactor;
  }
  primeFactsList.push(n);
  return primeFactsList;
}

function handleButtonClick(e) {
  let number = document.getElementById("numberInput").value;
  let outputP = document.getElementById("output");
  let outStr = "";
  let lastPrimesStr = "";
  
  if (isPrime(number)) {
    outStr += "Your number, " + number + ", is prime.";
  } else {
    let primes = createPrimeFactorList(number);
    outStr += "Your number, " + number + ", is a product of prime factors ";
    
    let penultIndex = primes.length - 2;
    lastPrimesStr = primes[penultIndex] + " and " + primes[penultIndex+1];
    
    for (let i = 0; i < penultIndex; i++) { 
      outStr +=  primes[i] + ", ";
    };
    outStr += lastPrimesStr; 
  }

  outputP.innerHTML = outStr;
}
