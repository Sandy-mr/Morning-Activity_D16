function getFirstLetterFromFirstName (array){
	var names = [];
	for (var i=0; i<array.length; i++) {
		var  obj = array[i];
		var p = obj.firstName;
	var first = p[0];
		names.push(first.toUpperCase());
	 
	}
	return names;
}



var names = [{
  firstName: "pedro",
  lastName: "Paramo"
}, {
  firstName: "chuck",
  lastName: "Norris"
}, {
  firstName: "vicente",
  lastName: "Fernandez"
}, {
  firstName: "electric",
  lastName: "Blue"
}];
console.log(getFirstLetterFromFirstName(names));
