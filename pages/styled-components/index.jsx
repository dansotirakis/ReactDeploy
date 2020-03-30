import React from 'react';
import Link from 'next/link';
import 'isomorphic-fetch';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import Home from '../../commons/Icons/Home';
import { useRouter } from 'next/router';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Styled = () => {
  const router = useRouter();
  return (
    <Box align="center">
      <Box onClick={() => router.push('/index')}>
        <Home/>
      </Box>
      <h1>Styled Components</h1>
      <Wrapper>
        <Title>
          Hello World!
        </Title>
      </Wrapper>
    </Box>

  );
};

export default Styled;