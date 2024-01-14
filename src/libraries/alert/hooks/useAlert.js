import { useEffect, useRef, useState } from "react";

export default function useAlert() {
	const [isOpen, setIsOpen] = useState(false)

	return [setIsOpen]
}

