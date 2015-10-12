function checkReqFields() {
		var fname = document.getElementById('fnameinput').value;
		if (fname==null || fname=="") {
			alert("First name must be filled out");
			return false;
			}
		
		var lname = document.getElementById('lnameinput').value;
		if (lname==null || lname=='') {
		alert("Last name must be filled out.");
		return false;
		}
		
		var pnumber = document.getElementById('pnumberinput').value;
		if (pnumber==null || pnumber=='') {
		alert("Phone number must be filled out.");
		return false;
		}
		
		var email = document.getElementById('emailinput').value;
		if (email==null || email=='') {
		alert("Email must be filled out.");
		return false;
		}
		
		var date = document.getElementById('dateinput').value;
		if (date==null || date=='') {
		alert("Date must be filled out.");
		return false;
		}
		
		var time = document.getElementById('timeinput').value;
		if (time==null || time=='') {
		alert("Time must be filled out.");
		return false;
		}
		writeTy(fname);
}
function writeTy(fname) {
	alert('Your info has been submitted. We will contact you within 2 days, ' + fname +'!');
	return;
}
