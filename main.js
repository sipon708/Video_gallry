var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display="block";
    myVideo.style.display="block";
}
function stopVideo() {
    videoPlayer.style.display="none";
    myVideo.style.display="none";
}