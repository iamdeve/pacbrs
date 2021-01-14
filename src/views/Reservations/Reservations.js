import React from 'react';
import classes from './Reservations.module.css';
import Header from '../../components/Header';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import { getUserReservation, getAllBikes } from '../../context/fetch-service';
import { deleteReservation } from '../../context/user-service';
import { DataContext } from '../../context/DataContext';
import DialogAlert from '../../components/DialogAlert';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

function Reservations() {
	const history = useHistory();
	const { state, dispatch } = React.useContext(DataContext);
	const [showAlert, setShowAlert] = React.useState(false);
	const [status, setStatus] = React.useState('');
	const [msg, setMsg] = React.useState('');
	React.useEffect(() => {
		if (!state.isAuthenticated) {
			history.push('/');
		}

		const fetchBikes = async () => {
			let reservations = await getUserReservation();

			dispatch({
				type: 'SET_USER_RESERVATION',
				payload: reservations,
			});

			let allBikes = await getAllBikes();
			dispatch({
				type: 'SET_ALL_BIKES',
				payload: allBikes,
			});
		};
		fetchBikes();
	}, [history, state.isAuthenticated, state.reservations]);

	const deleteRes = async (id) => {
		try {
			let deleteRes = await deleteReservation(id);
			if (deleteRes.status === 200) {
				setStatus(deleteRes.status);
				setShowAlert(true);
				setMsg(deleteRes.data.message);
				let reservations = await getUserReservation();

				dispatch({
					type: 'SET_USER_RESERVATION',
					payload: reservations,
				});
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
	return (
		<div className='container-fluid'>
			<Header />
			<div className={classes.Main}>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell> Bike Label</TableCell>
								<TableCell> Bike Model</TableCell>
								<TableCell>Date</TableCell>
								<TableCell align='right'>Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{state.userReservations &&
								state.userReservations.map((row) => (
									<TableRow key={row._id}>
										<TableCell component='th' scope='row'>
											{state.allBikes.length > 0 && state.allBikes.filter((b) => b._id.toString() === row.bikeId.toString())[0].bikeLabel}
										</TableCell>
										<TableCell>{state.allBikes.length > 0 && state.allBikes.filter((b) => b._id.toString() === row.bikeId.toString())[0].bikeModel}</TableCell>
										<TableCell>{moment(row.date).format('YYYY-MM-DD,hh:mm A')}</TableCell>
										<TableCell align='right'>
											<IconButton onClick={() => deleteRes(row._id)}>
												<DeleteOutlineOutlinedIcon style={{ color: 'red' }} color='primary' />
											</IconButton>
										</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			{showAlert && (
				<DialogAlert heading={status ? 'Status Code ' + status : 'Something Went Wrong'} showAlert={showAlert} handleCloseAlert={handleCloseAlert}>
					{msg}
				</DialogAlert>
			)}
		</div>
	);
}

export default Reservations;
