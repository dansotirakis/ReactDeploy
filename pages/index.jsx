import React from 'react';
import Link from 'next/link';
import 'isomorphic-fetch';
import { Box, Grid } from '@material-ui/core';
import GitHubIcon from '../commons/Icons/GitHubIcon';
import MapIcon from '../commons/Icons/MapIcon';
import NextJs from '../commons/Icons/NextJs';

const Home = () => (
  <Box align="center" mt={'10%'}>
    <Grid container align="center" spacing={5}>
      <Grid item xs={12}>
        <Box>
          <NextJs />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <h2>Consulta API GitHub</h2>
        <Link href="/github">
          <Box>
            <GitHubIcon />
          </Box>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <h2>Componente React Here Map</h2>
        <Link href="/minimap">
          <Box>
            <MapIcon />
          </Box>
        </Link>
      </Grid>
    </Grid>
  </Box>
);

export default Home;
