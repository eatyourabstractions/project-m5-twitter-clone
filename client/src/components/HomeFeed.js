import React,{useEffect, useState} from "react";

const HomeFeed = () => {
  const [tweets, setTweets] = useState('Home Feed')

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('http://localhost:31415/api/me/home-feed')
        .then(response => response.json())
        .then(data => {
            setTweets(JSON.stringify(data))
        });

}, []);

    return (
        

    <div>{tweets}</div>
   
    );
  };

export default HomeFeed;