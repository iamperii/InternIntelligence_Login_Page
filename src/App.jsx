import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/forgot-password" element={<SignUp />} />
			</Routes>
		</>
	);
}

export default App;
