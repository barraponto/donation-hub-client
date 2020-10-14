import React, { Component } from 'react'
import './LandingPage.css';
import {Link} from 'react-router-dom';


class LandingPage extends Component {

    static defaultProps = {
        location: {},
        history: {
          push: () => { },
        },
      }

    render() {
        return(
            <>
            <div className="landingText">
                Welcome to Donation Gub,
                where you can pick a company
                and give them shit. Click on find 
                opportunities to create an account
                and get started!
            </div>
            <Link className="landingButton" to='/register'>
                <b>Find Opportunities</b>
            </Link>
           </>
        );
    }
}

export default LandingPage