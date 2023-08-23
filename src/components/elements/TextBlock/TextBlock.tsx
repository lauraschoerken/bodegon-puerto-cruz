import React from 'react'
import './TextBlock.scss'

interface Props {
	title: string
	body?: string
	buttonText?: string
	buttonClick?: () => void
	maxWidth?: string
	textColor?: 'white' | 'black' | string
}

const TextBlock: React.FC<Props> = (props) => {
	const { title, body, buttonText, buttonClick, textColor = 'white', maxWidth = '45%' } = props

	return (
		<div className='text-block-wrapper' style={maxWidth ? { maxWidth } : {}}>
			<h2 style={textColor ? { color: textColor } : {}}>{title}</h2>
			{body && <p style={textColor ? { color: textColor } : {}}>{body}</p>}
			{buttonText && buttonClick && <button onClick={buttonClick}>{buttonText}</button>}
		</div>
	)
}

export default TextBlock
