import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import HomeArea from './HomeArea'
import AboutArea from './AboutArea'

export const PageLayout = ({ children }) => (
  <div className="wrapper">
    <header className="header-area">
       <div id="main-menu" className="sticker">
         <div className="container">
           <div className="row">
             <div className="col-md-12 col-xs-12">
               <div className="logo float-left navbar-header">
                 <a className="navbar-brand" href="index.html"><h2>AppMom</h2></a>
                 <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu-2">
                   <i className="zmdi zmdi-menu menu-open" />
                   <i className="zmdi zmdi-close menu-close" />
                 </button>
               </div>
               <div className="main-menu float-right collapse navbar-collapse" id="main-menu-2">
                 <nav>
                   <ul className="menu one-page">
                     <li className="active"><a href="#home-area">HOME</a></li>
                     <li><a href="#about-area">About </a></li>
                     <li><a href="#features-area">FEATURES</a></li>
                     <li><a href="#screenshort-area">screenshots </a></li>
                     <li><a href="#review-area">reviews</a></li>
                     <li><a href="#pricing-area">pricing </a></li>
                     <li><a href="#support-area">support</a></li>
                   </ul>
                 </nav>
               </div>
             </div>
           </div>
         </div>
       </div>
     </header>
     {HomeArea}
     {AboutArea}
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
