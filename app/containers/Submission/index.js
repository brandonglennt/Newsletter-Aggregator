/*
 *
 * Submission
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import './style.css';
import './styleM.css';

export default class Submission extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Submission" meta={[ { name: 'description', content: 'Description of Submission' }]}/>

        <header>
          <Navbar/>
        </header>

        <header>
            <div className="navBar"></div>
        </header>

        <main>
            <div className="welcome">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="newsSubmission">
                <form action="/action_page.php">
                    Company Name <input type="text" name="Description" maxlength="40" required/><br/>
                    Title <input type="text" name="Title" placeholder="Newsletter title" required/><br/>
                    <input type="text" name="Newsletter URL"/>
                    Description <input type="text" name="Description" placeholder="Provide a brief description" maxlength="40" required/><br/>
                <input type="submit" value="Submit"/>
                </form>
            </div>
        </main>
      </div>
    );
  }
}

Submission.contextTypes = {
  router: React.PropTypes.object
};
