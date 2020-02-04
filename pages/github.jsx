import React from 'react';
import Link from 'next/link';
import { Grid } from '@material-ui/core';

const Github = ({ repositories }) => (
  <div>
    <Link href="/index">
      <a>Home</a>
    </Link>
    <h1>GitHub</h1>
    {repositories.map(repo => (
      <Grid item xs={1}>
        <a href={`${repo.html_url}`}>{repo.name}</a>
      </Grid>
    ))}
  </div>
);

Github.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/users/dansotirakis/repos');
  const repositories = await response.json();
  return { repositories };
};

export default Github;
