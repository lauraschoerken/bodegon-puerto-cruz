import Header from '../../Header/containers/Header'
import './HomeComponent.scss'
import React from 'react'

const HomeComponent = () => {
	return (
		<div className='main'>
			<div className='header'>
				<Header />
			</div>
			<div className='body'>
				<div className='welcome'>
					<div>
						{' '}
						<h2>Bienvenido al Bodegón Puerto de la Cruz</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
							dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
							nascetur ridiculus mus.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeComponent
