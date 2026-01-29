// cute little sparkle effect on click
document.body.addEventListener("click", e => {
  const heart = document.createElement("div");
  heart.innerText = "💗";
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.fontSize = "20px";
  heart.style.animation = "fade 1s forwards";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
});
