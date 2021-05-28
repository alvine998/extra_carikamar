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

const Login = () => {

    const [showPass, setShowPass] = useState(false);
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
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Fragment>
			<Grid container component="main" className={classes.root}>
				<CssBaseline />
				<Grid item xs={false} sm={4} md={7} className={classes.image} />
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon style={{backgroundColor:'#299BD7'}} />
						</Avatar>
						<Typography component="h1" variant="h5">
							Mitra CariKamar
						</Typography>
						<form action="/dashboard" className={classes.form} noValidate>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								value={email}
								onChange={e => setEmail(e.target.value)}
								id="email"
								label="Alamat Email"
								name="email"
								autoComplete="email"
								autoFocus
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								value={password}
								onChange={e => setPassword(e.target.value)}
								name="password"
								label="Password"
								type={showPass ? "text" : "password"}
								id="Password"
                                autoComplete="current-password"
							/>
                            <FormControlLabel
                                onClick={togglePassVisibility}
                                style={{marginLeft:0}}
                                control={showPass ? <Eyeslash/> : <Eyeopen/>}
                                label={showPass ? 'Sembuyikan' : 'Lihat Password'}
                            />
                            <br/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Ingatkan Saya"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								style={{backgroundColor:'#299BD7'}}
								className={classes.submit}
							>
								Masuk
							</Button>
							<Grid container>
								<Grid item xs>
									<Link href="/forget-password" variant="body2">
										Lupa Password?
									</Link>
								</Grid>
								<Grid item>
									<Link href="/register" variant="body2">
										{"Belum punya akun? Daftar"}
									</Link>
								</Grid>
							</Grid>
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

export default Login;
