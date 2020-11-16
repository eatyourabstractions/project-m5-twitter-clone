import React from "react";
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Link,
    NavLink
  } from "react-router-dom";

import {COLORS} from '../constants';
import {ReactComponent as Logo} from '../assets/logo.svg';

import {AiOutlineHome as Home} from 'react-icons/ai';
import {RiNotification2Line as Bell} from 'react-icons/ri';
import {BsPerson as Person} from 'react-icons/bs';
import {BsBookmark as Bookmark} from 'react-icons/bs';
import {AiOutlineRetweet as Tweet} from 'react-icons/ai';



const NavigationLink = styled(NavLink)`
  /* default styles here */
  margin-left: 10px;
  text-decoration: none;

  &:visited{
    color: none;
  }

  &.active {
    color: ${COLORS.primary};
  }
  &:hover{
    background: ${COLORS.electric};
    border-radius: 30px;
    opacity: 0.1;
    padding: 15px
  }
`;

const Li = styled.li`
  padding: 10px;
`;




const Ul = styled.ul`
  list-style: none;
`;
 
 const Sidebar = () => {

   
    return (
     
         <div>
          
          <nav>
            <Ul>
              <Li>
              <Logo/>
              </Li>
              <Li>
                <Home size='25px'/>
                <NavigationLink to="/"><b>HomeFeed</b></NavigationLink>
              </Li>
              <Li>
                <Bell size='25px'/>
                <NavigationLink to="/notifications"><b>notifications</b></NavigationLink>
              </Li>
              <Li>
                <Bookmark size='25px'/>
                <NavigationLink to="/bookmarks"><b>bookmarks</b></NavigationLink>
              </Li>
              <Li>
                <Tweet size='25px'/>
                <NavigationLink to="/tweet/:tweetId"><b>tweetId</b>tweetId</NavigationLink>
              </Li>
              <Li>
              <Person size='25px'/>
                <NavigationLink to="/:profileId"><b>:profileId</b></NavigationLink>
              </Li>
            </Ul>
          </nav>
        
        </div>
    )
        
      
      
    
  }

export default Sidebar;