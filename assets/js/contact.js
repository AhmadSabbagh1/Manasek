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
    messages = messageValdition("#message",messages);

	if(messages.length>0){
		//there is an error
		msg.style.color = "red";
		msg.innerHTML = "Issues found ["+ messages.length +"]: " + messages.join(', ') + "!!";
		//prevent submit
		e.preventDefault();
	}	
})

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

function messageValdition(selector,messages){
	const element = document.querySelector(selector).value.trim();
    if(element.length < 1){
		messages.push("Mesaage is Empty");
	}
	// else if(element.length > 250){
	// 	messages.push("Mesaage Contain 250 Latters Only");
	// }
	return messages;
}