import React, { Component } from 'react'
import './index.css'
export default class FlexToCenter extends Component {
	render() {
		const {style,children} =this.props
		return (
			<div className='btn'>
				<button style={{...style,...children[0].props.style}}>{children[1]}</button>
			</div>
		)
	}
}
