import React from 'react';
import classes from './Home.module.css';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { getBikes } from '../../context/fetch-service';
import { reserve } from '../../context/reservation-service';
import { signup } from '../../context/user-service';
import { DataContext } from '../../context/DataContext';
import DialogAlert from '../../components/DialogAlert';
import Header from '../../components/Header';
import { CircularProgress } from '@material-ui/core';

function Home() {
	const { state, dispatch } = React.useContext(DataContext);
	const [showAlert, setShowAlert] = React.useState(false);
	const [status, setStatus] = React.useState('');
	const [msg, setMsg] = React.useState('');
	const [loading, setLoading] = React.useState(false);
	const [reservationForm, setReservationForm] = React.useState({
		fullName: '',
		email: '',
		password: '',
		bikeId: '',
		date: new Date(),
		time: new Date(),
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setReservationForm((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};
	const handleDateChange = (date) => {
		setReservationForm((prevState) => {
			return {
				...prevState,
				date: date,
			};
		});
	};
	const handleTimeChange = (date) => {
		setReservationForm((prevState) => {
			return {
				...prevState,
				time: date,
			};
		});
	};

	let getSteps;
	if (state.isAuthenticated) {
		getSteps = ['Book a Bike'];
	} else {
		getSteps = ['Credential', 'Book a Bike'];
	}

	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps;

	const handleNext = async () => {
		if (state.isAuthenticated) {
			if (activeStep === 0) {
				setLoading(true);
				try {
					console.log(reservationForm);

					let date =
						new Date(reservationForm.date).getMonth() +
						1 +
						'/' +
						new Date(reservationForm.date).getDate() +
						'/' +
						new Date(reservationForm.date).getFullYear() +
						' ' +
						new Date(reservationForm.date).getHours() +
						':' +
						new Date(reservationForm.date).getMinutes() +
						':' +
						new Date(reservationForm.date).getSeconds();
					console.log(date);

					console.log(state.user);
					let reservation = await reserve({
						bikeId: reservationForm.bikeId,
						date: reservationForm.date,
						userId: state.user.id,
						userEmail: state.user.email,
					});

					if (reservation.status === 200) {
						let bikes = await getBikes();

						dispatch({
							type: 'SET_BIKES',
							payload: bikes,
						});
						setStatus(reservation.status);
						setShowAlert(true);
						setLoading(false);
						setMsg(reservation.data.message);
					}
				} catch (err) {
					console.log(err);
					console.log(err.response.status);
					setShowAlert(true);
					setLoading(false);
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
			}
		} else {
			if (activeStep === 1) {
				setLoading(true);
				try {
					console.log(reservationForm);

					let date =
						new Date(reservationForm.date).getMonth() +
						1 +
						'/' +
						new Date(reservationForm.date).getDate() +
						'/' +
						new Date(reservationForm.date).getFullYear() +
						' ' +
						new Date(reservationForm.date).getHours() +
						':' +
						new Date(reservationForm.date).getMinutes() +
						':' +
						new Date(reservationForm.date).getSeconds();
					console.log(date);

					let signupRes = await signup({ fullName: reservationForm.fullName, email: reservationForm.email, password: reservationForm.password });

					if (signupRes.status === 200 || signupRes.status === 201) {
						let reservation = await reserve({
							bikeId: reservationForm.bikeId,
							date: reservationForm.date,
							userEmail: reservationForm.email,
							pass: signupRes.data.pass,
						});

						if (reservation.status === 200) {
							let bikes = await getBikes();

							dispatch({
								type: 'SET_BIKES',
								payload: bikes,
							});
							setStatus(reservation.status);
							setShowAlert(true);
							setLoading(false);
							setMsg(reservation.data.message);
						}
					}
					return;
				} catch (err) {
					console.log(err);
					console.log(err.response.status);

					if (err.response && err.response.data) {
						if (err.response.data.error) {
							setShowAlert(true);
							setStatus(err.response.status);
							if (err.response.data.error.message) {
								if (err.response.data.error && err.response.data.error.raw) {
									setMsg(err.response.data.error.raw.message);
								} else {
									setMsg(err.response.data.error.message);
								}
							} else {
								setMsg(err.response.data.error);
							}
						} else if (err.response.data.errors) {
							setShowAlert(true);
							setStatus(err.response.status);
							let errors = err.response.data.errors.map((err) => <li>{err.msg}</li>);
							setMsg(errors);
						} else {
							if (err.response.data.message === 'Email already registered') {
								try {
									let reservation = await reserve({
										bikeId: reservationForm.bikeId,
										date: reservationForm.date,
										userEmail: reservationForm.email,
									});

									if (reservation.status === 200) {
										let bikes = await getBikes();

										dispatch({
											type: 'SET_BIKES',
											payload: bikes,
										});
										setStatus(reservation.status);
										setShowAlert(true);
										setMsg(reservation.data.message);
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
							} else {
								setShowAlert(true);
								setStatus(err.response.status);
								setMsg(err.response.data.message);
							}
						}
					} else {
						setShowAlert(true);
						setStatus(err.response.status);
						setMsg(err.message);
					}
					setLoading(false);
				}
			}
		}
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
		setReservationForm({
			fullName: '',
			email: '',
			password: '',
			bikeId: '',
			date: new Date(),
			time: new Date(),
		});
	};

	React.useEffect(() => {
		const fetchBikes = async () => {
			let bikes = await getBikes();
			dispatch({
				type: 'SET_BIKES',
				payload: bikes,
			});
			dispatch({
				type: 'SET_USER',
			});
		};
		fetchBikes();
	}, [dispatch]);

	const handleCloseAlert = () => {
		setShowAlert(false);
	};

	let getStepContent;
	if (state.isAuthenticated) {
		getStepContent = [
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Grid container justify='center'>
					<div className={classes.InputField}>
						<FormControl margin='normal' className={classes.formControl}>
							<InputLabel id='demo-simple-select-label'>Bike</InputLabel>
							<Select labelId='demo-simple-select-label' id='demo-simple-select' name='bikeId' value={reservationForm.bikeId} onChange={handleChange}>
								{state.bikes &&
									state.bikes.map((bike, id) => (
										<MenuItem key={id} value={bike._id}>
											{bike.bikeModel}
										</MenuItem>
									))}
							</Select>
						</FormControl>
					</div>
					<div className={classes.InputField}>
						<KeyboardDatePicker
							margin='normal'
							id='date-picker-dialog'
							label='Date'
							name='date'
							format='MM/dd/yyyy'
							disablePast
							value={reservationForm.date}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change date',
							}}
						/>
					</div>
					<div className={classes.InputField}>
						<KeyboardTimePicker
							margin='normal'
							id='time-picker'
							label='Time'
							name='time'
							value={reservationForm.time}
							onChange={handleTimeChange}
							KeyboardButtonProps={{
								'aria-label': 'change time',
							}}
						/>
					</div>
				</Grid>
			</MuiPickersUtilsProvider>,
		];
	} else {
		getStepContent = [
			<Grid container justify='center'>
				<div className={classes.InputField}>
					<TextField margin='normal' name='fullName' value={reservationForm.fullName} onChange={handleChange} label='Full Name' />
				</div>
				<div className={classes.InputField}>
					<TextField margin='normal' name='email' value={reservationForm.email} onChange={handleChange} label='Email' />
				</div>
				{/* <div className={classes.InputField}>
					<TextField type='password' margin='normal' name='password' value={reservationForm.password} onChange={handleChange} label='Password' />
				</div> */}
			</Grid>,
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Grid container justify='center'>
					<div className={classes.InputField}>
						<FormControl margin='normal' className={classes.formControl}>
							<InputLabel id='demo-simple-select-label'>Bike</InputLabel>
							<Select labelId='demo-simple-select-label' id='demo-simple-select' name='bikeId' value={reservationForm.bikeId} onChange={handleChange}>
								{state.bikes &&
									state.bikes.map((bike, id) => (
										<MenuItem key={id} value={bike._id}>
											{bike.bikeModel}
										</MenuItem>
									))}
							</Select>
						</FormControl>
					</div>
					<div className={classes.InputField}>
						<KeyboardDatePicker
							margin='normal'
							id='date-picker-dialog'
							label='Date'
							name='date'
							format='MM/dd/yyyy'
							disablePast
							value={reservationForm.date}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change date',
							}}
						/>
					</div>
					<div className={classes.InputField}>
						<KeyboardTimePicker
							margin='normal'
							id='time-picker'
							label='Time'
							name='time'
							value={reservationForm.time}
							onChange={handleTimeChange}
							KeyboardButtonProps={{
								'aria-label': 'change time',
							}}
						/>
					</div>
				</Grid>
			</MuiPickersUtilsProvider>,
		];
	}

	let activeStepBtn;

	if (state.isAuthenticated) {
		if (activeStep === 0) {
			activeStepBtn = (
				// <Button disabled={reservationForm.bikeId === '' || reservationForm.date === ''} variant='contained' color='primary' onClick={handleNext}>
				// 	{activeStep === steps.length - 1 ? 'Book Now' : 'Next'}
				// </Button>
				<div className={classes.wrapper}>
					<Button variant='contained' color='primary' disabled={loading || reservationForm.bikeId === '' || reservationForm.date === ''} onClick={handleNext}>
						{activeStep === steps.length - 1 ? 'Book Now' : 'Next'}
					</Button>
					{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
				</div>
			);
		}
	} else {
		if (activeStep === 0) {
			activeStepBtn = (
				<Button disabled={reservationForm.email === ''} variant='contained' color='primary' onClick={handleNext}>
					{activeStep === steps.length - 1 ? 'Book Now' : 'Next'}
				</Button>
			);
		} else if (activeStep === 1) {
			activeStepBtn = (
				// <Button disabled={reservationForm.bikeId === '' || reservationForm.date === ''} variant='contained' color='primary' onClick={handleNext}>
				// 	{activeStep === steps.length - 1 ? 'Book Now' : 'Next'}
				// </Button>

				<div className={classes.wrapper}>
					<Button variant='contained' color='primary' disabled={loading || reservationForm.bikeId === '' || reservationForm.date === ''} onClick={handleNext}>
						{activeStep === steps.length - 1 ? 'Book Now' : 'Next'}
					</Button>
					{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
				</div>
			);
		}
	}

	return (
		<div className='container-fluid'>
			<Header />
			<div className={classes.Main}>
				<h3 className={['text-center', classes.HomeHeading].join(' ')}>Welcome to Plano Athletic Club Bike Reservation System</h3>
				<p className={['text-center', classes.HomeSubHeading].join(' ')}>Please select your date/time of reservation, and your bike number</p>
				<div className={classes.FormContainer}>
					<Stepper activeStep={activeStep} alternativeLabel>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<div>
						{activeStep === steps.length ? (
							// <div className={['mt-5 mb-5', classes.StepperBtnGroup].join(' ')}>
							// 	<Typography className={classes.instructions}>All steps completed</Typography>
							// 	<Button onClick={handleReset}>Reset</Button>
							// </div>
							<div>{handleReset()}</div>
						) : (
							<div>
								<div className={classes.StepContext}>{getStepContent[activeStep]}</div>
								<div className={['mt-5 mb-5', classes.StepperBtnGroup].join(' ')}>
									<Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
										Back
									</Button>
									{activeStepBtn}
								</div>
							</div>
						)}
					</div>
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

export default Home;
