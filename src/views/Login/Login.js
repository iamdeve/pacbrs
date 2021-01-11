import React from 'react';
import classes from './Login.module.css';
import Header from '../../components/Header';

function Login() {
	return (
		<div className='container-fluid'>
			<Header />
			<div className={classes.Main}></div>
		</div>
	);
}

export default Login;
