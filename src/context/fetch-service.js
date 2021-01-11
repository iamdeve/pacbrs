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
