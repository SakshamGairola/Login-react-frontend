import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ user, setUser }) {
	const navigate = useNavigate();
	const handClick = () => {
		localStorage.removeItem('profile');
		setUser(null);
	};
	return (
		<div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${user.name}`}</h5>
					</a>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`Contat: ${user.email}`}</p>
					<a
						href="#"
						onClick={handClick}
						className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
					>
						Logout
						<svg
							className="w-3.5 h-3.5 ml-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Home;
