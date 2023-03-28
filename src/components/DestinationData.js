import React from "react";
import { Component } from "react";
import "./DestStyles.css";

class DestinationData extends Component {
  render(){
     return(
    <div>
    <div className={this.props.className}> 
        <div className="des-text"> 
          <h2> {this.props.heading} </h2>
          <p> {this.props.text} </p> 
        </div>
        <div className="image">
              <img alt="volcano" src={this.props.img1} />
              <img alt="volcano1" src={this.props.img2} />
        </div>
      </div>
    </div>
  );
  }

}
export default DestinationData;
 

