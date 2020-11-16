import React from "react";
import styled from 'styled-components';

import {COLORS} from '../constants';
const TweetLayout = styled.div`
  display: flex;
  margin-left: 40px;
  margin-bottom: 50px;
  flex-direction: column;
 
`;
const Avatar = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 50%;
`;

const Textarea = styled.textarea`
  border: 0px;
`;

const MeowBtn = styled.button`
  background-color: ${COLORS.primary};
  color: whitesmoke;
  border: none;
  border-radius: 30px;
  width: 120px;
  height: 45px;
  font-size: 26px;
  
`;

const FlexContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin-right: 60px;
  margin-top: 15px;
`;


const TweetTextArea = ({avatar, makeTweet}) => {
  const limit = 240;
  const [content, setContent] = React.useState('');
  const setFormattedContent = text => {
    text.length > limit ? setContent(text.slice(0, limit)) : setContent(text);
  };
  React.useEffect(() => {
    setFormattedContent(content);
  }, []);

  
  return (
    <>
    <TweetLayout>
      <FlexContainer >
      <Avatar src={avatar}/>
      <Textarea placeholder={`What's happening?`} 
          value={content}
          rows="6" cols='120' 
          onChange={event => setFormattedContent(event.target.value)}>
      </Textarea>
      </FlexContainer>
      <FlexContainer>
      <p style={{marginRight: '15px'}}>
        {content.length}/{limit}
      </p>
      <MeowBtn onClick={() => makeTweet(content)}>Meow</MeowBtn>
      </FlexContainer>
    </TweetLayout>
    
    <hr width='1000px'/>
    </>
);
  };

export default TweetTextArea;