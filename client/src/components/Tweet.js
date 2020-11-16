
import React,{useEffect, useState} from "react";

import styled from 'styled-components';

import {ImBubble2} from 'react-icons/im';
import {AiOutlineRetweet} from 'react-icons/ai';
import {FaRegHeart} from 'react-icons/fa';
import {BiUpload} from 'react-icons/bi'

import LikeButton from './LikeButton/index'

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
    display: block;
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
const postLikeOrUnliked = async (tweetID, isItOrNot) =>{
  fetch(`api/tweet/${tweetID}/like`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({like: isItOrNot})
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
const Tweet = (props) => {
  const {displayName,
             handle,
              date, 
              avatar, 
              photo, 
              message, 
              remowed,
              id,
              likedOrNot} = props
    const [isLiked, setIsLiked] = useState(likedOrNot)
    const toggleLikeBtn = () =>{
      setIsLiked(!isLiked)
      postLikeOrUnliked(id, !isLiked)
    }
    
  return (
  <div style={{border:'1px solid lightgray', padding: '30px 0px 40px 5px'}} >
    {remowed && <Retmeowed><AiOutlineRetweet/>{`${remowed} remowed`}</Retmeowed>}
    <TweetHeader>
      <Avatar src={avatar}/>
    <span><Name>{displayName}</Name><Info>{`${handle} - ${date}`}</Info></span>
  </TweetHeader>
  <div >
  <Span>{message}</Span>
   {photo && <MyPhoto src={photo} />}
    <ButtonBar>
      <ImBubble2 size='30px'/>
      <AiOutlineRetweet size='30px'/>
      <div onClick={toggleLikeBtn}>
        <LikeButton isLiked={isLiked} />
      </div>
      <BiUpload size='30px'/>
    </ButtonBar>
    </div>
    
  </div>

);
  };

export default Tweet;