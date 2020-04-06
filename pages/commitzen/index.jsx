import React from 'react';
import { useRouter } from 'next/router';
import { Box } from '@material-ui/core';
import Home from '../../commons/Icons/Home';

const Commitzen = ({ data }) => {
  const router = useRouter();
  return (
    <Box align="center" mt={'5%'} onClick={() => router.push('/index')}>
      <Home />
    </Box>
  );
};

export default Commitzen;
