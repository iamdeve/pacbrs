import React from 'react';
import classes from './Header.module.css';
import Logo from '../assets/logo.jpeg';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
function Header() {
	const { state, dispatch } = React.useContext(DataContext);

	const [showMenu, setShowMenu] = React.useState(false);

	return (
		<div className={classes.Header}>
			<Link to='/' className={['btn', classes.BtnCustom].join(' ')}>
				<img className={classes.HeaderImg} src={Logo} alt='Logo' />
			</Link>
			<div className={classes.Menu}>
				<ul>
					<li>
						{state.isAuthenticated ? (
							<>
								<Link to='reservations' className={['btn', classes.BtnCustom].join(' ')}>
									Reservations
								</Link>
								<Link onClick={() => dispatch({ type: 'LOGOUT' })} className={['btn', classes.BtnCustom].join(' ')}>
									Logout
								</Link>
							</>
						) : (
							<Link to='/login' className={['btn', classes.BtnCustom].join(' ')}>
								Login
							</Link>
						)}
					</li>
				</ul>
			</div>
			<div className={classes.MobileMenuContainer}>
				<IconButton onClick={() => setShowMenu(!showMenu)}>
					<MenuIcon />
				</IconButton>
				{showMenu && (
					<div className={classes.MobileMenu}>
						<div className={['text-right', classes.Cancel].join('')}>
							<IconButton onClick={() => setShowMenu(!showMenu)}>
								<CancelIcon style={{ color: '#fff' }} />
							</IconButton>
						</div>
						<ul>
							<li>
								{state.isAuthenticated ? (
									<>
										<Link to='reservations' className={['btn', classes.BtnCustom, classes.BtnCustomMobile].join(' ')}>
											Reservations
										</Link>
										<Link onClick={() => dispatch({ type: 'LOGOUT' })} className={['btn', classes.BtnCustom, classes.BtnCustomMobile].join(' ')}>
											Logout
										</Link>
									</>
								) : (
									<Link to='/login' className={['btn', classes.BtnCustom, classes.BtnCustomMobile].join(' ')}>
										Log In
									</Link>
								)}
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}

export default Header;
