import React from 'react';
import * as d3 from 'd3'

import './index.css';

export default class Rect extends React.Component{
  constructor(props){
    super(props)
    this.rectRef = React.createRef()
    this.state = {
      x: props.x,
      h: props.h
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.h !== this.props.h){
      console.log('bar did update!')
      console.log('prevProps')
      console.log(prevProps)
      console.log('this.rectRef.current')
      console.log(this.rectRef.current)
      let thisRect = d3.select(this.rectRef.current)
      console.log(thisRect)
      thisRect.attr('x', prevProps.x)
      thisRect.attr('height', prevProps.h)

      thisRect
        .transition()
        .duration(600)
        .ease(d3.easeQuad)
        .attr('x', this.props.x)
        .attr('height', this.props.h)
        //setThis component state after transition
        .on("end", () =>
          this.setState({
            x: this.props.x,
            h: this.props.h
          })
        );
      console.log('- - - - - - - - - - -')
    }
  }

  render(){
    return(
     <rect x={this.state.x} width='10' y='150' height={this.state.h} ref={this.rectRef}/>
    )
  }
}