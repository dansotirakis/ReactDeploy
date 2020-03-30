import React from 'react';
import 'isomorphic-fetch';
import { Box, Grid } from '@material-ui/core';
import GitHubIcon from '../commons/Icons/GitHubIcon';
import MapIcon from '../commons/Icons/MapIcon';
import NextJs from '../commons/Icons/NextJs';
import { useRouter } from 'next/router';
import Corona from '../commons/Icons/Corona';
import Styled from '../commons/Icons/Styled';

const Home = () => {
  const router = useRouter();
  return (
    <Box align="center" mt={'5%'}>
      <Grid container align="center" spacing={3}>
        <Grid item xs={12}>
          <Box>
            <NextJs/>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <h2>Consulta API GitHub</h2>
          <Box onClick={() => router.push('/github')}>
            <GitHubIcon/>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <h2>Componente React Here Map</h2>
          <Box onClick={() => router.push('/minimap')}>
            <MapIcon/>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <h2>Coronavirus</h2>
          <Box onClick={() => router.push('/coronavirus')}>
            <Corona/>
          </Box>
        </Grid>
      </Grid>
    </Box>);
};


export default Home;
