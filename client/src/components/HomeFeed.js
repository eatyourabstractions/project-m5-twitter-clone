import React,{useEffect, useState} from "react";
import styled from 'styled-components';

import Tweet from './Tweet';

import moment from 'moment';

import TweetTextArea from './TweetTextArea'

const Ul = styled.ul`
  list-style-type: none;
`;

const HomeFeed = () => {
  const [tweetIds, setTweetIds] = useState([])
  const [tweetsByIds, setTweetsByIds] = useState(false)
  const [theAvatar, setAvatar] = useState('')
  const [profile, setProfile] = useState({})

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('api/me/home-feed')
        .then(response => response.json())
        .then(data => {
            setTweetIds(data.tweetIds)
            setTweetsByIds(data.tweetsById)
        });

        fetch('api/me/profile')
        .then(response => response.json())
        .then(data => {
            setAvatar(validateUrl(data.profile.avatarSrc))
            setProfile(data.profile)
            
            
        });

}, []);



const ranId = (n) => [...Array(n)].map(() => Math.floor(Math.random() * 9)).join('');

  const postTweet = async (cntnt) =>{
    fetch('api/tweet', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({status: cntnt})
      })
      .then(res => res.json())
      .then(res => {
        
        const myNewTweet = {
          timestamp: res.tweet.timestamp,
          author: {
            displayName: profile.displayName,
            handle: profile.handle,
            avatarSrc: profile.avatarSrc
          },
          status: res.tweet.status,
          media: [],
          id: res.tweet.id,
          isLiked: false,
        }
        console.log(myNewTweet)
        // const newTweets = [...tweetIds]
        // newTweets.unshift(res.tweet.id)
        // setTweetIds(newTweets)
        // const newObj = Object.assign({}, tweetsByIds);
        // newObj[res.tweet.id] = myNewTweet;
        // console.log('my new obj', newObj)
        // setTweetsByIds(newObj)
      })
      
  }
  

  const throwTweet = async (tweetContent) =>{
    // optimistic update
    const newId = ranId(12)
    const newTweetById = {
     timestamp: moment().format(),
     status: tweetContent,
     author: {
      displayName: profile.displayName,
      handle: profile.handle,
      avatarSrc: profile.avatarSrc,
    },
     media: []}
     newTweetById[newId] = newId;
     const newTweets = [...tweetIds]
     newTweets.unshift(newId)
     setTweetIds(newTweets)
     const newObj = Object.assign({}, tweetsByIds);
     newObj[newId] = newTweetById;
     setTweetsByIds(newObj)
     
     //POST the data
    postTweet(tweetContent)

     
  }
  

  
  
const TweetLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

  const validateUrl = (myurl) =>{
    return myurl.includes('http') ? myurl :`http://localhost:31415${myurl}`
  }

    const genTweetList = () => tweetIds.map((tweetId) =>{
      const {timestamp, author, status, media, retweetFrom, id, isLiked} = tweetsByIds[tweetId];
      const myAvatar = validateUrl(author.avatarSrc)
      
      
      const gotMedia = Array.isArray(media) && media.length;
      const tweetPhotoTemp = gotMedia ? media[0].url : '';
      const tweetPhoto = tweetPhotoTemp.length === 0 ? '' : validateUrl(tweetPhotoTemp);
      
      return (
        <li key={tweetId}>
            <Tweet 
               displayName={author.displayName}
               handle={author.handle}
               date={moment(timestamp).format('MMM Do')}
               avatar={myAvatar}
               photo={tweetPhoto}
               message={status}
               remowed={retweetFrom?.displayName}
               id={id}
               likedOrNot={isLiked}
               
               />
        </li>
          )
        }
    );

    

    return (
    <TweetLayout>
      <TweetTextArea avatar={theAvatar} makeTweet={throwTweet}/>
      <Ul>{tweetsByIds && genTweetList()}</Ul>
    </TweetLayout>
    );
  };

export default HomeFeed;