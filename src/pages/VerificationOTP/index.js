import React, { Fragment, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/Security';
import Typography from '@material-ui/core/Typography';
import Eyeslash from '@material-ui/icons/VisibilityOff';
import Eyeopen from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// import firebase from './firebase';

const VerificationOTP = () => {
	const [ showPass, setShowPass ] = useState(false);
	const togglePassVisibility = () => {
		setShowPass(showPass ? false : true);
	};

	function Copyright() {
		return (
			<Typography variant="body2" color="textSecondary" align="center">
				{'Copyright © '}
				<Link color="inherit" href="https://carikamar.id">
					CariKamar.id
				</Link>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		);
	}

	const useStyles = makeStyles((theme) => ({
		root: {
			height: '100vh'
		},
		image: {
			backgroundImage: 'url(https://source.unsplash.com/random)',
			backgroundRepeat: 'no-repeat',
			backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
			backgroundSize: 'cover',
			backgroundPosition: 'center'
		},
		paper: {
			margin: theme.spacing(8, 4),
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
			marginTop: theme.spacing(1)
		},
		submit: {
			margin: theme.spacing(3, 0, 2)
		}
	}));

	const classes = useStyles();
	const [ phone, setPhone ] = useState('');
	const [ otp, setOtp ] = useState('');
	const codeNation = [
		{ code: '+62' },
		{ code: '+63' },
		{ code: '+82' },
		{ code: '+81' },
		{ code: '+55' },
		{ code: '+53' }
	];

	// const handleClick = () => {
	// 	let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
	// 	let number = '+6281294262257';
	// 	firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function(e){
	// 		let code = prompt('enter the otp', '');
	// 		if(code == null) return;
	// 		e.confirm(code).then(function(result){
	// 			console.log(result.user,'user');
	// 			document.querySelector('label').textContent= result.user.phoneNumber + "Number Verified";

	// 		}).catch((err) => {
	// 			console.log(err)
	// 		})
	// 	})
	// };

	return (
		<Fragment>
			<Grid container component="main" className={classes.root}>
				<CssBaseline />
				<Grid item xs={false} sm={4} md={7} className={classes.image} />
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon style={{ backgroundColor: '#299BD7' }} />
						</Avatar>
						<Typography component="h1" variant="h5">
							Dengan Nomor Ponsel
						</Typography>
						<form action="/reset-password" className={classes.form} noValidate>
							{/* <Autocomplete
								id="combo-box-demo"
                                options={codeNation}
                                required
								getOptionLabel={(option) => option.code}
								style={{ width: 50 }}
								renderInput={(params) => <TextField {...params} label="Code" variant="outlined" />}
							/> */}
							<TextField
								variant="outlined"
								margin="normal"
                                required
                                fullWidth
								onChange={e => setPhone(e.target.value)}
								id="phone"
								value={phone}
								label="No Ponsel"
								name="phone"
								autoComplete="phone"
								autoFocus
							/>
							<Button
								type="button"
								// onClick={handleClick}
								fullWidth
								variant="contained"
								color="primary"
								style={{ backgroundColor: '#299BD7', width: 120}}
								className={classes.submit}
							>
								Kirim Kode
							</Button>
                            <br/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								style={{ width: 200 }}
								value={otp}
								onChange={e => setOtp(e.target.value)}
								name="otp"
								label="Kode OTP"
								type="numeric"
								id="otp"
							/>
							<br />
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								style={{ backgroundColor: '#299BD7' }}
								className={classes.submit}
							>
								Kirim
							</Button>
							<div style={{textAlign:'center'}}>
								<Link href="/forget-password" variant="body2">
									Kembali
								</Link>
							</div>
							<Box mt={5}>
								<Copyright />
							</Box>
						</form>
					</div>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default VerificationOTP;
