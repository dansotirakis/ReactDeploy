import React from 'react';
import Link from 'next/link';
import { Grid, Box, Typography } from '@material-ui/core';
import CodeIcon from '../../commons/Icons/CodeIcon';
import 'isomorphic-fetch';

const GitHub = ({ repositories }) => (
  <Box align="center">
    <Link href="/index">
      <a>Home</a>
    </Link>
    <h1>GitHub</h1>
    <Grid container spacing={2}>
      {repositories.map(repo => (
        <Grid item xs={2}>
          <Box align="center">
            <a href={`${repo.html_url}`}>
              <CodeIcon />
            </a>
            <Typography>{repo.name}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

GitHub.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/users/dansotirakis/repos');
  const repositories = await response.json();
  return { repositories };
};

export default GitHub;
