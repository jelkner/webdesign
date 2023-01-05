function save(item) {
  alert("playlist_store save function called.");
  var playlistArray = getStoreArray("playlist");
  alert("Before push new item: " + JSON.stringify(playlistArray));
  playlistArray.push(item);
  localStorage.setItem("playlist", JSON.stringify(playlistArray));
  alert("After push new item: " + JSON.stringify(playlistArray));
}

function loadPlaylist() {
  alert("playlist_store loadPlaylist function called.");
  var playlistArray = getSavedSongs();
  var ul = document.getElementById("playlist");
  if (playlistArray != null) {
    for (var i = 0; i < playlistArray.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = playlistArray[i];
      ul.appendChild(li);
    }
  }
}

function getSavedSongs() {
  return getStoreArray("playlist");
}

function getStoreArray(key) {
  alert("playlist_store getStoreArray function called.");
  var playlistArray = localStorage.getItem(key);
  if (playlistArray == null || playlistArray == "") {
    playlistArray = new Array();
  } else {
    playlistArray = JSON.parse(playlistArray);
  }
  return playlistArray;
}
