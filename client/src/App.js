import React, {useContext} from "react";
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Bookmarks from './components/Bookmarks';
import Notifications from './components/Notifications';
import HomeFeed from './components/HomeFeed';
import Profile from './components/Profile'
import TweetDetails from './components/TweetDetails';

import {CurrentUserContext} from './components/CurrentUserContext';


const Layout = styled.div`
  display: flex;
`;

const App = () => {
  const {status} = useContext(CurrentUserContext);
  const isLoading = status === 'idle';
  return (
    <>
    { isLoading ? (
  <Layout>
    <Router>
      <Sidebar/>
      <Switch>
      <Route exact path="/">
                <HomeFeed />
            </Route>
            <Route path="/notifications">
                <Notifications />
            </Route>
            <Route path="/bookmarks">
                <Bookmarks />
            </Route>
            <Route path="/tweet/:tweetId">
                <TweetDetails />
            </Route>
            <Route path="/:profileId">
                <Profile />
            </Route>
      </Switch>
    </Router>
  </Layout>
    ) : (
      <div style={{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
      }}>Loading</div>
    )
}
</>
  )
  
};

export default App;
