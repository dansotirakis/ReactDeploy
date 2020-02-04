import React from 'react';
import Link from 'next/link';
import { Grid } from '@material-ui/core';
import HereMap from '../../components/HereMap';

const Github = ({ repositories }) => (
  <div>
    <Link href="/index">Home</Link>
    <h1>HereMap</h1>
    <HereMap />
  </div>
);

export default Github;
