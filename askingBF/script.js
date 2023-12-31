const container = document.getElementById("container");
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");

let containerWidth = container.clientWidth;
let containerHeight = container.clientHeight;

// For non-touch screens
noButton.addEventListener("mouseover", () => {
  const leftPosition = containerWidth - noButton.clientWidth;
  const topPosition = containerHeight - noButton.clientHeight;
  noButton.style.left = `${Math.floor(Math.random() * (leftPosition + 1))}px`;
  noButton.style.top = `${Math.floor(Math.random() * (topPosition + 1))}px`;
});

// for touch screens
noButton.addEventListener("touchstart", (event) => {
  event.preventDefault();
  const leftPosition = containerWidth - noButton.clientWidth;
  const topPosition = containerHeight - noButton.clientHeight;
  noButton.style.left = `${Math.floor(Math.random() * (leftPosition + 1))}px`;
  noButton.style.top = `${Math.floor(Math.random() * (topPosition + 1))}px`;
});

// Clicking on Yes button
yesButton.addEventListener("click", () => {
  const title = document.getElementById("title");
  const gifImg = document.getElementById("img-gif");

  // creating new image element and appending it to container with proper style
  const imageEle = document.createElement("img");
  imageEle.src = "./img/celebration.gif";
  imageEle.style.position = "absolute";
  imageEle.style.width = "100%";
  imageEle.style.height = "100vh";
  container.appendChild(imageEle);

  // Hiding buttons
  yesButton.style.display = "none";
  noButton.style.display = "none";

  // Modifying title and gif image
  title.innerHTML = "Thank You so much babe ❤️";
  gifImg.src = "./img/yes.gif";
});
