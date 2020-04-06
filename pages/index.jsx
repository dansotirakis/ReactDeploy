import React from 'react';
import 'isomorphic-fetch';
import { Box, Grid } from '@material-ui/core';
import GitHubIcon from '../commons/Icons/GitHubIcon';
import MapIcon from '../commons/Icons/MapIcon';
import { useRouter } from 'next/router';
import Styled from '../commons/Icons/Styled';
import Expert from '../commons/Icons/Expert';
import Lombok from '../commons/Icons/Lombok';
import Ddd from '../commons/Icons/Ddd';
import Linux from '../commons/Icons/Linux';
import Commitizen from '../commons/Icons/Commitizen';
import CommitLint from '../commons/Icons/CommitLint';
import Lerna from '../commons/Icons/Lerna';
import DocZ from '../commons/Icons/DocZ';
import Graylog from '../commons/Icons/Graylog';
import NextJs from '../commons/Icons/NextJs';

const Home = () => {
  const router = useRouter();
  return (
    <Box align="center" mt={'5%'}>
      <Grid container align="center" spacing={3}>
        <Grid item xs={12}>
          <Box>
            <Expert />
          </Box>
        </Grid>
        <Grid item xs={6} lg={3}>
          <h2>API GitHub</h2>
          <Box onClick={() => router.push('/github')}>
            <GitHubIcon />
          </Box>
        </Grid>
        <Grid item xs={6} lg={3}>
          <h2>Here Map</h2>
          <Box onClick={() => router.push('/minimap')}>
            <MapIcon />
          </Box>
        </Grid>
        <Grid item xs={6} lg={3}>
          <h2>Styled Components</h2>
          <Box onClick={() => router.push('/styled-components')}>
            <Styled />
          </Box>
        </Grid>
        <Grid item xs={6} lg={3}>
          <h2>Lombok</h2>
          <Box onClick={() => router.push('/lombok')}>
            <Lombok />
          </Box>
        </Grid>
        <Grid item xs={6} lg={3}>
          <h2>DDD</h2>
          <Box onClick={() => router.push('/ddd')}>
            <Ddd />
          </Box>
        </Grid>
        <Grid item xs={6} lg={3}>
          <h2>Linux</h2>
          <Box onClick={() => router.push('/page-linux')}>
            <Linux />
          </Box>
        </Grid>
        <Grid item xs={6} lg={3}>
          <h2>Commitizen</h2>
          <Box onClick={() => router.push('/commitzen')}>
            <Commitizen />
          </Box>
        </Grid>
        <Grid item xs={6} lg={3}>
          <h2>CommitLint</h2>
          <Box onClick={() => router.push('/commitlint')}>
            <CommitLint />
          </Box>
        </Grid>
        <Grid item xs={6} lg={3}>
          <h2>Lerna</h2>
          <Box onClick={() => router.push('/page-lerna')}>
            <Lerna />
          </Box>
        </Grid>
        <Grid item xs={6} lg={3}>
          <h2>Docz</h2>
          <Box onClick={() => router.push('/docz')}>
            <DocZ />
          </Box>
        </Grid>
        <Grid item xs={6} lg={3}>
          <h2>GrayLog</h2>
          <Box onClick={() => router.push('/graylog')}>
            <Graylog />
          </Box>
        </Grid>
        <Grid item xs={6} lg={3}>
          <h2>Next</h2>
          <Box onClick={() => router.push('/next')}>
            <NextJs />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <h2>Styled Components</h2>
          <Box onClick={() => router.push('/styled-components')}>
            <Styled/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
