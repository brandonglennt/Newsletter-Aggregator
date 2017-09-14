/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
          <Navbar/>
        </header>

        <main>
            <div className="newsColumn">

                <div className="newsItem">
                    <div className="newsLogo">
                    <img className="logoImage" src="https://theclubhou.se/wp-content/uploads/2017/04/theclubhouselogo-1.png"/>
                    </div>
                    <div className="newsInfo">
                        <div className="newsTitle">theClubhou.se NewsLetter</div>
                        <div className="newsDescription">theclubhou.se</div>
                    </div>
                </div>

            </div>

        </main>

        <footer></footer>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
