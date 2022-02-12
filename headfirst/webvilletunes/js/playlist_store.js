function save(item) {
  var playlistarray = getStorearray("playlist");
  playlistarray.push(item);
  localStorage.setItem("playlist", JSON.stringify(playlistarray));
}

function loadPlaylist() {
  var playlistarray = getSavedSongs();
  var ul = document.getElementById("playlist");
  if (playlistarray != null) {
    for (var i = 0; i < playlistarray.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = playlistarray[i];
      ul.appendChild(li);
    }
  }
}

function getSavedSongs() {
  return getStorearray("playlist");
}

function getStorearray(key) {
  var playlistarray = localStorage.getItem(key);
  if (playlistarray == null || playlistarray == "") {
    playlistarray = new array();
  } else {
    playlistarray = JSON.parse(playlistarray);
  }
  return playlistarray;
}
