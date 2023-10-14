import axios from 'axios';

const API = axios.create({ baseURL: `${import.meta.env.VITE_PUBLIC_BAE_URL}` });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('profile')) {
		req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
	}
	return req;
});

export const signin = async (formData) => {
	let resp;
	await API.post('/users/signin', formData)
		.then((response) => (resp = response))
		.catch((error) => (resp = error.response));
	return resp;
};

export const signup = async (formData) => {
	let resp;
	await API.post('/users/signup', formData)
		.then((response) => (resp = response))
		.catch((error) => (resp = error.response));
	return resp;
};
