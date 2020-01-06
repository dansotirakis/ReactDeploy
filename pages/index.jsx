import React from "react";
import Link from "next/link";

import "isomorphic-fetch";

const Home = ({ repositories }) => (
  <div>
    <Link href="/blog">
      <a>BLOG</a>
    </Link>
    {repositories.map(repo => (
      <h1>{repo.name}</h1>
    ))}
  </div>
);

Home.getInitialProps = async () => {
  const response = await fetch(
    "https://api.github.com/users/dansotirakis/repos"
  );
  const repositories = await response.json();

  console.log("a");
  return { repositories };
};

export default Home;
