import React from 'react';

export const initialState = {
	isAuthenticated: localStorage.getItem('pacbrsToken') ? true : false,
	user: localStorage.getItem('pacbrsUser') ? JSON.parse(localStorage.getItem('pacbrsUser')) : null,
	token: localStorage.getItem('pacbrsToken') ? localStorage.getItem('pacbrsToken') : null,
	bikes: [],
};
export const DataContext = React.createContext();

export const reducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			localStorage.setItem('pacbrsToken', action.payload.token);
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.user,
				token: action.payload.token,
			};
		case 'LOGOUT':
			localStorage.removeItem('pacbrsToken');
			return {
				...state,
				isAuthenticated: false,
				user: null,
				token: null,
			};
		case 'SET_USER':
			localStorage.setItem('pacbrsUser', JSON.stringify(action.payload));
			return {
				...state,
				user: action.payload,
			};
		case 'SET_BIKES':
			return {
				...state,
				bikes: action.payload,
			};

		default:
			return state;
	}
};
