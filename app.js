// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
var track = null;

// Define constants
const cameraView = document.querySelector("#camera--view");  

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(
            {
            video: {
              facingMode: "user",
            },
          })
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        });
};

cameraView.requestFullscreen()

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);