import React from 'react'
import './ContactElement.scss'
import SectionBanner from '../SectionBanner/SectionBanner'
import { useTranslation } from 'react-i18next'
import TextBlock from '../TextBlock/TextBlock'

const ContactElement = () => {
	const { t } = useTranslation()

	const navigateToContact = () => {
		console.log('navigate to contact')
	}
	return (
		<SectionBanner
			title={t('contactElement.title')}
			body={t('contactElement.description')}
			buttonText={t('contactElement.button')}
			buttonClick={navigateToContact}
			SideComponent={
				<TextBlock
					title={t('contactElement.schedule.title')}
					body={t('contactElement.schedule.description')}></TextBlock>
			}
			justifyContent='space-around'
			textColor='black'
		/>
	)
}

export default ContactElement
