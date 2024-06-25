/*
  Web Development - Final Project
  Group One: Mamdoh Zeyad - Barra Arnoos - Ahmed sabagh 
*/

console.log("Connected");

const form = document.querySelector("#myform");
const msg = document.querySelector("#msg");

//event listener
form.addEventListener('submit', e=>{

	let messages = [];

	messages = nameValdition("#name",messages);
    messages = emailValdition("#email",messages,);
    messages = phoneValdition("#phone",messages);
	messages = dateOfBirthValdition("#Dateofbirth-month", "#Dateofbirth-day", "#Dateofbirth-year", messages);
	messages = nationalityValdition("#Nationality",messages);
	messages = passportValdition("#passport",messages);
	messages = addressValdition("#Address-country", "#Address-city", "#Address-street", messages);
	messages = ADValdition("#arrival-date-month", "#arrival-date-day", "#arrival-date-year",
							"#departure-date-month", "#departure-date-day", "#departure-date-year", messages);
	messages = passportValdition("#passport",messages);
	messages = personsValdition("#persons",messages);

	

	if(messages.length>0){
		msg.style.color = "red";
		//there is an error
		msg.innerHTML = "Issues found ["+ messages.length +"]: " + messages.join(', ') + "!!";
		//prevent submit
		e.preventDefault();
	}	
})

//Name Valdition

function nameValdition(selector,messages){
	const element = document.querySelector(selector).value.trim();
	if(element.length < 1){
		messages.push("Name is Empty");
	}
    else if(!element.match("[a-zA-Z]+")){
        messages.push("Name Contain Latters Only");
    }
    // else if(element.length > 30){
    //     messages.push("Name Contain 30 Latters Only");
    // }
	return messages;
}

//Date of Birth Valdition
function dateOfBirthValdition(selector1, selector2, selector3,messages){
	const element1 = document.querySelector(selector1).value.trim();
	const element2 = document.querySelector(selector2).value.trim();
	const element3 = document.querySelector(selector3).value.trim();

    if(element1.length < 1 || element1.length < 1 || element1.length < 1){
		messages.push("Complete Your Date Of Birth");
	}
	return messages;
}

//Nationality Valdition
function nationalityValdition(selector,messages){
	const element = document.querySelector(selector).value.trim();
	if(element.length < 1){
		messages.push("Nationality is Empty");
	}
    else if(!element.match("[A-Za-z]+")){
        messages.push("Nationality Contain Latters Only");
    }
    // else if(element.length > 30){
    //     messages.push("Name Contain 30 Latters Only");
    // }
	return messages;
}

//Passport Valdition
function passportValdition(selector,messages){
	const element = document.querySelector(selector).value.trim();
	if(element.length < 1){
		messages.push("Passport is Empty");
	}
	return messages;
}

//Address Valdition
function addressValdition(selector1, selector2, selector3,messages){
	const element1 = document.querySelector(selector1).value.trim();
	const element2 = document.querySelector(selector2).value.trim();
	const element3 = document.querySelector(selector3).value.trim();

    if(element1.length < 1 || element1.length < 1 || element1.length < 1){
		messages.push("Complete Your Address");
	}
	return messages;
}

//Phone Valdition
function phoneValdition(selector,messages){
	const element = document.querySelector(selector).value.trim();
    if(element.length < 1){
		messages.push("Phone is Empty");
	}
	else if(!element.match("[0-9]{10}")){
		messages.push("The Phone with wrong fromat");
	}
	return messages;
}

//Email Valdition
function emailValdition(selector,messages){
	const element = document.querySelector(selector).value.trim();
    if(element.length < 1){
		messages.push("Email is Empty");
	}
	else if(!element.match("[a-z0-9]+@[a-z]+\.[a-z]{2,4}")){
		messages.push("The Email with wrong fromat");
	}
	return messages;
}

//Arrival & Departure Date Valdition
function ADValdition(aMonth, aDay, aYear, dMonth, dDay, dYear, messages){
	const aMonthe = document.querySelector(aMonth).value.trim();
	const aDaye = document.querySelector(aDay).value.trim();
	const aYeare = document.querySelector(aYear).value.trim();

	const dMonthe = document.querySelector(dMonth).value.trim();
	const dDaye = document.querySelector(dDay).value.trim();
	const dYeare = document.querySelector(dYear).value.trim();

    if(aMonthe.length < 1 || aDaye.length < 1 || aYeare.length < 1){
		messages.push("Complete Your Arrival Date");
	}
	if(dMonthe.length < 1 || dDaye.length < 1 || dYeare.length < 1){
		messages.push("Complete Your Departure Date");
	}

	//Check if the Arrival more than the Departure date
	else if(aMonthe == dMonthe && aYeare == dYeare && aDaye >= dDaye){
		messages.push("Departure Date Must be After Arrival Date");
	}
	else if(aYeare > dYeare){
		messages.push("Departure Date Must be After Arrival Date");
	}
	else if(aMonthe > dMonthe){
		if(dYeare == aYeare){
			messages.push("Departure Date Must be After Arrival Date");
		}
	}
	return messages;
}

function personsValdition(selector,messages){
	const element = document.querySelector(selector).value.trim();
	if(element.length < 1){
		messages.push("Number of Persons is Empty");
	}
	return messages;
}

//Upload Button Style
const actualBtn = document.getElementById('myfile');
const fileChosen = document.getElementById('file-chosen');
actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
});
