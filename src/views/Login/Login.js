import React from 'react';
import classes from './Login.module.css';
import Header from '../../components/Header';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import DialogAlert from '../../components/DialogAlert';

import { login } from '../../context/user-service';

import { useHistory } from 'react-router-dom';

import { DataContext } from '../../context/DataContext';

function Login() {
	const history = useHistory();
	const { state, dispatch } = React.useContext(DataContext);
	const [showAlert, setShowAlert] = React.useState(false);
	const [status, setStatus] = React.useState('');
	const [msg, setMsg] = React.useState('');
	const [loginForm, setLoginForm] = React.useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginForm((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			let loginRes = await login({ email: loginForm.email, password: loginForm.password });

			if (loginRes.status === 200 || loginRes.status === 201) {
				dispatch({
					type: 'LOGIN',
					payload: loginRes.data.token,
				});

				history.push('/');
			}
		} catch (err) {
			setShowAlert(true);
			setStatus(err.response.status);
			if (err.response && err.response.data) {
				if (err.response.data.error) {
					if (err.response.data.error && err.response.data.error.raw) {
						setMsg(err.response.data.error.raw.message);
					} else {
						setMsg(err.response.data.error.message);
					}
				} else if (err.response.data.errors) {
					let errors = err.response.data.errors.map((err) => <li>{err.msg}</li>);
					setMsg(errors);
				} else {
					setMsg(err.response.data.message);
				}
			} else {
				setMsg(err.message);
			}
		}
	};
	const handleCloseAlert = () => {
		setShowAlert(false);
	};

	React.useEffect(() => {
		if (state.isAuthenticated) {
			history.push('/');
		}
	}, [state, history]);

	return (
		<div className='container-fluid'>
			<Header />
			<div className={classes.Main}>
				<div className={classes.FormContainer}>
					<h4>Please Log In</h4>
					<form onSubmit={handleSubmit}>
						<div className={classes.InputField}>
							<TextField type='email' margin='normal' name='email' value={loginForm.email} onChange={handleChange} label='Email' required />
						</div>
						<div className={classes.InputField}>
							<TextField type='password' margin='normal' name='password' value={loginForm.password} onChange={handleChange} label='Password' required />
						</div>
						<div className={classes.InputFieldSubmit}>
							<Button variant='contained' color='primary' type='submit'>
								Login
							</Button>
						</div>
					</form>
				</div>
			</div>
			{showAlert && (
				<DialogAlert heading={status ? 'Status Code ' + status : 'Something Went Wrong'} showAlert={showAlert} handleCloseAlert={handleCloseAlert}>
					{msg}
				</DialogAlert>
			)}
		</div>
	);
}

export default Login;
