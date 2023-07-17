import Form from "presa-form-validation";

function startup() {
	const bod = document.querySelector("body");
	bod.textContent = "test";
	const config = getConfig();
	const myForm = new Form(config);

	bod.appendChild(myForm.getElement());
}

function getConfig() {
	//identifier - type - placeholder
	const inputs = [
		["email", "email", "joe@mama.com"],
		["country", "text", "Joemamistan"],
		["zip code", "number", "69420"],
		["password", "password"],
		["password confirmation", "password"],
		["submit", "submit"],
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
			customMsgs: {},
		},
		secondaryProperties: {
			autocomplete: true,
		},
	};

	const inputList = inputs.map((params, index) => {
		const newOpts = { ...inputOptions };

		if (index === inputs.length - 1) newOpts.validationRequirements = {};

		newOpts.type = params[1];

		if (index !== inputs.length - 1)
			newOpts.label = params[0]
				.split(" ")
				.map((word) => {
					const chars = word.split("");
					chars[0] = chars[0].toUpperCase();
					return chars.join("");
				})
				.join(" ");
		newOpts.id = params[0].split(" ").join("-");
		newOpts.name = params[0]
			.split(" ")
			.map((word, index) => {
				if (index === 0) return word;
				const chars = word.split("");
				chars[0] = chars[0].toUpperCase();
				return chars.join("");
			})
			.join("");

		newOpts.secondaryProperties.placeholder = params[2];

		return { type: "input", options: newOpts };
	});

	// inputList.push([
	// 	{
	// 		type: "input",
	// 		options: {
	// 			type: "submit",
	// 		},
	// 	},
	// ]);

	return {
		inputList: inputList,
		title: { title: "Test Form", titleType: "h2" },
		formOptions: formOptions,
	};
}

startup();
