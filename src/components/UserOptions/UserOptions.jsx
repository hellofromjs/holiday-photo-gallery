import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import * as userService from "../../services/user";

export default function UserOptions() {
	const [userData, setUserData] = useState({});
	const [user, loading, _error] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		async function init() {
			if (loading) return;
			if (!user) navigate("/");
			setUserData(await userService.getUserData());
		}

		init();
	}, [user, loading]);

	return (
		<>
			{user && (
				<div className="btn-group">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						{userData?.name}
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						<li className="dropdown-item">
							<a className="dropdown-item" href="#">
								{auth?.currentUser?.email}
							</a>
						</li>
						<li className="dropdown-item" onClick={userService.logout}>
							<a className="dropdown-item" href="#">
								Atsijungti
							</a>
						</li>
					</ul>
				</div>
			)}
		</>
	);
}
