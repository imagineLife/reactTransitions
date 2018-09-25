import React from 'react';
import './index.css';
import * as d3 from 'd3'
import Rect from '../Rect'
export default class TwoBars extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			toggled: false
		}
		
		this.toggleBars = this.toggleBars.bind(this)
	}

	toggleBars(){
		console.log('toggling bars!')
		this.setState({toggled: !this.state.toggled})
	}

	render(){
		console.log('toggled?!')
		console.log(this.state.toggled)
		let xScale = d3.scaleLinear().domain([0,100]).range([50,650])
		let yScale = d3.scaleLinear().domain([0,100]).range([400,50])
		let dummyData = [
			{
				x:'100',
				name:'first',
				togglingH: ['200','300']
			},
			{
				x:'300',
				name:'second',
				togglingH: ['300','200']
			}
		]

		let rects = dummyData.map(d => {
			return <Rect 
				key={d.name}
				x={d.x}
				h={this.state.toggled ? d.togglingH[0] : d.togglingH[1]}
			/>
		})

		return (
			<React.Fragment>
		        <svg className="twoBarsWrapper">
		            {rects}
		        </svg>
		        <button onClick={this.toggleBars}>Animate Bars</button>
	        </React.Fragment>
	    );
	}
}