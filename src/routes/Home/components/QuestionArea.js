/* @flow */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class QuestionArea extends Component {
  state = {}
  render() {
    return (
      <div className="question-area ptb-120">
          <div className="container">
              <div className="row">
                  <div className="col-md-12 text-center">
                      <div className="title-style title-pb">
                          <h1><span>Many Ways </span>to Earn</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam </p>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <div className="faq-accordion">
                          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                              <div className="panel sauget-accordion">
                                  <div className="panel-heading" role="tab" id="headingOne">
                                      <h4 className="panel-title">
                                          <a data-toggle="collapse" data-parent="#accordion" href="#checkoutMethod" aria-expanded="true" aria-controls="checkoutMethod">
                                              Trading
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="checkoutMethod" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                      <div className="panel-body">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Pellentesque vel volutpat felis, eu condimentum massa.
                                            Pellentesque mollis eros vel mattis tempor.
                                            Aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Pellentesque vel volutpat felis, eu condimentum massa.
                                            Pellentesque mollis eros vel mattis tempor. Aliquam
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div className="panel sauget-accordion">
                                  <div className="panel-heading" role="tab" id="headingTwo">
                                      <h4 className="panel-title">
                                          <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#billingInformation" aria-expanded="false" aria-controls="billingInformation">
                                              Staking
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="billingInformation" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                      <div className="panel-body">
                                          <p>
                                            All Flash token holders can stake their tokens and earn interest. The minimum requirement is to hold tokens for a period of at least 15 days, greater than or equal to the “Min Coin Age”, in any wallet that they have access to private keys.
                                          </p>

                                          <div className="row">
                                              <div className="col-lg-5 col-md-5 col-xs-12">
                                                  <div className="feature-list featured-right">
                                                      <div className="single-features-list mb-52">
                                                          <div className="feature-list-text">
                                                              <h2><b>100%</b></h2>
                                                              <p>1st year interest</p>
                                                          </div>
                                                      </div>
                                                      <div className="single-features-list mb-52">
                                                          <div className="feature-list-text">
                                                              <h2><b>50%</b></h2>
                                                              <p>2nd year interest</p>
                                                          </div>
                                                      </div>
                                                      <div className="single-features-list mrn-nn mb-52">
                                                          <div className="feature-list-text">
                                                              <h2><b>10%</b></h2>
                                                              <p>3rd year interest</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-lg-7 col-md-7 col-xs-12">
                                                  <div className="choose-img">
                                                      jdjdj
                                                  </div>
                                              </div>
                                          </div>

                                          <p>
                                            * After the 3rd year, the interest is 10% per year until all 50 million tokens are mined.  The max total supply will
                                            only be reached in about 10 years, after that no more Flash tokens will be generated via Proof-of-Stake.
                                          </p>

                                      </div>
                                  </div>
                              </div>
                              <div className="panel sauget-accordion">
                                  <div className="panel-heading" role="tab" id="headingThree">
                                      <h4 className="panel-title">
                                          <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#shippingMethod" aria-expanded="false" aria-controls="shippingMethod">
                                              Lending
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="shippingMethod" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                      <div className="panel-body">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam </p>
                                      </div>
                                  </div>
                              </div>
                              <div className="panel sauget-accordion">
                                  <div className="panel-heading" role="tab" id="headingFour">
                                      <h4 className="panel-title">
                                          <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#paymentInformation" aria-expanded="false" aria-controls="paymentInformation">
                                              Earn Dividends
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="paymentInformation" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                      <div className="panel-body">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/*
                  <div className="col-md-6">
                      <div className="question-img">
                          <img src="img/bg-img/bg-8.png" alt="">
                      </div>
                  </div>
                  */}
              </div>
          </div>
      </div>
    )
  }
}

QuestionArea.propTypes = {
  // name: PropTypes.string
}

export default (QuestionArea)
