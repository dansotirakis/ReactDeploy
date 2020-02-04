import React from 'react';
import Link from 'next/link';
import HereMap from '../../components/HereMap';
import 'isomorphic-fetch';
import { Box } from '@material-ui/core';

const MiniMap = ({ repositories }) => (
  <Box align="center">
    <Link href="/index">Home</Link>
    <h1>HereMap</h1>
    <HereMap />
  </Box>
);

export default MiniMap;
