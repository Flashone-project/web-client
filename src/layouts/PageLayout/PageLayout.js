import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'

export const PageLayout = ({ children }) => (
  <div className="wrapper">
      <header className="header-area">
        <div id="main-menu" className="sticker">
          <div className="container">
           <div className="row">
             <div className="col-md-12 col-xs-12">
                 <div className="logo float-left navbar-header">
                     <a className="navbar-brand" href="index.html"><h2>FlashOne</h2></a>
                     <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu-2">
                         <i className="zmdi zmdi-menu menu-open"></i>
                         <i className="zmdi zmdi-close menu-close"></i>
                     </button>
                 </div>
                 <div className="main-menu float-right collapse navbar-collapse" id="main-menu-2">
                     <nav>
                         <ul className="menu one-page">
                             <li className="active"><a href="#home-area">HOME</a></li>
                             <li><a href="#about-area">About</a></li>
                             <li><a href="#features-area">Flash Token</a></li>
                             <li><a href="#screenshort-area">Distribution of Tokens</a></li>
                             <li><a href="#review-area">ICO Structure</a></li>
                             <li><a href="#pricing-area">Road Map</a></li>
                             <li><a href="#support-area">support</a></li>
                         </ul>
                     </nav>
                 </div>
             </div>
           </div>
          </div>
        </div>
      </header>
      {children}
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
