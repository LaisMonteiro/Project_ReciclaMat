import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import LandingPage from './views/LandingPage';
import AuthenticationSignIn from './views/Authentication/sign-in';
import AuthenticationSignUp from './views/Authentication/sign-up';
import PostList from './views/Post/PostList';
import PostView from './views/Post/index';
import PostAdd from './views/Post/postAdd';
import Profile from './views/Profile/profile';
import Search from './views/Search/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={AuthenticationSignIn} />
          <Route exact path="/signup" component={AuthenticationSignUp} />
          <Route exact path="/posts" component={PostList} />
          <Route exact path="/post/add" component={PostView} />
          <Route exact path="/post/add" component={PostAdd} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
