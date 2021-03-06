import React, { Component } from 'react'
import PropTypes from 'prop-types'
import mobile_one from '../assets/mobile/1.png'

class HomeArea extends Component {
  state = {}
  render() {
    return (
      <div id="home-area" className="height-100vh bg-oapcity-40 bg-overly bg-img-1 sm-height-none">
        <div className="table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="home-sliders clearfix">
                  <div className="col-md-8 col-sm-8">
                    <div className="top-text pt-60">
                      <div className="slider-text">
                        <h1>FlashOne</h1>
                        <h2>Flash token Pre-sale, coming soon!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit. Pellentesque vel volutpat felis, eu condimtum ma Pellentesque mollis eros vel.</p>
                        <div className="button-set">
                          <a className="button" href="#">
                            Download
                          </a>
                          <a className="button active" href="#">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="slider-imgj">
                      <img src={mobile_one} alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

HomeArea.propTypes = {
  // name: PropTypes.string
}

export default (HomeArea)
