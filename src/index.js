import Form from "presa-form-validation";

function startup() {
	const bod = document.querySelector("body");
	bod.textContent = "test";
	//const config = getConfig();
	//const myForm = new Form(config);
}

function getConfig() {
	//identifier - type
	const inputs = [
		["email", "email"],
		["country", "text"],
		["zip code", "number"],
		["password", "password"],
		["password confirmation", "password"],
	];

	const formOptions = {
		customPopup: true,
		jsValidate: true,
	};
	const inputOptions = {
		groupClass: "testGroupClass",
		validationRequirements: {
			required: true,
			maxlen: 40,
			minlen: 8,
		},
		secondaryProperties: {
			autocomplete: true,
		},
	};
}

startup();
