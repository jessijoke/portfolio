import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
       var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
    }

    /*<ParticlesBg type="lines" bg={true} />
    <li><a className="smoothscroll" href="#contact">Contact</a></li>*/

    return (
      <header id="home">
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a href="https://github.com/jessijoke" target="_blank"><i className="fa fa-github"></i> Github</a></li>
            <li><a href="https://www.youtube.com/channel/UC9esGz2ZTAjUEuoNMqIFXBw" target="_blank"><i className="fa fa-youtube"></i> Youtube</a></li>
            <li><a href="https://twitter.com/jessicajoyz" target="_blank"><i className="fa fa-twitter"></i> Twitter</a></li>
            <li><a href="https://jessijokes.medium.com/" target="_blank"><i className="fa fa-book"></i> Blog</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               <a href={github} target="_blank" className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
               <a href="https://www.youtube.com/channel/UC9esGz2ZTAjUEuoNMqIFXBw" target="_blank" className="button btn project-btn"><i className="fa fa-youtube"></i>Youtube</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#portfolio"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
