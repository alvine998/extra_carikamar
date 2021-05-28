import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
  } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../Actions/authActions";
import classnames from "classnames";

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
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: '#299BD7'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:'#299BD7'
    },
  }));

  const Register = () => {
    const classes = useStyles();

    const [name, setName ] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ password2, setPassword2] = useState("");

  //   useEffect( () => {
      
  // }, [props.counter])


    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registrasi
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    value={name}
                    onChange={e => setName(e.target.value)}
                    id="firstName"
                    label="Nama Lengkap"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    id="email"
                    label="Alamat Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    alue={password}
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    alue={password2}
                    onChange={e => setPassword2(e.target.value)}
                    name="password2"
                    label="Ulangi Password"
                    type="password"
                    id="password2"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Saya setuju dengan Kebijakan dan Aturan yang berlaku di Carikamar.id"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Daftar
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    Sudah punya akun? Masuk
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      );
  }

  // const mapStateToProps = state => ({
  //   auth: state.auth,
  //   errors: state.errors
  // });
  // Register.propTypes = {
  //   registerUser: PropTypes.func.isRequired,
  //   auth: PropTypes.object.isRequired,
  //   errors: PropTypes.object.isRequired
  // };

  export default Register;