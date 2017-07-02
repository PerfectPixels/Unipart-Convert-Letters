let output = document.getElementById('output');
let equation = '';
const delimiters = ['.', ','];

function convertAlphabet() {
	const text = document.getElementById('the-text').value.replace(/\s\s+/g,' ').replace(/\r?\n|\r/g,'');

	for (let i = 0; i < text.length; i++){
		let letter = text.charAt(i);

		if ((letter === '.' || letter === ',') && text.charAt(i+1) === ' '){
			letter = text.substring(i, i+1);
			i++;
		}
	    	
	    charToNb(letter);
    }
    console.log(equation);
    output.innerHTML = equation + '<br><h3>=</h3>' + eval(equation);

}

function charToNb(letter) {
	
	if (/^[A-Z]/.test(letter)){
		equation += parseInt(letter, 36) - 9;
	} else if (/^[a-z]/.test(letter)){
		equation += parseInt(letter, 36) - 10;
	} else if (letter === ', '){
		equation += '-';
	} else if (letter === '. '){
		equation += '*';
	} else if (letter === ' '){
		equation += '+';
	}

}