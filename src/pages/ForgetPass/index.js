import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import React, { Component, useState } from 'react';
import logo from '../../assets/images/carikamar/Biru_Full_Vertikal.png';
import mail from '../../assets/images/mail.jpg';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

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
		width: 300,
		height: 200
	}
}));

const ForgetPass = () => {
	const classes = useStyles();
	const [email, setMail] = useState("");

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<img alt="" src={logo} className={classes.image} />
				<img alt="Mail" src={mail} className={classes.imageMail} />
				<div>
					<h4 style={{ fontWeight: 'bold', color: '#299BD7' }}>Masukkan Alamat Email Kamu</h4>
					<form action="/verification-email" className={classes.form} noValidate>
						<TextField
							autoComplete="fname"
							name="email"
							variant="outlined"
							required
							fullWidth
							value={email}
							onChange={e => setMail(e.target.value)}
							id="email"
							label="Email"
							autoFocus
						/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Kirim
							</Button>
					</form>
				</div>
				<Link href="/" variant="body2">
					Kembali
				</Link>
			</div>
		</Container>
	);
};

export default ForgetPass;
