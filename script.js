const torch = document.getElementById("torch");
const weldSound = document.getElementById("weldSound");

let torchX = 900;
let isWelding = false;

// Movement and space toggle
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
    torchX = Math.max(torchX - 10, 0);
    updateTorchPosition();
  }

  if (e.code === "ArrowRight") {
    torchX = Math.min(torchX + 10, 900); // 920px container - 130px torch width
    updateTorchPosition();
  }

  if (e.code === "Space" && !isWelding) {
    isWelding = true;
    torch.src = "assets/torch_on.png";
    weldSound.currentTime = 0;
    weldSound.play();
  }
});

// Stop welding on keyup
document.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    isWelding = false;
    torch.src = "assets/torch_off.png";
    weldSound.pause();
  }
});

function updateTorchPosition() {
  torch.style.left = `${torchX}px`;
}

updateTorchPosition();