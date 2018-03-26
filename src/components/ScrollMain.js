import React from 'react';
import ReactDOM from 'react-dom';

export default class ScrollMain extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <div className="scroll-text">
          <h2 className="title-text">{this.props.title}</h2>
          <div className="fade-effect-text"></div>
          <div className="body-text">
          {this.props.text}
          </div>
        </div>
      </div>
    )
  }

}
