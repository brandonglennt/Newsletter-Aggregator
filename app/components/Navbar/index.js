/**
*
* Navbar
*
*/

import React from 'react';
import { Link } from 'react-router';

import './style.css';
import './styleM.css';

import Bar from 'react-icons/lib/fa/bars';

export default class Navbar extends React.PureComponent {

  constructor(){
    super();
    this.state = {
      menuOpen:false,
      token:sessionStorage.getItem("token")
    }
  }

  signOut = () => {
    sessionStorage.removeItem("token");
    this.setState({
      token:""
    })
  }

  handleMenu = () => {
    if(this.state.menuOpen === true)
    {
      this.setState({
        menuOpen:false
      })
    }
    else if (this.state.menuOpen === false)
    {
      this.setState({
        menuOpen:true
      })
    }
  }
  renderMenu(){
    if(this.state.menuOpen === true) {
      return(
        <nav className="navMobile">
          <Link to="/" className="navButton">Home</Link>
          <Link to="/Submission" className="navButton">Submission</Link>
          <Link to="Login" className="Login">Login</Link>
        </nav>
      )
    }
  }

  render() {
    let loginButton ="";
    if(this.state.token===""||this.state.token==undefined){
      loginButton=<Link to="/Login" className="navButton">LOGIN</Link>;
    }
    else{
      loginButton=<div onClick={this.signOut} className="navButton">SIGN OUT</div>;
    }

    return (
      <div>
        <div className="navBar">
        <div className="siteName">{this.props.siteName}</div>

        <nav className="nav">
            <Link to="/" className="navButton">HOME</Link>
            {loginButton}
            <Link to="/Submission" className="navButton">SUBMISSION</Link>
        </nav>

          <Bar className="menuIcon" onClick={this.handleMenu}/>

      </div>

      {this.renderMenu()}
    </div>
    );
  }
}

Navbar.contextTypes = {
  router: React.PropTypes.object
};

/*export default class Navbar extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="navBar">Newsletters</div>
      </div>
    );
  }
}

Navbar.contextTypes = {
  router: React.PropTypes.object
}; */
