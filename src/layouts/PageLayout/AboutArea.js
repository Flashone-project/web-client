import React from 'react'

var NewComponent = React.createClass({
  render: function() {
    return (

      <div id="service-area">
        <div className="ptb-80">
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-6 col-md-3">
                <div className="single-item res-sm text-center">
                  <div className="single-item-icon">
                    <i className="zmdi zmdi-settings" />
                  </div>
                  <h4 className="ht-pt">Trade</h4>
                  <p>$250+ per Flash token by 2020</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="single-item res-sm res-xs text-center">
                  <div className="single-item-icon">
                    <i className="zmdi zmdi-favorite" />
                  </div>
                  <h4 className="ht-pt">Stake</h4>
                  <p>100% interest! 1st year</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="single-item text-center">
                  <div className="single-item-icon">
                    <i className="zmdi zmdi-time" />
                  </div>
                  <h4 className="ht-pt">Lend</h4>
                  <p>300% Interest! 1st year</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="single-item text-center">
                  <div className="single-item-icon">
                    <i className="zmdi zmdi-time" />
                  </div>
                  <h4 className="ht-pt">Earn Dividends</h4>
                  <p>$1.00+ per Flash token by 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default NewComponent
