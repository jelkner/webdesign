function save(item) {
  var reminderslistArray = getStoreArray("reminderslist");
  reminderslistArray.push(item);
  localStorage.setItem("reminderslist", JSON.stringify(reminderslistArray));
}

function loadReminderlist() {
  var reminderslistArray = getSavedSongs();
  var ul = document.getElementById("reminderslist");
  if (reminderslistArray != null) {
    for (var i = 0; i < reminderslistArray.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = reminderslistArray[i];
      ul.appendChild(li);
    }
  }
}

function getSavedSongs() {
  return getStoreArray("reminderslist");
}

function getStoreArray(key) {
  var reminderslistArray = localStorage.getItem(key);
  if (reminderslistArray == null || reminderslistArray == "") {
    reminderslistArray = new Array();
  } else {
    reminderslistArray = JSON.parse(reminderslistArray);
  }
  return reminderslistArray;
}
