/* @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class FeatureArea extends Component {
  state = {}
  render() {
    return (
      <div id="features-area" className="ptb-100 fix">
         <div className="container">
            <div className="row">
               <div className="col-md-12 text-center">
                  <div className="feature-title title-style title-pb">
                     <h1>Flash <span>Token</span> </h1>
                     <p>Flash is one of the first Proof-of-Stake smart contract token built on Ethereum platform. It's based on the ERC-20 Token Standard and implements all standard methods. Flash tokens are backbone of FlashOne.net and they power website’s loyalty and referral program.  </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-md-4 featured-left pt-50 pr-0 xs-res">
                  <div className="single-features-list text-right">
                     <div className="feature-list-icon">
                        <i className="zmdi zmdi-favorite"></i>
                     </div>
                     <div className="feature-list-text">
                        <h3>Crypto-currency</h3>
                        <p>
                           Flash tokens are desacralized crypto-currency, which can be used for peer-to-peer transactions.
                        </p>
                     </div>
                  </div>
                  <div className="single-features-list text-right">
                     <div className="feature-list-icon">
                        <i className="zmdi zmdi-language-html5"></i>
                     </div>
                     <div className="feature-list-text">
                        <h3>Trading</h3>
                        <p>
                           Trade the token on open market Pellentesque vel volutpat felis, eu condimentum massa.
                        </p>
                     </div>
                  </div>
                  <div className="single-features-list text-right">
                     <div className="feature-list-icon">
                        <i className="zmdi zmdi-desktop-mac"></i>
                     </div>
                     <div className="feature-list-text">
                        <h3>Staking</h3>
                        <p>
                           Earn 100% first year interest by Proof-of-Stake minting, all you need is to hold tokens in your wallet.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-4">
                  <div className="feature-img text-center">
                     <img src="img/mobile/m-1.png" alt="" />
                  </div>
               </div>
               <div className="col-lg-4 col-md-4 featured-right pt-50 pl-0">
                  <div className="single-features-list text-left">
                     <div className="feature-list-icon">
                        <i className="zmdi zmdi-favorite"></i>
                     </div>
                     <div className="feature-list-text">
                        <h3>Lending</h3>
                        <p>
                           Invest your token on our Lending Platform and receive daily profit in USD. Earn up to 300% yearly!
                        </p>
                     </div>
                  </div>
                  <div className="single-features-list text-left">
                     <div className="feature-list-icon">
                        <i className="zmdi zmdi-language-html5"></i>
                     </div>
                     <div className="feature-list-text">
                        <h3>Dividends</h3>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa.
                        </p>
                     </div>
                  </div>
                  <div className="single-features-list text-left res-features">
                     <div className="feature-list-icon">
                        <i className="zmdi zmdi-desktop-mac"></i>
                     </div>
                     <div className="feature-list-text">
                        <h3>Internal Currency</h3>
                        <p>
                           Flash tokens are internal currency of FlashOne.net, and can be used to purchase any products offered in website.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
  }
}

FeatureArea.propTypes = {
  // name: PropTypes.string
}

export default (FeatureArea)
