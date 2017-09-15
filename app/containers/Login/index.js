/*
 *
 * Login
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';

import './style.css';
import './styleM.css';

export default class Login extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Login" meta={[ { name: 'description', content: 'Description of Login' }]}/>

        <header>
          <Navbar/>
        </header>
      	<main className='login'>
      		<div className="loginBox">
      			<img src={require("../../photos/user.png" )} className="user"/>
      			<h1>Log In</h1>
      			<form>
      				<p>Email</p>
      				<input type="text" name="" placeholder=""/>
      				<p>Password</p>
      				<input type="Password" name="" placeholder=""/>
      				<input type="submit" name="" value="Sign In"/>
      				<a href="#">Forget Password</a>
      			</form>
      		</div>
        </main>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object
};
