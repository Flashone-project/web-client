/* @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'



export class AboutArea extends Component {
  state = {}
  render() {
    return (
      <div id="about-area" className="all-about gray-bg ptb-80">
         <div className="container">
            <div className="row">
               <div className="col-md-7 col-sm-6">
                  <div className="about-bottom-left clearfix">
                     <h1>about <span>Flash</span>One</h1>
                     <h3>Lorem ipsum dolor sit amet </h3>
                     <p className="about-pb">FlashOne aims to become one of the biggest online
                        electronics store that will accept all major crypto-currencies,
                        and serve the growing crypto community and general public.
                     </p>
                     <p>
                        eCommerce is a multi-trillion dollar market, with 51% of Americans
                        preferring to shop online, 96% of those with internet access
                        have made an online purchase in their life, 80% in the past
                        month alone. eCommerce is growing 23% annually,
                        with a growing popularity of crypto-currencies and rapid
                        expansion of crypto-currency community, there is a high
                        demand for online store that can accept all digital currencies.
                     </p>
                     <p>
                        With an innovative loyalty and referral program, as well as
                        An Proof-of-Stake and Lending platform, we believe that we can
                        compete with the top giants in this market.
                     </p>
                     <div className="about-icon">
                        <ul>
                           <li><a href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                           <li><a href="#"><i className="zmdi zmdi-twitter"></i></a></li>
                           <li><a href="#"><i className="zmdi zmdi-pinterest"></i></a></li>
                           <li><a href="#"><i className="zmdi zmdi-linkedin"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-md-5 col-sm-6">
                  <div className="about-bottom-img">
                     <img src="img/mobile/2.png" alt=""/>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
  }
}

AboutArea.propTypes = {
  // name: PropTypes.string
}

export default (AboutArea)
