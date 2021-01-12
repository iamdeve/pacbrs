import React from 'react';
import jwtDecode from 'jwt-decode';
export const initialState = {
	isAuthenticated: localStorage.getItem('pacbrsToken') ? true : false,
	user: getCurrentUser(),
	token: localStorage.getItem('pacbrsToken') ? localStorage.getItem('pacbrsToken') : null,
	bikes: [],
	userReservations: [],
	allBikes: [],
};

export const DataContext = React.createContext();

export const reducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			localStorage.setItem('pacbrsToken', action.payload);
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
		case 'SET_BIKES':
			return {
				...state,
				bikes: action.payload,
			};
		case 'SET_ALL_BIKES':
			return {
				...state,
				allBikes: action.payload,
			};

		case 'SET_USER_RESERVATION':
			return {
				...state,
				userReservations: action.payload,
			};

		case 'SET_USER': {
			return {
				...state,
				user: getCurrentUser(),
			};
		}

		default:
			return state;
	}
};

export function getCurrentUser() {
	try {
		const jwt = localStorage.getItem('pacbrsToken');
		return jwtDecode(jwt);
	} catch (e) {
		return null;
	}
}
