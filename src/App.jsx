import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { useState } from 'react';

function App() {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
	// const user = localStorage.getItem('profile');
	return (
		<div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<Router>
					<Routes>
						<Route path="/" element={user ? <Home user={user.result} setUser={setUser} /> : <Navigate to="/auth" />} />
						<Route path="/auth" element={user ? <Navigate to="/" /> : <Auth setUser={setUser} />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
