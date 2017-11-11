function generateTable(number) {
	let table = '<table>'

	for(let i = 1; i <= number; i++) {
		table += "<tr>"

		for (let j = 1; j <= number; j++ ) {
			table += "<td class='show-image'>" + j
		}

		table += "</td>"
	}

	table += '</table>'

	return table;
}

function insertTable(el) {
	number = parseInt( el[el.selectedIndex].value )
	document.getElementById('container').innerHTML = generateTable(number)
}