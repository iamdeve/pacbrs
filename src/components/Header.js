import React from 'react';
import classes from './Header.module.css';
import Logo from '../assets/logo.jpeg';
import { Link } from 'react-router-dom';
function Header() {
	return (
		<div className={classes.Header}>
			<Link to='/' className={['btn', classes.BtnCustom].join(' ')}>
				<img className={classes.HeaderImg} src={Logo} alt='Logo' />
			</Link>
			<div className={classes.Menu}>
				<ul>
					<li>
						<Link to='/login' className={['btn', classes.BtnCustom].join(' ')}>
							Login
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
