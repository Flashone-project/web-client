import React, { Component } from 'react'
import DuckImage from '../assets/Duck.jpg'
import HomeArea from './HomeArea'
import ServiceArea from './ServiceArea'
import AboutArea from './AboutArea'
import FeatureArea from './FeatureArea'
import './HomeView.scss'

export class HomeView extends Component {
  state = {}
  render() {
    console.log(HomeArea);
    return (
      <div>
        <HomeArea/>
        <ServiceArea/>
        <AboutArea/>
        <FeatureArea/>


        <div className="download-area bg-oapcity-40 ptb-120 bg-img-3">
           <div className="container">
              <div className="row">
                 <div className="col-md-12 text-center">
                    <div className="title-style title-pb2">
                       <h1><span>Download The app On</span> </h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis.</p>
                    </div>
                    <div className="download-links">
                       <a href="#">
                          <i className="zmdi zmdi-apple"></i>
                          <div className="text fix">
                             <h4>App Store</h4>
                          </div>
                       </a>
                       <a className="res-xs" href="#">
                          <i className="zmdi zmdi-windows"></i>
                          <div className="text fix">
                             <h4>Windows store</h4>
                          </div>
                       </a>
                       <a href="#">
                          <i className="zmdi zmdi-google-play"></i>
                          <div className="text fix">
                             <h4>Play Store</h4>
                          </div>
                       </a>
                    </div>
                 </div>
              </div>
           </div>
        </div>

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





        <div id="toTop">
           <i className="fa fa-chevron-up"></i>
        </div>
      </div>
    )
  }
}


export default HomeView
