import React, { Component } from 'react'

import FlexToCenter from '../FlexToCenter/'
import './index.css'
export default class Main extends Component {
	render() {
		return (
			<div>
				<h1 className='text-center'>Demo</h1>
				<FlexToCenter style={{color:'red'}}>
                <button style={{
                    width: 100,
                    height: 50,
                    backgroundColor: 'blue',
                    borderRadius: 10
                }}/>
                    Click me
					
				</FlexToCenter>
			</div>
		)
	}
}
