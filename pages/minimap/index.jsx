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
        <Home />
      </Box>
      <h1>HereMap</h1>
      <HereMap {...{ pins, casa }} />
    </Box>
  );
};

export default MiniMap;
