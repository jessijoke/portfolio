import React, { Component } from 'react';
import DevComponent from './DevComponent';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        console.log(projects.techologies)
        var projectImage = 'images/portfolio/' + projects.image;
        
        return (
          <div key={projects.title}>
            <DevComponent ptitle={projects.title} purl={projects.url} pimage={projectImage} pdescript={projects.category} pgit={projects.github} pyoutube={projects.youtube} ptech1={projects.technology1} ptech2={projects.technology2} ptech3={projects.technology3} ptech4={projects.technology4} ptech5={projects.technology5}/>
          </div>

          /*
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title} target="_blank">
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              </a>
            </div>
            <div><a href={projects.github}>View on Github</a></div>
          
          </div>
          */
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Development</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
