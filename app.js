// Set constraints for the video stream
var constraints = {
  video: {
    width: {
      min: 1280,
      ideal: 1920,
      max: 2560,
    },
    height: {
      min: 720,
      ideal: 1080,
      max: 1440,
    },
    frameRate: 60,
    facingMode: "user" 
  },
  audio: false 
};
var track = null;

// Define constants
const cameraView = document.querySelector("#camera--view");  

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        });
};

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);