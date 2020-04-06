import React from 'react';
import 'isomorphic-fetch';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import Home from '../../commons/Icons/Home';
import { useRouter } from 'next/router';
import { COLORS } from '../../commons/utils/Collors';
import Button from '@material-ui/core/Button';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${COLORS.BLACK_1};
`;

const Wrapper = styled.section`
  background: ${COLORS.GREY_4};
  width: 100%;
  padding: 10%;
`;

const Styled = ({ response }) => {
  const router = useRouter();

  return (
    <Box align="center">
      <Box onClick={() => router.push('/index')}>
        <Home />
      </Box>
      <Title>{(response.answer === 'yes' && 'Sim') || 'Não'}</Title>
      <Wrapper>
        <img alt="response" src={response.image} height="100%" width="80%" />
      </Wrapper>
      <Box mt={5}>
        <Button onClick={() => router.reload()}>Perguntar</Button>
      </Box>
    </Box>
  );
};

Styled.getInitialProps = async () => {
  const data = await fetch('https://yesno.wtf/api');
  const response = await data.json();
  return { response };
};

export default Styled;
