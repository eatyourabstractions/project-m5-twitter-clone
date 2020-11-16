import React  from "react";
import styled from "styled-components";

import Heart from "./Heart";


import ScaleIn from './ScaleIn'

import PoppingCircle from './PoppingCircle'


const LikeButton = ({ size = 40, isLiked }) => {
  
  const heartSize = size * 0.6;
  
  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLiked && <PoppingCircle size={size} color="#E790F7" />}
      {isLiked ? (
          <ScaleIn>
            <Heart width={heartSize} isToggled={isLiked} />
          </ScaleIn>
        ) : (
          <Heart width={heartSize} isToggled={isLiked} />
            )
      }
      
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
