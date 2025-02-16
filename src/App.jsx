import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';

function App() {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/forgot-password" element={<SignUp />} />
				</Routes>
			</AuthProvider>
		</>
	);
}

export default App;
