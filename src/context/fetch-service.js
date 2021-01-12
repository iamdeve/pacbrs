import axios from './axios';

export const getBikes = async () => {
	return new Promise((resolve, reject) => {
		axios
			.get('/bike/allBikes')
			.then((bikes) => {
				resolve(bikes.data.bikes);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};

export const getAllBikes = async () => {
	return new Promise((resolve, reject) => {
		axios
			.get('/bike/bikes')
			.then((bikes) => {
				resolve(bikes.data.allBikes);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};

export const getUserReservation = async () => {
	return new Promise((resolve, reject) => {
		axios
			.get('/reservation/getReservation')
			.then((reserve) => {
				resolve(reserve.data.reservations);
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
};
