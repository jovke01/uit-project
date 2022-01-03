const menuBtn = document.querySelector(".menu-btn");
const ul = document.querySelector(".linkovi");
//menu toggle

menuBtn.addEventListener("click", () => {
	menuBtn.classList.toggle("open");
	ul.classList.toggle("open");
});
