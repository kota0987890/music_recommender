function toggleAudio(element) {
  var id = element.dataset.id;
  var audio = document.getElementById(id);
  if (audio.src) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}