import axios from 'axios';
axios.defaults.headers.common['authorization'] = `${localStorage.getItem('pacbrsToken')}`;
const instance = axios.create({
	// baseURL: 'http://localhost:3001/api/',
	baseURL: 'https://pacbrs.herokuapp.com/api/',
});
export default instance;
