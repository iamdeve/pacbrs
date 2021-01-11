import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

function DialogAlert(props) {
	return (
		<Dialog open={props.showAlert} onClose={props.handleCloseAlert} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
			<DialogTitle id='alert-dialog-title'>{props.heading}</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>{props.children}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={props.handleCloseAlert} color='primary'>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default DialogAlert;
