import React from "react";
import Link from "next/link";
import Button from '@material-ui/core/Button';

import "isomorphic-fetch";
import { Grid } from "@material-ui/core";

const Home = ({ repositories }) => (
  <div>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Link href="/blog">
          <Button variant="contained" color="secondary">
            BLOG
          </Button>
        </Link>
      </Grid>
      {repositories.map(repo => (
        <Grid item xs={3}>
          <a href={`${repo.html_url}`}>
            <Button variant="contained" color="primary">
              {repo.name}
            </Button>
          </a>
        </Grid>
      ))}
    </Grid>
  </div>
);

Home.getInitialProps = async () => {
  const response = await fetch(
    "https://api.github.com/users/dansotirakis/repos"
  );
  const repositories = await response.json();

  console.log(repositories);
  return { repositories };
};

export default Home;
