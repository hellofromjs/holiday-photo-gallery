export default function Alert({ text, status = "primary" }) {
	return (
		<div className={`alert alert-${status}`} role="alert">
			{text}
		</div>
	);
}
