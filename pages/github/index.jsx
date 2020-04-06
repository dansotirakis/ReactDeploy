import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import CodeIcon from '../../commons/Icons/CodeIcon';
import 'isomorphic-fetch';
import Home from '../../commons/Icons/Home';
import { useRouter } from 'next/router';

const GitHub = ({ repositories }) => {
  const router = useRouter();
  return (
    <Box align="center">
      <Box onClick={() => router.push('/index')}>
        <Home />
      </Box>
      <h1>GitHub</h1>
      <Grid container spacing={2}>
        {repositories.map(repo => (
          <Grid item xs={12} sm={6} md={2}>
            <Box align="center">
              <a href={`${repo.html_url}`}>
                <CodeIcon/>
              </a>
              <Typography>{repo.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

GitHub.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/users/dansotirakis/repos');
  const repositories = await response.json();
  return { repositories };
};

export default GitHub;
