/* @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsletterArea extends Component {
  state = {}
  render() {
    return (
      <div className="newsletter-area bg-oapcity-40 ptb-120 bg-img-4">
         <div className="container">
            <div className="row">
               <div className="col-md-12 text-center">
                  <div className="title-style title-pb5">
                     <h1>
                        sign up for <span>newsletter</span>
                     </h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="subscribe-form text-center col-xs-12 col-md-offset-4 col-md-4 col-sm-8 col-sm-offset-2">
                  <form id="mc-form" className="mc-form">
                     <input id="mc-email" type="email" autocomplete="off" placeholder="Enter your Email address"/>
                     <button  id="mc-submit" type="submit"><i className="zmdi zmdi-mail-send"></i></button>
                  </form>

                  <div className="mailchimp-alerts text-centre">
                     <div className="mailchimp-submitting"></div>
                     <div className="mailchimp-success"></div>
                     <div className="mailchimp-error"></div>
                  </div>

               </div>
            </div>
         </div>
      </div>
    )
  }
}

NewsletterArea.propTypes = {
  // name: PropTypes.string
}

export default (NewsletterArea)
