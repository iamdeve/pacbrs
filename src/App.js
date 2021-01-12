import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Reservation from './views/Reservations/Reservations';
import { DataContext, reducer, initialState } from './context/DataContext';
function App() {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return (
		<div className='app'>
			<DataContext.Provider
				value={{
					state,
					dispatch,
				}}>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/reservations' component={Reservation} />
					<Route exact path='/login' component={Login} />
				</Switch>
			</DataContext.Provider>
		</div>
	);
}
export default App;
