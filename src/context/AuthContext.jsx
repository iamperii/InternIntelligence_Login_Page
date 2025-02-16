import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../config/firebase';
import {
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	createUserWithEmailAndPassword,
} from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const signup = async (email, password) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.error('Signup failed:', error.message);
		}
	};

	const login = async (email, password) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.error('Login failed:', error.message);
		}
	};

	return (
		<AuthContext.Provider value={{ user, signup, login, loading }}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
