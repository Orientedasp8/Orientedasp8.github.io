const imageNumber = Math.floor(Math.random() * 10) + 1;
const image = document.getElementById("random-img");
image.src = `./assets/images/${imageNumber}.jpeg`

image.onload = () => {
    image.style.opacity = 1;
}