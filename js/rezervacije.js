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
		email = this.email;
		tel = this.tel;
		film = this.film;
		number = this.number;
		// time = checkedValue();
	}
	displayInfo() {
		console.log(email.value);
	}
}
form.addEventListener("submit", function handleSubmit(e) {
	e.preventDefault();
	// console.log(email.value);
	// console.log(tel.value);
	// console.log(film.value);
	// console.log(checkedValue());
	// console.log(number.value);
	let record = new Rezervacija(
		email.value,
		tel.value,
		film.value,
		number.value
	);
	record.displayInfo();
	console.log("btn clicked");
});
