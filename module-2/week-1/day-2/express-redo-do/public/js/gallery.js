function createGallery(galleryId, images) {
  // HTML ELEMENTS
  const gallery = document.getElementById(galleryId);
  // gallery must be defined

  if (gallery === null || !(gallery instanceof HTMLDivElement)) {
    throw new Error("Invalid gallery HTML element");
  }
  const image = gallery.querySelector(".img");
  const btns = gallery.querySelectorAll(".btn");
  // buttons and image elements must be there
  
  if (image === null || btns.length === 0) {
    throw new Error("Invalid buttons or image classes");
  }
  // INITIALIZE A COUNTER TO MOVE INSIDE IMAGE'S ARRAY
  let counter = 0;

  // BUSINESS LOGIC
  function changeImage() {
    image.src = "img/" + images[Math.abs(counter % images.length)];
  }

  function handleClick(evt) {
    if (evt.target.classList.contains("next")) {
      counter++;
    } else {
      counter--;
    }
    changeImage();
  }

  // EVENT LISTENING
  btns.forEach((btn) => (btn.onclick = handleClick));
}

createGallery("gallery-1", ["image-1.jpg", "image-2.jpg", "image-3.jpg"]);
createGallery("gallery-2", ["image-1.jpg", "image-2.jpg", "image-3.jpg"]);
