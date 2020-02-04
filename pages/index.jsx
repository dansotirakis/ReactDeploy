import React from 'react';
import Link from 'next/link';
import 'isomorphic-fetch';
import { Box, Grid } from '@material-ui/core';
import GitHubIcon from '../commons/Icons/GitHubIcon';
import MapIcon from '../commons/Icons/MapIcon';

const Home = () => (
  <Box align="center" mt={30}>
    <Grid container align="center" spacing={5}>
      <Grid item xs={6}>
        <h2>Consulta API GitHub com SSR</h2>
        <Link href="/github">
          <Box>
            <GitHubIcon />
          </Box>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <h2>Utilização componente React Here Map SSR</h2>
        <Link href="/minimap">
          <Box>
            <MapIcon />
          </Box>
        </Link>
      </Grid>
    </Grid>
  </Box>
);

Home.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/users/dansotirakis/repos');
  const repositories = await response.json();
  return { repositories };
};

export default Home;
