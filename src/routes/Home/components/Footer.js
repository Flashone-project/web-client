import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Footer extends Component {
  state = {}
  render() {
    return (
      <footer className="footer-area pt-120 pb-80">
         <div className="container">
            <div className="col-md-12 text-center">
               <div className="footer-all">
                  <div className="footer-logo logo">
                     <a href="#">
                        <h2>AppMom</h2>
                     </a>
                  </div>
                  <div className="footer-icon">
                     <ul>
                        <li><a href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                        <li><a href="#"><i className="zmdi zmdi-twitter"></i></a></li>
                        <li><a href="#"><i className="zmdi zmdi-google-plus"></i></a></li>
                        <li><a href="#"><i className="zmdi zmdi-pinterest"></i></a></li>
                        <li><a href="#"><i className="zmdi zmdi-linkedin"></i></a></li>
                     </ul>
                  </div>
                  <div className="footer-text">
                     <span>
                     Copyright © 2017
                     <a href="http://bootexperts.com/" target="_blank">HasTech</a>
                     all rights reserved.
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  // name: PropTypes.string
}

export default (Footer)
