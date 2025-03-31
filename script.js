//your JS code here. If required.

window.addEventListener("DOMContentLoaded",()=>{
	let name = localStorage.getItem("username");
	let password = localStorage.getItem("password");
	if(name && password){
      document.querySelector("#existing").style.display="block"
	}
});



document.querySelector("#existing").addEventListener("click",()=>{
	let name = localStorage.getItem("username");
	alert(`Logged in as ${name}`)
})

let btn = document.querySelector("#submit");

btn.addEventListener("click",(e)=>{
	// e.preventDefault();
	// alert("wokr")
	let checkbox = document.querySelector("#checkbox");
	let name = document.querySelector("#username");
	let password = document.querySelector("#password");

	if((checkbox.checked) && (name.value) && (password.value)){
       localStorage.setItem("username",name.value);
       localStorage.setItem("password",password.value);
		alert(`Logged in as ${name.value}`);
		
	}

	else if(!(checkbox.checked) && (name.value) && (password.value)){
        localStorage.removeItem("username");
		localStorage.removeItem("password");
		document.querySelector("#existing").style.display="none"
		alert(`Logged in as ${name.value}`);
		
	}
})