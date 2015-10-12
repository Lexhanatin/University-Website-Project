function processForm() {
	var fname = document.getElementById('fnameinput').value;
	if (fname==null || fname=='') {
		alert("First name must be filled out.");
		return false;
	}
	
	var lname = document.getElementById('lnameinput').value;
	if (lname==null || lname=='') {
		alert("Last name must be filled out.");
		return false;
	}
	writeTY(fname);
}
function writeTY(fname) {
	alert('Your info has been submitted. We will contact you within 2 days, ' + fname +'!');
	return;
}
