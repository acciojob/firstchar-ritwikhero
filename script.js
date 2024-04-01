function firstChar(text) {
  // your code here
	if(text.length == 0){
		return " ";
	}
	text = text.trim();

	return text[0];
}


// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));
