document.addEventListener("DOMContentLoaded", function() {
  var audioPlayer = document.getElementById("audioPlayer");
  var muteButton = document.getElementById("muteButton");
  var volumeSlider = document.getElementById("volumeSlider"); // New volume slider
  
  muteButton.addEventListener("click", function() {
	if (audioPlayer.muted) {
	  audioPlayer.muted = false;
	  muteButton.innerText = "Mute";
	} else {
	  audioPlayer.muted = true;
	  muteButton.innerText = "Unmute";
	}
  });
  
  volumeSlider.addEventListener("input", function() { // New event listener for volume slider
	audioPlayer.volume = volumeSlider.value / 100; // Dividing by 100 because the volume is a value from 0.0 - 1.0
  });

  audioPlayer.autoplay = true; // autoplay the audio
});