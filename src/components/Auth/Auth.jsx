import React, { useState } from 'react';
import { signup, signin } from '../../api/auth';

function Auth({ setUser }) {
	const [isSignUp, setSignUp] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleShow = (event) => {
		event.target.name === 'password' ? setShowPassword(!showPassword) : setShowConfirmPassword(!showConfirmPassword);
	};

	const switchMode = () => {
		setSignUp(!isSignUp);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (isSignUp) {
			// signUp action
			const { data, status } = await signup(formData);
			if (!(status === 200)) {
				alert(data.message);
			} else {
				localStorage.setItem('profile', JSON.stringify(data));
				setUser(data);
			}
		} else {
			// signIn action;
			const { data, status } = await signin(formData);
			if (!(status === 200)) {
				alert(data.message);
			} else {
				localStorage.setItem('profile', JSON.stringify(data));
				setUser(data);
			}
		}
	};

	return (
		<div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
			<div className="w-full space-y-8 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<span className="text-white mt-4 flex items-center justify-center">
					{isSignUp ? 'Sign up for an account' : 'Login into your account'}
				</span>
				<form className="flex items-center justify-center flex-col" onSubmit={handleSubmit}>
					<div className="flex flex-col w-[75%]">
						{isSignUp && (
							<input
								className="mb-5 rounded-md"
								name="firstName"
								type="text"
								placeholder="First Name"
								onChange={handleChange}
							/>
						)}
						{isSignUp && (
							<input
								className="mb-5 rounded-md"
								name="lastName"
								type="text"
								placeholder="Last Name"
								onChange={handleChange}
							/>
						)}
						<input className="mb-5 rounded-md" name="email" type="email" placeholder="email" onChange={handleChange} />
						<div className="flex flex-row  mb-5">
							<input
								className="w-[90%] rounded-md"
								name="password"
								type={showPassword ? 'text' : 'password'}
								placeholder="password"
								onChange={handleChange}
							/>
							<input
								className="text-white cursor-pointer text-sm"
								type="button"
								value={showPassword ? 'hide' : 'show'}
								name="password"
								onClick={handleShow}
							/>
						</div>
						{isSignUp && (
							<div className="flex flex-row  mb-5">
								<input
									className="w-[90%] rounded-md"
									name="confirmPassword"
									type={showConfirmPassword ? 'text' : 'password'}
									placeholder="confirm password"
									onChange={handleChange}
								/>
								<input
									className="text-white cursor-pointer text-sm"
									type="button"
									value={showConfirmPassword ? 'hide' : 'show'}
									name="confirmPassword"
									onClick={handleShow}
								/>
							</div>
						)}
					</div>
					<span className="text-white sm-text:[20px] text-[12px] cursor-pointer" onClick={switchMode}>
						{isSignUp ? `Already have one? Signin` : `Don't have one? Signup`}
					</span>
					<button
						className="mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						type="submit"
					>
						{isSignUp ? 'Signup' : 'Login'}
					</button>
				</form>
			</div>
		</div>
	);
}

export default Auth;
