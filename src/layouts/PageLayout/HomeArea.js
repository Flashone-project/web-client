import React from 'react'

var NewComponent = React.createClass({
  render: function() {
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
                      <img src="img/mobile/1.png" alt />
                    </div>
                  </div>
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
