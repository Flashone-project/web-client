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
                     <h1><span>question </span>section</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-6">
                  <div className="faq-accordion">
                     <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <div className="panel sauget-accordion">
                           <div className="panel-heading" role="tab" id="headingOne">
                              <h4 className="panel-title">
                                 <a data-toggle="collapse" data-parent="#accordion" href="#checkoutMethod" aria-expanded="true" aria-controls="checkoutMethod">
                                 How it work?
                                 </a>
                              </h4>
                           </div>
                           <div id="checkoutMethod" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                              <div className="panel-body">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam </p>
                              </div>
                           </div>
                        </div>
                        <div className="panel sauget-accordion">
                           <div className="panel-heading" role="tab" id="headingTwo">
                              <h4 className="panel-title">
                                 <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#billingInformation" aria-expanded="false" aria-controls="billingInformation">
                                 Do I can use tutorial?
                                 </a>
                              </h4>
                           </div>
                           <div id="billingInformation" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                              <div className="panel-body">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam </p>
                              </div>
                           </div>
                        </div>
                        <div className="panel sauget-accordion">
                           <div className="panel-heading" role="tab" id="headingThree">
                              <h4 className="panel-title">
                                 <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#shippingMethod" aria-expanded="false" aria-controls="shippingMethod">
                                 Do I can use video chat?
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
                                 How I can pay a application?
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
               <div className="col-md-6">
                  <div className="question-img">
                     <img src="img/bg-img/bg-8.png" alt=""/>
                  </div>
               </div>
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
