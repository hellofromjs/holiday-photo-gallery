export const isEmailValid = (value) => {
	if (!value.includes("@")) {
		return "Invalid email";
	}

	return null;
};

export const isPasswordValid = (value) => {
	if (value.length < 6) {
		return "Password must be at least 6 characters long";
	}

	return null;
};

export const isUrlValid = (value) => {
	if (!value.startsWith("http")) {
		return "URL must start with 'http...'";
	}

	return null;
};

export const isNameValid = (value) => {
	if (!(value.length >= 3 && value.length <= 12)) {
		return "Name must be between 3 and 12 characters long";
	}

	return null;
};