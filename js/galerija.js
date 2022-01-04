const close = document.querySelector(".close");
const frame = document.querySelector(".image-full");
const images = document.querySelectorAll("#slika");

images.forEach((image) => {
	image.addEventListener("click", () => {
		frame.classList.add("open");
		console.log(image.src);
	});
});
close.addEventListener("click", () => {
	frame.classList.remove("open");
});
