function toggleAudio(element) {
  var id = element.dataset.id;
  var audio = document.getElementById(id);
  // audio要素のsrc属性が空でないかチェックします
  if (audio.src) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}