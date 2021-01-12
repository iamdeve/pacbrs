import axios from './axios';

export const signup = async (data) => {
	return new Promise((resolve, reject) => {
		axios
			.post('/auth/signup', data)
			.then((user) => {
				resolve(user);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};

export const login = async (data) => {
	return new Promise((resolve, reject) => {
		axios
			.post('/auth/login', data)
			.then((user) => {
				resolve(user);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};

export const deleteReservation = async (id) => {
	return new Promise((resolve, reject) => {
		axios
			.delete('/reservation/' + id)
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};
