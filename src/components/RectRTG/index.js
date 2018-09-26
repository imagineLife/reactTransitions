import React from 'react';
import * as d3 from 'd3'
import './index.css';
import { Transition } from 'react-transition-group';

export default class Rect extends React.Component{
  constructor(props){
    super(props)
    this.rectRef = React.createRef()
    this.state = {
      x: props.x,
      h: props.h
    }

    this._exit = this._exit.bind(this)
  }

  componentWillUnMount(){
    console.log('unMounting!')
  }

  componentDidUpdate(prevProps, prevState){
    console.log('RECT CDU animation')
    if(prevProps.h !== this.props.h){
      let thisRect = d3.select(this.rectRef.current)
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
    }
  }

  _exit(){
    console.log('RECT EXIT called!')
  }

  _enter(){
    console.log('RECT ENTER called!')
  }

  componentWillLeave(){
    console.log('leaving...')
  }


  render(){
    console.log('RECT RENDERING PROPS')
    console.log(this.props)
    return(
        <Transition in={this.props.myin} timeout={1000} onExit={this._exit} onEnter={this._enter} unmountOnExit>
        {(state) => {
          console.log('- - - - -')
          console.log('PARENT?! transition state...');
          console.log(state);
          console.log('- - - - -')
          return <rect x={this.state.x} width='10' y='150' height={this.state.h} ref={this.rectRef}/>
        }}
        </Transition>
    )
  }
}