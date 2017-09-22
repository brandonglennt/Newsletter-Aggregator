/*
 *
 * Login
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import Dialog from 'components/Dialog';
import './style.css';
import './styleM.css';

export default class Login extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      open: false
    }
  }

  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })
  };

  handlePassword = (event) => {
    this.setState({
      password:event.target.value
    })
  };

  storeLogin = () => {
    let _this = this;
    let data = new FormData();
    data.append('email', this.state.email);
    data.append('password', this.state.password);

    fetch('http://localhost:8000/api/storeLogin', {
      method:'POST',
      body:data
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      if(json.error){
        alert(json.error);
      }
      else if(json.success) {
        sessionStorage.setLogin()
        alert(json.success);
        _this.context.router.push('/')
      }
    })
  }

  handleDialog = ()=>{
    this.setState({
      open:!this.state.open
    })
  }

  render() {
    return (
      <div className="container loginBackground">
        <Helmet title="Login" meta={[ { name: 'description', content: 'Description of Login' }]}/>

        <header>
          <Navbar/>
        </header>
        <main>
      	 <div className='loginBox'>
    			<img src={require("../../photos/lock.png" )} className="lockPhoto"/>
    			<form action="/action_page.php">
            <h1>Log In</h1>
    				<p>Email</p>
    				<input type="text" name="" placeholder="" onChange={this.handleEmail}/>
    				<p>Password</p>
    				<input type="Password" name="" placeholder="" onChange={this.handlePassword}/>
    				<input type="submit" name="" value="Sign In" onClick={this.storeLogin}/>
    				<a href="#" onClick={this.handleDialog}>Forget Password</a>
    			</form>
          </div>
          <Dialog open={this.state.open} onClose={this.handleDialog}>
            <h1>Forget Your Password?</h1><br/>
            <input type="text" name="email" placeholder="Email Address"/>
            <p className = "forgottenPasswordInstructions">If you are having trouble logging in, please enter the email address you entered when you signed up and we will email you a link to reset your password.</p><br/>
            <input type="submit" value="Reset"/>
          </Dialog>
        </main>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object
};
