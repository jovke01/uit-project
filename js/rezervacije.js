let email = document.querySelector("#email");
let tel = document.querySelector("#tel");
let film = document.querySelector("#film");
let time = document.querySelectorAll(".time-rb");
let number = document.querySelector("#number");
let sumbit = document.querySelector("#submit");
let form = document.querySelector(".form");
let timeValue;
// console.log(time);
function checkedValue() {
	for (let i = 0; i < time.length; i++) {
		if (time[i].checked) {
			return time[i].value;
		}
	}
	return timeValue;
}
checkedValue();
console.log(checkedValue());
class Rezervacija {
	constructor(email, tel, film, number) {
		this.email = email;
		this.tel = tel;
		this.film = film;
		this.number = number;
		this.time = checkedValue();
	}
}
form.addEventListener("submit", function handleSubmit(e) {
	e.preventDefault();
	let record = new Rezervacija(
		email.value,
		tel.value,
		film.value,
		number.value
	);
	localStorage.setItem("record1", JSON.stringify(record));
	console.log(record);
	console.log("btn clicked");
	console.log(localStorage.getItem("record1"));
});