import React from 'react'
import './LocationElement.scss'
import SectionBanner from '../SectionBanner/SectionBanner'
import { secondary_background, third_background } from '../../../utilities/colors'
import { useTranslation } from 'react-i18next'

const LocationElement = () => {
	const { t } = useTranslation()

	const navigateToLocation = () => {
		console.log('navigate to location')
	}
	return (
		<SectionBanner
			title={t('locationElement.title')}
			body={t('locationElement.description')}
			buttonText={t('locationElement.button')}
			buttonClick={navigateToLocation}
			SideComponent={
				<div className='location-element-images'>
					<p>Mapa</p>
				</div>
			}
			justifyContent='space-around'
			textColor='black'
			backgroundColor={third_background}
		/>
	)
}

export default LocationElement
