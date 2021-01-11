import axios from './axios';

export const reserve = async (data) => {
	return new Promise((resolve, reject) => {
		axios
			.post('/reservation/reserve', data)
			.then((reservation) => {
				resolve(reservation);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};
