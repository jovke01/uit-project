const body = document.querySelector("#table-body");

function allRecords() {
	var values = [];
	// sluzi da izlista sve "kluceve" odnosno identifikatore preko kojih mozemo da pristupimo podacima u lokalnom skladistu
	let keys = Object.keys(localStorage);
	// daje nam broj rezervacija koje imamo i sa time ih "pozivamo" u niz
	let i = keys.length;
	// console.log("done");
	// sve dok mozemo da i umanjimo za 1 i i nije manje od 0 traje petlja
	while (i--) {
		// console.log(i);
		values.push(localStorage.getItem(keys[i]));
	}
	// values.forEach((val) => console.log(val));
	return values;
}
let records = allRecords();

records.forEach((record) => {
	let parsedRecord = JSON.parse(record);
	// console.log(parsedRecord);

	let row = body.insertRow(-1);

	row.innerHTML = `<td>${parsedRecord.email}</td>
	                        <td>${parsedRecord.tel}</td>
	                        <td>${parsedRecord.film}</td>
	                        <td>${parsedRecord.time}</td>
	                        <td>${parsedRecord.number}</td>`;
});

// let cell1 = row.insertCell(0);
// let cell2 = row.insertCell(1);
// let cell3 = row.insertCell(2);
// let cell4 = row.insertCell(3);
// let cell5 = row.insertCell(4);
