import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Scroll from 'react-scroll';

var LinkScroll      = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;
var scroller  = Scroll.scroller;



export class PageLayout extends Component {
  constructor (props){
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
      this.state = {
        isStick: false
      }
  }
  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

    window.addEventListener("scroll", this.listenScrollEvent.bind(this));

  }

  listenScrollEvent(e) {
    if (window.scrollY < 1) {
      this.setState({ isStick: false })
    } else {
      if (!this.state.isStick) {
        this.setState({ isStick: true })
      }
    }
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
        scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window.removeEventListener("scroll", this.listenScrollEvent.bind(this));
  }
  render() {
    var stick = "sticker "
    if (this.state.isStick) {
      stick += "stick"
    }
    return (
      <div className="wrapper">
          <header className="header-area">
            <div id="main-menu" className={stick}>
              <div className="container">
               <div className="row">
                 <div className="col-md-12 col-xs-12">
                     <div className="logo float-left navbar-header">
                         <a className="navbar-brand" href="index.html"><h2>FlashOne</h2></a>
                         <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu-2">
                             <i className="zmdi zmdi-menu menu-open"></i>
                             <i className="zmdi zmdi-close menu-close"></i>
                         </button>
                     </div>
                     <div className="main-menu float-right collapse navbar-collapse" id="main-menu-2">
                         <nav>
                             <ul className="menu one-page">
                                 <li>
                                   <LinkScroll activeClass="active" to="home-area" spy={true} offset={-60} smooth={true} duration={500}>HOME</LinkScroll>
                                 </li>
                                 <li>
                                   <LinkScroll activeClass="active" to="about-area" spy={true} offset={-60} smooth={true} duration={500}>About</LinkScroll>
                                 </li>
                                 <li>
                                   <LinkScroll activeClass="active" to="features-area" spy={true} offset={-60} smooth={true} duration={500}>Flash Token</LinkScroll>
                                 </li>
                                 <li>
                                  <LinkScroll activeClass="active" to="screenshort-area" spy={true} offset={-60} smooth={true} duration={500}>Distribution of Tokens</LinkScroll>
                                </li>
                                 <li>
                                  <LinkScroll activeClass="active" to="review-area" spy={true} offset={-60} smooth={true} duration={500}>ICO Structure</LinkScroll>
                                 </li>
                                 <li>
                                   <LinkScroll activeClass="active" to="roadmap-area" spy={true} offset={-60} smooth={true} duration={500}>Road Map</LinkScroll>
                                 </li>
                                 <li><a href="#support-area">support</a></li>
                             </ul>
                         </nav>
                     </div>
                 </div>
               </div>
              </div>
            </div>
          </header>
          {this.props.children}
      </div>
    )
  }
}

PageLayout.propTypes = {}

export default (PageLayout)
