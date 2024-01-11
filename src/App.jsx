import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Reset from './components/Reset/Reset';
import Home from "./components/Home/Home";

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
  )
}

export default App
