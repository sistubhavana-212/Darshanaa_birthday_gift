function openTimeMachine() {
  window.location.href = "timeMachine.html";
}

function generateAnimation() {
  const faceFile = document.getElementById("faceUpload").files[0];
  if (!faceFile) {
    alert("Please upload a photo first!");
    return;
  }
  document.getElementById("animationResult").innerHTML = `
    <video controls autoplay>
      <source src="videos/doraemon-bamboo.mp4" type="video/mp4">
    </video>
  `;
}

function openDoorVideo() {
  document.getElementById("doorVideo").innerHTML = `
    <video controls autoplay>
      <source src="videos/anywhere-door.mp4" type="video/mp4">
    </video>
  `;
}
