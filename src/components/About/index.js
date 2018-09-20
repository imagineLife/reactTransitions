import React from 'react';
import './index.css';

export default function About() {
    return ( 
    	<React.Fragment>
	    	<h2>ToDo List & Transitions</h2>
	    	<h3>General Component hierarchy</h3>
	    	<ul className='compHierarchy'>
	    		<li>ToDo - A 'root'-ish 'container' wrapper. This contains the toolbar, the tranistionGroup, and the 'itemsList'...</li>
	    			<ul>
		    			<li>Toolbar - the holder of the input field & the add button</li>
		    			<li><b>**TransitionGroup**</b> - wrapper of the itemsList</li>
		    				<ul>
		    					<li>ItemsList
		    						<p>This is a variable, compile earlier in the render method of the ToDo 'container'. This ItemsList is made up of the CSSTransition component wrapping the Item Component:</p>
		    						<ul>
		    							<li>
		    								<b>**CSSTransition</b>
		    								<p>This contains the <b>'classNames=move'</b> prop. Here, the cssTransition component automagically contains some 'hidden' classes for addins some css-transitions to new & leaving react components:</p>
		    								<p>move-enter,</p>
		    								<p>move-enter-active,</p>
		    								<p>move-exit,</p>
		    								<p>move-exit-active,</p>
		    								<p>& more...</p>
		    								<ul>
		    									<li>Item</li>
		    								</ul>
		    							</li>

		    						</ul>

		    					</li>
		    				</ul>
	    			</ul>


	    		<li>ItemList - A 'root'-ish wrapper</li>
	    			<ul></ul>
	    	</ul>

	    	<p></p>
	    	<ul></ul>
    	</React.Fragment>
	);
}
