import React from 'react';
import 'isomorphic-fetch';
import { Box, Grid } from '@material-ui/core';
import styled from 'styled-components';
import Home from '../../commons/Icons/Home';
import { useRouter } from 'next/router';
import { COLORS } from '../../commons/utils/Collors';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${COLORS.BLACK_1};
`;

const Wrapper = styled.section`
  background: ${COLORS.GREY_4};
`;

const Styled = ({ response }) => {
  const router = useRouter();
  return (
    <Box align="center">
      <Box onClick={() => router.push('/index')}>
        <Home/>
      </Box>
      <Title>
        Estou com corona ?!
      </Title>
      <Title>
        {response.answer === 'yes' && 'Sim' || 'Não'}
      </Title>
      <Grid xs={12} md={6} lg={3}>
        <Box align="center">
          <Wrapper><img src={response.image}/></Wrapper>
        </Box>
      </Grid>
    </Box>

  );
};

Styled.getInitialProps = async () => {
  const data = await fetch('https://yesno.wtf/api');
  const response = await data.json();
  return { response };
};

export default Styled;