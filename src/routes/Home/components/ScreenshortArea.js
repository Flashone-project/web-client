/* @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ScreenshortArea extends Component {
  state = {}
  render() {
    return (
      <div id="screenshort-area" className="screenshort-tb ptb-120 gray-bg">
         <div className="container">
            <div className="row">
               <div className="col-md-12 text-center">
                  <div className="title-style title-pb3">
                     <h1>view <span> screenshots</span></h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="screenshot-slider">
            <div className="single-screenshot">
               <div className="image">
                  <a className="venobox" href="img/screenshort/1.jpg" ><img src="img/screenshort/1.jpg" alt="" /></a>
               </div>
            </div>
            <div className="single-screenshot">
               <div className="image">
                  <a className="venobox" href="img/screenshort/2.jpg" ><img src="img/screenshort/2.jpg" alt="" /></a>
               </div>
            </div>
            <div className="single-screenshot">
               <div className="image">
                  <a className="venobox" href="img/screenshort/1.jpg" ><img src="img/screenshort/1.jpg" alt="" /></a>
               </div>
            </div>
            <div className="single-screenshot">
               <div className="image">
                  <a className="venobox" href="img/screenshort/2.jpg" ><img src="img/screenshort/2.jpg" alt="" /></a>
               </div>
            </div>
            <div className="single-screenshot">
               <div className="image">
                  <a className="venobox" href="img/screenshort/1.jpg" ><img src="img/screenshort/1.jpg" alt="" /></a>
               </div>
            </div>
            <div className="single-screenshot">
               <div className="image">
                  <a className="venobox" href="img/screenshort/2.jpg" ><img src="img/screenshort/2.jpg" alt="" /></a>
               </div>
            </div>
         </div>
      </div>
    )
  }
}

ScreenshortArea.propTypes = {
  // name: PropTypes.string
}

export default (ScreenshortArea)
