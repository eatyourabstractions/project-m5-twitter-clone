import React,{useEffect, useState} from "react";
import styled from 'styled-components';

import Tweet from './Tweet';

const Ul = styled.ul`
  list-style-type: none;
`;

const HomeFeed = () => {
  const [tweetIds, setTweetIds] = useState([])
  const [tweetsByIds, setTweetsByIds] = useState(false)

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('http://localhost:31415/api/me/home-feed')
        .then(response => response.json())
        .then(data => {
            setTweetIds(data.tweetIds)
            setTweetsByIds(data.tweetsById)
        });

}, []);

    const genTweetList = () => tweetIds.map((tweetId) =>{
      const {timestamp, author, status, media} = tweetsByIds[tweetId];
      
      const gotMedia = Array.isArray(media) && media.length;
      const tweetPhoto = gotMedia ? media[0].url : '';
      console.log(`author: `, author)
      return (
        <li key={tweetId}>
            <Tweet 
               displayName={author.displayName}
               handle={author.handle}
               date={timestamp}
               avatar={author.avatarSrc}
               photo={tweetPhoto}
               message={status}
               
               />
        </li>
          )
        }
    );

    return (
        

    <Ul>{tweetsByIds && genTweetList()}</Ul>
   
    );
  };

export default HomeFeed;