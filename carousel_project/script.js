//Array for integration team images
const images = ["images_to_carousel/team_1.jpg", "images_to_carousel/team_2.jpg", "images_to_carousel/team_3.jpg"];
let currentImage = 0; //Variable to the current image
const carouselImage = document.getElementById("carouselImage"); //We are looking for an HTML element with id="carouselImage"

//function to Image replacement 
function changeImage(indexChange) {
    currentImage = (currentImage + indexChange + images.length) % images.length;
    carouselImage.src = images[currentImage];
}

//switch image with the arrows
document.getElementById("prevBtn").addEventListener("click", () => changeImage(-1));
document.getElementById("nextBtn").addEventListener("click", () => changeImage(1));

//Enable automatic switching every 30 seconds 
setInterval(() => changeImage(1), 30000);