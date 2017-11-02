import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class DownloadArea extends Component {
  state = {}
  render() {
    return (
      <div className="download-area bg-oapcity-40 ptb-120 bg-img-3">
          <div className="container">
              <div className="row">
                  <div className="col-md-12 text-center">
                      <div className="title-style title-pb2">
                          <h1><span>Downloads</span> </h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis.</p>
                      </div>
                      <div className="download-links">
                          <a className="res-xs" href="#">
                              <i className="zmdi zmdi-windows"></i>
                              <div className="text fix">
                                  <h4>FlashOne WhitePaper</h4>
                              </div>
                          </a>
                          <a href="#">
                              <i className="zmdi zmdi-google-play"></i>
                              <div className="text fix">
                                  <h4>Terms and Conditions</h4>
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

DownloadArea.propTypes = {
  // name: PropTypes.string
}

export default (DownloadArea)
