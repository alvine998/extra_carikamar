import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import React, { Component } from 'react';
import logo from '../../assets/images/carikamar/Biru_Full_Vertikal.png';
import mail from '../../assets/images/verification.jpg';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Timer from '../../components/Timer';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: '#299BD7'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		backgroundColor: '#299BD7'
	},
	image: {
		width: 200,
		height: 200
	},
	imageMail: {
		width: 200,
		height: 200
	}
}));

const VerificationMail = () => {
	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<img alt="" src={logo} className={classes.image} />
				<img alt="Mail" src={mail} className={classes.imageMail} />
				<div>
					<h4 style={{ fontWeight: 'bold', color: '#299BD7', textAlign: 'center' }}>
						Silahkan Cek Email Kamu Untuk Verifikasi
					</h4>
					<form action="/reset-password" className={classes.form} noValidate>
						<Timer />
						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							Kirim Ulang
						</Button>
						<Link href="/verification-phone" variant="body2">
							Gunakan cara lain
						</Link>
					</form>
				</div>
				<Link href="/forget-password" variant="body2">
					Kembali
				</Link>
			</div>
		</Container>
	);
};

export default VerificationMail;
