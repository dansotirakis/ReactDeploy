import React from 'react';
import 'isomorphic-fetch';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import Home from '../../commons/Icons/Home';
import { useRouter } from 'next/router';
import { COLORS } from '../../commons/utils/Collors';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${COLORS.WHITE_1};
`;

const Wrapper = styled.section`
  padding: 4em;
  background: ${COLORS.GREY_4};
`;

const Styled = ({ response }) => {
  const router = useRouter();
  return (
    <Box align="center">
      <Box onClick={() => router.push('/index')}>
        <Home/>
      </Box>
      <Wrapper>
        <Title>
          Estou com corona ?!
        </Title>
        <Title>
          {response.answer === 'yes' && 'Sim' || 'Não'}
        </Title>
        <img src={response.image}/>
      </Wrapper>
    </Box>

  );
};

Styled.getInitialProps = async () => {
  const data = await fetch('https://yesno.wtf/api');
  const response = await data.json();
  return { response };
};

export default Styled;