import './index.css';
import './styles.scss';
import './mixins.scss'
import './variables.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import App from './App';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Nav from './common/nav/nav';
import Email from './components/email/email'
import Otp from './components/otp/otp'
import Sidenav from './common/side-nav/side-nav';
import Dashboard from './components/dashboard/dashboard';
import BackDrop from './components/dashboard/backDrop/BackDrop';
import ShareModal from './components/dashboard/sharemodal/ShareModal';
import * as serviceWorker from './serviceWorker';
import ContractTable from './components/contract-table/contractTable';
import UserSearch from './components/userSearch/userSearch';
import TweetSearch from './components/tweetSearch/tweetSearch';
import Register from './components/register/register'

const NavRoute = ({ exact, path, component: Component }) => (
  <Route exact={exact} path={path} render={(props) => (
    <div>
      {/* <Nav /> */}
      {/* <Sidenav /> */}
      <Component {...props} />
    </div>
  )} />
)

ReactDOM.render(
  <Router>

    <Switch>
      <Route exact component={Login} path="/" />
      {/* <Route exact component={Signup} path="/signup" /> */}
      <Route exact component={Email} path="/email" />
      <Route exact component={ContractTable} path="/contract-table" />
      {/* <Route component={ShareModal} path="/sharemodal" /> */}
      <Route component={BackDrop} path="/backdrop" />
      <Route component={UserSearch} path="/userSearch" />
      <Route component={TweetSearch} path="/tweetSearch" />
      <Route component={Register} path="/register" />
      <NavRoute exact component={Dashboard} path="/dashboard" />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
