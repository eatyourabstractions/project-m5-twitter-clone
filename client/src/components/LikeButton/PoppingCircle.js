import React, {useContext} from "react";
import styled, {keyframes} from "styled-components";


const PoppingCircle = ({ size, color }) => {
    return <Wrapper style={{
        width: size,
        height: size,
        backgroundColor: color,
    }}></Wrapper>
    
  };

  const fadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0 ;
  }
`;

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1) ;
  }
`;

const Wrapper = styled.div`
    position: absolute;
    border-radius: 50%;
    animation: ${fadeIn} 500ms forwards, ${scale} 300ms forwards;
`;


  export default PoppingCircle;