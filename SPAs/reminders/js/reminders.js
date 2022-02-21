/* playlist.js */
window.onload = init;

function init() {
  var button = document.getElementById("submitButton");
  button.onclick = handleButtonClick;

  loadPlaylist();
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
  var textInput = document.getElementById("reminderText");
  var reminder = textInput.value;

  if (reminder == "") {
    alert("Please enter a reminder");
  }
  else {
    var li = document.createElement("li");
    li.innerHTML = reminder;
    var ul = document.getElementById("reminderlist");
    ul.appendChild(li);
    save(reminder);
    textInput.value = "";
  }
}
