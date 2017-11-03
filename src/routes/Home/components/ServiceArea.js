import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ServiceArea extends Component {
  state = {}
  render() {
    return (
      <div id="service-area">
        <div className="ptb-80">
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-6 col-md-3">
                <div className="single-item res-sm text-center">
                  <div className="single-item-icon">
                    <i className="zmdi zmdi-refresh" />
                  </div>
                  <h4 className="ht-pt">Trade</h4>
                  <p>$250+ per Flash token by 2020</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="single-item res-sm res-xs text-center">
                  <div className="single-item-icon">
                    <i className="zmdi zmdi-balance-wallet" />
                  </div>
                  <h4 className="ht-pt">Stake</h4>
                  <p>100% interest! 1st year</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="single-item text-center">
                  <div className="single-item-icon">
                    <i className="zmdi zmdi-accounts-alt" />
                  </div>
                  <h4 className="ht-pt">Lend</h4>
                  <p>300% Interest! 1st year</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="single-item text-center">
                  <div className="single-item-icon">
                    <i className="zmdi zmdi-money" />
                  </div>
                  <h4 className="ht-pt">Earn Dividends</h4>
                  <p>$1.00+ per Flash token by 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ServiceArea.propTypes = {
  // name: PropTypes.string
}

export default (ServiceArea)
