import React , { Component } from "react";
export default class  extends Component{
    render(){
        return  <div className="summaryClass">

                    <h2>
                        <div className="movieTitle ">{this.props.title}</div>
                    </h2>
                    
                    <div className="moviePanel">
                        <img className="imageClass" src={this.props.imagecontent} alt="" style={this.props.specialstyle}/>

                        <div className="contentPanel">
                            <div className="description">
                            <strong>Synopsis:</strong> {this.props.desc}
                            </div>
                            <div className="stars">
                            <strong>Stars: </strong>{this.props.stars}
                            </div>
                            <div className="director">
                            <strong>Director: </strong>{this.props.director}
                            </div>
                        </div>
        
                        
                    </div>
                    
                  
                </div>
        
        
          
    }
};