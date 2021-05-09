import React from 'react';
import styled, {css} from 'styled-components';


const Container = styled.div`

  width: 100%;
  max-width: 1220px;
  margin: auto;
  padding: 15px;
  
  ${props => props.d_flex && css`
    display: flex;
    justify-content: space-between;
  `};

  ${props => props.wrap && css`
     flex-wrap: wrap;
  `}

  ${props => props.bg_white && css`
    background: white;
  `}

  ${props => props.shadow && css`
    box-shadow: 1px 1px 7px rgba(0,0,0,0.3);
`}

${props => props.rounded && css`
  border-radius: 5px;
`}

${props => props.mt_negative75 && css`
  margin-top: -75px;
`}

${props => props.p_30 && css`
  padding: 30px;  
`}
`
export default Container;