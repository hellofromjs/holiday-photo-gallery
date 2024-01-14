import { Link } from "react-router-dom";
import UserOptions from "../UserOptions/UserOptions";

export default function Header() {
	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/" className="navbar-brand">
					Holiday Photos
				</Link>
				<UserOptions />
			</div>
		</nav>
	);
}
