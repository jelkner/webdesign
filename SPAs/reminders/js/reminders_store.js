function save(item) {
  var reminderlistArray = getStoreArray("reminderlist");
  reminderlistArray.push(item);
  localStorage.setItem("reminderlist", JSON.stringify(reminderlistArray));
}

function loadReminderlist() {
  var reminderlistArray = getSavedReminders();
  var ul = document.getElementById("reminderlist");
  if (reminderlistArray != null) {
    for (var i = 0; i < reminderlistArray.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = reminderlistArray[i];
      ul.appendChild(li);
    }
  }
}

function getSavedReminders() {
  return getStoreArray("reminderlist");
}

function getStoreArray(key) {
  var reminderlistArray = localStorage.getItem(key);
  if (reminderlistArray == null || reminderlistArray == "") {
    reminderlistArray = new Array();
  } else {
    reminderlistArray = JSON.parse(reminderlistArray);
  }
  return reminderlistArray;
}
