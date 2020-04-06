import React from 'react';
import HereMap from '../../components/HereMap';
import 'isomorphic-fetch';
import { Box } from '@material-ui/core';
import { useRouter } from 'next/router';
import Home from '../../commons/Icons/Home';

const MiniMap = ({ pins, casa }) => {
  const router = useRouter();
  return (
    <Box align="center">
      <Box onClick={() => router.push('/index')}>
        <Home/>
      </Box>
      <h1>HereMap</h1>
      <HereMap {...{ pins, casa }} />
    </Box>
  );
};

MiniMap.getInitialProps = async () => {
  const response = await fetch('http://www.mocky.io/v2/5e3b5d332f00008f0556ca29');
  const pins = await response.json();
  const casa = pins.shift();
  return { casa, pins };
};
export default MiniMap;
