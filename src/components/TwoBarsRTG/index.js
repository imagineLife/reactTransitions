import React from 'react';
import './index.css';
import * as d3 from 'd3'
import RectRTG from '../RectRTG'
import { TransitionGroup } from 'react-transition-group';
export default class TwoBars extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			toggled: false,
			in:true,
			selectedH: 1
		}
		
		this.toggleBars = this.toggleBars.bind(this)
	}

	toggleBars(){
		console.log('BUTTON CLICKED!')
		this.setState({
			toggled: !this.state.toggled,
			in: !this.state.in,
			selectedH: (this.state.selectedH === 0) ? 1 : 0
		})
	}

	componentWillUnMount(){
		console.log('unMounting!')
	}

	render(){
		// console.log('toggled?!')
		// console.log(this.state.toggled)
		let xScale = d3.scaleLinear().domain([0,100]).range([50,650])
		let yScale = d3.scaleLinear().domain([0,100]).range([400,50])
		let dummyData = [
			{
				x:'100',
				name:'first',
				togglingH: ['0','300']
			},
			{
				x:'300',
				name:'second',
				togglingH: ['300','200']
			}
		]

		let rects = dummyData.map(d => {
			let thisHeight = d.togglingH[this.state.selectedH];
			console.log('PARENT rect height d...')
			console.log(thisHeight)
			// if(parseInt(thisHeight) > 0){
				return <RectRTG 
					key={d.name}
					x={d.x}
					h={this.state.toggled ? d.togglingH[0] : d.togglingH[1]}
					myin={this.state.in}
				/>	
			// }
			
		})

		return (
			<React.Fragment>
		        <svg className="twoBarsWrapper">
		        	<TransitionGroup component="g" className='gWrapper'>
		            	{rects}
		            </TransitionGroup>
		        </svg>
		        <button onClick={this.toggleBars}>Animate Bars</button>
	        </React.Fragment>
	    );
	}
}