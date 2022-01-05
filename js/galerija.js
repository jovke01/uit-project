const closeBtn = document.querySelector(".close");
const frame = document.querySelector(".image-full");
const imageMain = document.querySelector(".img-frame");
const images = document.querySelectorAll("#slika");

images.forEach((image) => {
	image.addEventListener("click", () => {
		imageMain.src = image.src;
		frame.classList.add("open");
	});
});
closeBtn.addEventListener("click", () => {
	frame.classList.remove("open");
});
