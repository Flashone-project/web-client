import React, { Component } from 'react'
import DuckImage from '../assets/Duck.jpg'
import HomeArea from './HomeArea'
import ServiceArea from './ServiceArea'
import AboutArea from './AboutArea'
import FeatureArea from './FeatureArea'
import ScreenshortArea from './ScreenshortArea'
import QuestionArea from './QuestionArea'
import NewsletterArea from './NewsletterArea'
import RoadmapArea from './RoadmapArea'
import DownloadArea from './DownloadArea'
import Footer from './Footer'
import './HomeView.scss'
import Scroll from 'react-scroll';

var Element    = Scroll.Element;
var scroll     = Scroll.animateScroll;

export class HomeView extends Component {
  constructor (props){
      super(props);
      this.state = {
        showToTop: false
      }
      this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop() {
    scroll.scrollToTop();
  }

  listenScrollEvent(e) {
    if (window.scrollY > 200) {
      if (!this.state.showToTop) {
        this.setState({ showToTop: true })
      }
    } else {
      if (this.state.showToTop) {
        this.setState({ showToTop: false })
      }
    }
  }

componentDidMount() {
     window.addEventListener("scroll", this.listenScrollEvent.bind(this));
}

componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScrollEvent.bind(this));
}

  render() {
    let styleToTop = { display: (this.state.showToTop) ? 'block' : 'none'}
    return (
      <div ref={'mainWindow'} onScroll={this.listenScrollEvent.bind(this)}>
        <Element name="home-area" >
          <HomeArea/>
        </Element>
        <ServiceArea/>
        <Element name="service-area">
          <AboutArea/>
        </Element>
        <Element name="features-area">
          <FeatureArea/>
        </Element>


        <div className="choose-area pb-70">
            <div className="container">
                <div className="row">
                   <div className="col-md-12 text-center">
                        <div className="title-style title-pb">
                            <h1>Token <span>Specification</span> </h1>
                            <p>Token Address: <a href="https://www.w3schools.com/" target="_blank">0x610c94B8f228b442e411Aebb2191b9fD8d7A3EF0</a></p>
                        </div>
                   </div>
                </div>
                <div className="container">
                   <div className="row text-center">
                       <div className="col-sm-6 col-md-3">
                           <div className="single-features-list mb-52">
                                 <div className="feature-list-icon mx-auto">
                                     <i className="zmdi zmdi-collection-text mx-auto"></i>
                                 </div>
                               <h3 className="ht-pt"><b><span className="timer">50</span> Million</b></h3>
                               <p>max supply</p>
                           </div>
                       </div>
                       <div className="col-sm-6 col-md-3">
                           <div className="single-features-list mb-52">
                                 <div className="feature-list-icon mx-auto">
                                     <i className="zmdi zmdi-collection-text mx-auto"></i>
                                 </div>
                               <h3 className="ht-pt"><b><span className="timer">10</span> Million</b></h3>
                               <p>initial supply</p>
                           </div>
                       </div>
                       <div className="col-sm-6 col-md-3">
                           <div className="single-features-list mb-52">
                                 <div className="feature-list-icon mx-auto">
                                     <i className="zmdi zmdi-collection-text mx-auto"></i>
                                 </div>
                               <h3 className="ht-pt"><b><span className="timer">15</span> Days</b></h3>
                               <p>min coin age</p>
                           </div>
                       </div>
                       <div className="col-sm-6 col-md-3">
                           <div className="single-features-list mb-52">
                                 <div className="feature-list-icon mx-auto">
                                     <i className="zmdi zmdi-collection-text mx-auto"></i>
                                 </div>
                               <h3 className="ht-pt"><b><span className="timer">100</span>% Interest</b></h3>
                               <p>for the first year</p>
                           </div>
                       </div>
                   </div>
                </div>
                <div className="container">
                 <div className="row">
                   <div className="col-lg-4 col-md-6 col-xs-12">
                     <table className="table table-striped">
                       <tbody>
                         <tr>
                           <td>Name</td>
                           <td><b>FlashOne</b></td>
                         </tr>
                         <tr>
                           <td>Symbol</td>
                           <td><b>FLASH</b></td>
                         </tr>
                         <tr>
                           <td>Decimals</td>
                           <td><b>18</b></td>
                         </tr>
                         <tr>
                           <td>Max Total Supply</td>
                           <td><b>50,000,000</b></td>
                         </tr>
                         <tr>
                           <td>Initial Supply</td>
                           <td><b>10,000,000</b></td>
                         </tr>
                         <tr>
                           <td>Min Coin Age</td>
                           <td><b>15 Days</b></td>
                         </tr>
                         <tr>
                           <td>Max Coin Age</td>
                           <td><b>90 Days</b></td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                   <div className="col-lg-4 col-md-6 col-xs-12">
                     1 of 2
                   </div>
                   <div className="col-lg-4 col-md-6 col-xs-12">
                     2 of 2
                   </div>
                 </div>
                </div>
            </div>
        </div>

        <DownloadArea/>
        <Element name="roadmap-area">
          <RoadmapArea/>
        </Element>



        <QuestionArea/>

        <Element name="screenshort-area">
          <ScreenshortArea/>
        </Element>




        <Element name="review-area">
          <div id="review-area" className="ptb-120">
             <div className="container">
                <div className="row">
                   <div className="col-md-12 text-center">
                      <div className="title-style title-pb4">
                         <h1>our <span> client loves</span></h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam </p>
                      </div>
                   </div>
                   <div className="col-md-8 col-md-offset-2">
                      <div className="slider-2">
                         <div className="single-team text-center">
                            <div className="team-image">
                               <img src="img/testimonial/1.png" alt=""/>
                            </div>
                            <div className="team-details">
                               <h3>Salim Rana</h3>
                               <div className="team-social fix">
                                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look. </p>
                               </div>
                               <div className="reating-icon">
                                  <i className="zmdi zmdi-star"></i>
                                  <i className="zmdi zmdi-star"></i>
                                  <i className="zmdi zmdi-star"></i>
                                  <i className="zmdi zmdi-star"></i>
                                  <i className="zmdi zmdi-star-half"></i>
                               </div>
                            </div>
                         </div>
                         <div className="single-team text-center">
                            <div className="team-image">
                               <img src="img/testimonial/1.png" alt=""/>
                            </div>
                            <div className="team-details">
                               <h3>Salim Rana</h3>
                               <div className="team-social fix">
                                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look. </p>
                               </div>
                               <div className="reating-icon">
                                  <i className="zmdi zmdi-star"></i>
                                  <i className="zmdi zmdi-star"></i>
                                  <i className="zmdi zmdi-star"></i>
                                  <i className="zmdi zmdi-star"></i>
                                  <i className="zmdi zmdi-star-half"></i>
                               </div>
                            </div>
                         </div>
                         <div className="single-team text-center">
                            <div className="team-image">
                               <img src="img/testimonial/1.png" alt=""/>
                            </div>
                            <div className="team-details">
                               <h3>Salim Rana</h3>
                               <div className="team-social fix">
                                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look. </p>
                               </div>
                               <div className="reating-icon">
                                  <i className="zmdi zmdi-star"></i>
                                  <i className="zmdi zmdi-star"></i>
                                  <i className="zmdi zmdi-star"></i>
                                  <i className="zmdi zmdi-star"></i>
                                  <i className="zmdi zmdi-star-half"></i>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </Element>

        <div id="pricing-area" className="pricing-area gray-bg ptb-120">
           <div className="container">
              <div className="row">
                 <div className="col-md-12 text-center">
                    <div className="title-style title-pb2">
                       <h1>pricing <span> plan</span></h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam </p>
                    </div>
                 </div>
              </div>
              <div className="row">
                 <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="single-price-package">
                       <div className="price-title">
                          <h3>silver pack</h3>
                       </div>
                       <div className="price">
                          <h4>
                             <span className="text-top">$</span>
                             <span className="text-large">77</span>
                          </h4>
                          <p>
                             <span className="text-bottom">/month</span>
                          </p>
                       </div>
                       <div className="price-list">
                          <ul>
                             <li>Five Website</li>
                             <li>Five User</li>
                             <li>100 GB Bandwidth</li>
                             <li>2 GB Storage</li>
                             <li>24x7 Support</li>
                          </ul>
                          <div className="price-btn">
                             <button className="button" type="button">Sign up</button>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="single-price-package active res-xs">
                       <div className="price-title">
                          <h3>gold pack</h3>
                       </div>
                       <div className="price">
                          <h4>
                             <span className="text-top">$</span>
                             <span className="text-large">77</span>
                          </h4>
                          <p>
                             <span className="text-bottom">/month</span>
                          </p>
                       </div>
                       <div className="price-list">
                          <ul>
                             <li>Five Website</li>
                             <li>Five User</li>
                             <li>100 GB Bandwidth</li>
                             <li>2 GB Storage</li>
                             <li>24x7 Support</li>
                          </ul>
                          <div className="price-btn">
                             <button className="button" type="button">Sign up</button>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="single-price-package">
                       <div className="price-title">
                          <h3>platinum pack</h3>
                       </div>
                       <div className="price">
                          <h4>
                             <span className="text-top">$</span>
                             <span className="text-large">77</span>
                          </h4>
                          <p>
                             <span className="text-bottom">/month</span>
                          </p>
                       </div>
                       <div className="price-list">
                          <ul>
                             <li>Five Website</li>
                             <li>Five User</li>
                             <li>100 GB Bandwidth</li>
                             <li>2 GB Storage</li>
                          </ul>
                          <div className="price-btn">
                             <button className="button" type="button">Sign up</button>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>



        <div className="counter-area text-center ptb-120 fix">
           <div className="col-sm-6 col-md-6 col-lg-3 col-xs-12 counter-res">
              <div className="counter">
                 <div className="icon-coun">
                    <i className="zmdi zmdi-cloud-download"></i>
                 </div>
                 <div className="icon-text">
                    <span className="timer">200</span>
                    <p>downloads</p>
                 </div>
              </div>
           </div>
           <div className="col-sm-6 col-md-6 col-lg-3 col-xs-12 counter-res res-xs2">
              <div className="counter">
                 <div className="icon-coun">
                    <i className="zmdi zmdi-male-female"></i>
                 </div>
                 <div className="icon-text">
                    <span className="timer">150</span>
                    <p>happy client</p>
                 </div>
              </div>
           </div>
           <div className="col-sm-6 col-md-6 col-lg-3 col-xs-12 res-xs3">
              <div className="counter">
                 <div className="icon-coun">
                    <i className="zmdi zmdi-star"></i>
                 </div>
                 <div className="icon-text">
                    <span className="timer">100</span>
                    <p>top rating</p>
                 </div>
              </div>
           </div>
           <div className="col-sm-6 col-md-6 col-lg-3 col-xs-12">
              <div className="counter">
                 <div className="icon-coun">
                    <i className="zmdi zmdi-thumb-up"></i>
                 </div>
                 <div className="icon-text">
                    <span className="timer">50</span>
                    <p>active installs</p>
                 </div>
              </div>
           </div>
        </div>


        <NewsletterArea/>

        {/*<div className="icon-slider-area ptb-110">
           <div className="container">
              <div className="row">
                 <div className="item_all indicator-style3">
                    <div className="col-md-12 single-item2">
                       <a href="#"><img src="img/logo-slider/2.png" alt="" /></a>
                    </div>
                    <div className="col-md-12 single-item2">
                       <a href="#"><img src="img/logo-slider/3.png" alt="" /></a>
                    </div>
                    <div className="col-md-12 single-item2">
                       <a href="#"><img src="img/logo-slider/4.png" alt="" /></a>
                    </div>
                    <div className="col-md-12 single-item2">
                       <a href="#"><img src="img/logo-slider/5.png" alt="" /></a>
                    </div>
                    <div className="col-md-12 single-item2">
                       <a href="#"><img src="img/logo-slider/2.png" alt="" /></a>
                    </div>
                    <div className="col-md-12 single-item2">
                       <a href="#"><img src="img/logo-slider/3.png" alt="" /></a>
                    </div>
                    <div className="col-md-12 single-item2">
                       <a href="#"><img src="img/logo-slider/4.png" alt="" /></a>
                    </div>
                    <div className="col-md-12 single-item2">
                       <a href="#"><img src="img/logo-slider/5.png" alt="" /></a>
                    </div>
                 </div>
              </div>
           </div>
        </div>*/}
        <div id="support-area" className="contact-area gray-bg pt-120">
           <div className="container">
              <div className="row">
                 <div className="col-md-12 text-center">
                    <div className="title-style title-pb">
                       <h1>get in<span> touch</span></h1>
                    </div>
                 </div>
                 <div className="col-md-offset-2 col-md-8 text-center">
                    <div className="contact-from">
                       <form id="contact-form" action="mail.php" method="post">
                          <input name="name" type="text" placeholder="Name"/>
                          <input name="email" type="text" placeholder="Email"/>
                          <textarea name="message" placeholder="Your message"></textarea>
                          <input className="submit" type="submit" value="SUBMIT"/>
                       </form>
                       <p className="form-messege"></p>
                    </div>
                 </div>
              </div>
              <div className="row">
                 <div className="conatct-info fix">
                    <div className="col-md-4 col-sm-4 text-center">
                       <div className="single-contact-info">
                          <div className="contact-icon">
                             <i className="zmdi zmdi-phone"></i>
                          </div>
                          <div className="contact-text">
                             <span>
                             +012 345 678 102
                             <br/>
                             +012 345 678 102
                             </span>
                          </div>
                       </div>
                    </div>
                    <div className="col-md-4 col-sm-4 text-center">
                       <div className="single-contact-info res-xs2">
                          <div className="contact-icon">
                             <i className="zmdi zmdi-globe-alt"></i>
                          </div>
                          <div className="contact-text">
                             <span>
                             <a href="#">urname@email.com </a>
                             <br/>
                             <a href="#">urwebsitenaem.com</a>
                             </span>
                          </div>
                       </div>
                    </div>
                    <div className="col-md-4 col-sm-4 text-center">
                       <div className="single-contact-info">
                          <div className="contact-icon">
                             <i className="zmdi zmdi-pin"></i>
                          </div>
                          <div className="contact-text">
                             <span>
                             ur address goes here,
                             <br/>
                             street,Crossroad123.
                             </span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <Footer/>
        <div id="toTop" style={styleToTop} onClick={this.scrollToTop}>
           <i className="zmdi zmdi-chevron-up"></i>
        </div>
      </div>
    )
  }
}


export default HomeView
