import { useEffect, useState } from "react";

export default function useFormElementValidation(name, value, validation, onChange) {

	const [isError, setIsError] = useState(true);
	const [errorMessage, setErrorMessage] = useState();

	function handleChanged(e) {
		validate(name, e.target.value);
	}

	useEffect(() => {
		validate(name, value);
	}, [value]);

	function validate(name, value) {
		if (value === undefined) return;

		const result = validation(value);
		let isValid = undefined;

		if (result === null) {
			isValid = true;
		} else {
			isValid = false;
			setErrorMessage(result);
		}

		onChange({ name, value }, isValid);
		setIsError(isValid);
	}

	return [isError, handleChanged, errorMessage];
}