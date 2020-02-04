import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import 'isomorphic-fetch';
import { Grid } from '@material-ui/core';

const Home = () => (
  <div>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Link href="/github">
          <Button variant="contained" style={{ color: '#FFF', background: '#AAADFF' }}>
            GitHub
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link href="/heremap">
          <Button variant="contained" style={{ color: '#FFF', background: '#AAAD' }}>
            HereMap
          </Button>
        </Link>
      </Grid>
    </Grid>
  </div>
);

Home.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/users/dansotirakis/repos');
  const repositories = await response.json();
  return { repositories };
};

export default Home;
