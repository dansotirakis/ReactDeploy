import React from 'react';
import 'isomorphic-fetch';
import { Box, Grid } from '@material-ui/core';
import GitHubIcon from '../commons/Icons/GitHubIcon';
import MapIcon from '../commons/Icons/MapIcon';
import NextJs from '../commons/Icons/NextJs';
import { useRouter } from 'next/router';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

const Home = () => {
  const router = useRouter();
  return (
    <Box align="center" mt={'10%'}>
      <Grid container align="center" spacing={5}>
        <Grid item xs={12}>
          <Box>
            <NextJs/>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <h2>Consulta API GitHub</h2>
          <Box onClick={() => router.push('/github')}>
            <GitHubIcon/>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <h2>Componente React Here Map</h2>
          <Box onClick={() => router.push('/minimap')}>
            <MapIcon/>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <h2>Coronavirus</h2>
          <Box onClick={() => router.push('/coronavirus')}>
            <ReportProblemIcon fontSize="large"/>
          </Box>
        </Grid>
      </Grid>
    </Box>);
};


export default Home;
