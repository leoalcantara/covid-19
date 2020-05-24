import React from "react";
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';

import styles from './Cards.modules.css';

const Cards = (props) => {
  console.log(props);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infectados </Typography>
            <Typography variant="h5">Dados Reais</Typography>
            <Typography color="textSecondary">Dados Reais</Typography>
            <Typography>Número de casos ativos</Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recuperados </Typography>
            <Typography variant="h5">Dados Reais</Typography>
            <Typography color="textSecondary">Dados Reais</Typography>
            <Typography>Número de casos recuperados</Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Mortos </Typography>
            <Typography variant="h5">Dados Reais</Typography>
            <Typography color="textSecondary">Dados Reais</Typography>
            <Typography>Número de mortes</Typography>
          </CardContent>
        </Grid>
      </Grid>

    </div>
  );
};

export default Cards;
