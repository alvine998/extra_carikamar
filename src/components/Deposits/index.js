import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';

function preventDefault(event) {
    event.preventDefault();
  }

  const useStyles = makeStyles({
    depositContext: {
      flex: 1,
    },
  });

  export default function Deposits() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Title>Pendapatan Anda</Title>
        <Typography component="p" variant="h4">
          Rp 4,550,000
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          27 Januari, 2021
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            Lihat detail
          </Link>
        </div>
      </React.Fragment>
    );
  }