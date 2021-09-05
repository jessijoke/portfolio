import React, { Component } from 'react';
import './devComponentStyles.css';

class DevComponent extends Component {
    constructor(props) {
        super()
    }
    //ptitle={projects.title} purl={projects.url} pimage={projectImage} pdescript={projects.category}

    liveSite = () => {
        if (this.props.purl) {
            return <a href={this.props.purl} target="_blank" className="button btn project-btn"><i className="fa fa-globe"></i> Live Site</a>
        }
    }

    youtubeBtn = () => {
        if (this.props.pyoutube) {
            return <a href={this.props.pyoutube} target="_blank" className="button btn project-btn"><i className="fa fa-youtube"></i> Youtube</a>
        }
    }

    render() {
        return(
            <div className="projectContainer">
                <h2>{this.props.ptitle}</h2>
                <div className="section1Container">
                    <div className="screenShot">
                        <img src={this.props.pimage} />
                    </div>
                    <div className="technologies">
                    {this.liveSite()}

                        <h3>Project Features/Technology</h3>
                        <ul>
                            <li>{this.props.ptech1}</li>
                            <li>{this.props.ptech2}</li>
                            <li>{this.props.ptech3}</li>
                            <li>{this.props.ptech4}</li>
                            <li>{this.props.ptech5}</li>
                        </ul>
                        <a href={this.props.pgit} target="_blank" className="button btn github-btn"><i className="fa fa-github"></i> Github</a>
                        {this.youtubeBtn()}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default DevComponent;