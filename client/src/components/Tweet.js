
import React,{useEffect, useState} from "react";

import styled from 'styled-components';

import {ImBubble2} from 'react-icons/im';
import {AiOutlineRetweet} from 'react-icons/ai';
import {FaRegHeart} from 'react-icons/fa';
import {BiUpload} from 'react-icons/bi'

const TweetHeader = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.b`
    font-size: 25px;
    margin-left: 15px;
    margin-right: 10px;
`;
const Span = styled.span`
    margin-left: 85px;
    font-size: 30px;
`;

const MyPhoto = styled.img`
  margin-top: 10px;
  border-radius: 35px;
  margin-left: 65px;
  width: 1000px;
  height: auto;
`;

const Avatar = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 50%;
`;
const TweetLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

const ButtonBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 85px;
  margin-top: 15px;
  margin-right: 65px;

`;

const Info = styled.span`
  color: grey;
`;

const Retmeowed = styled.span`
  color: grey;
  margin-left: 85px;
`;

const Tweet = ({displayName, handle, date, avatar, photo, message, remowed}) => {
    
    
  return (
  <TweetLayout>
    {remowed && <Retmeowed><AiOutlineRetweet/>{`${remowed}, remowed`}</Retmeowed>}
    <TweetHeader>
      <Avatar src={avatar}/>
    <span><Name>{displayName}</Name><Info>{`${handle} - ${date}`}</Info></span>
  </TweetHeader>
  <div>
  <Span>{message}</Span>
   {photo && <MyPhoto src={photo} />}
    <ButtonBar>
      <ImBubble2 size='30px'/>
      <AiOutlineRetweet size='30px'/>
      <FaRegHeart size='30px'/>
      <BiUpload size='30px'/>
    </ButtonBar>
    </div>
    <hr/>
  </TweetLayout>

);
  };

export default Tweet;