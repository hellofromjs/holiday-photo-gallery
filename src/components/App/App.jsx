import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Reset from "../Auth/Reset/Reset";
import Home from "../Home/Home";

function App() {
	return (
		<div>
			<Router basename={import.meta.env.VITE_REPO_NAME}>
				<Header />
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/password-reset" element={<Reset />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
