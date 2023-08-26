import React from 'react'
import './MenuElement.scss'
import SectionBanner from '../SectionBanner/SectionBanner'
import { secondary_background } from '../../../utilities/colors'
import { useTranslation } from 'react-i18next'

const MenuElement = () => {
	const { t } = useTranslation()

	const navigateToMenu = () => {
		console.log('navigate to menu')
	}
	return (
		<SectionBanner
			title={t('menuElement.title')}
			body={t('menuElement.description')}
			buttonText={t('menuElement.button')}
			buttonClick={navigateToMenu}
			SideComponent={
				<div className='menu-element-images'>
					<img
						src='https://s3-alpha-sig.figma.com/img/8976/6e6a/2291e97a8b5c5afaf3f292bb6732bc9d?Expires=1693180800&Signature=P9IaXV6GEuBeU7bY5fC5uj7RbyIMIngjR3pRGcfg9MBZk0YgjWbEh2lDfdY3oObwJ~u~vxdH-Zgsi3kB6ANfHsc6DfDwwroys24zaAeCwgH5sJWEm1COQ8lPpu5LMYo5poaPOWq3IiDFMTOFykXCuUFWbTBL4tpMzdRt0-4ipxvcgTE9m~muEa8zfrkxxEHUFiHOUU1ZKqVIVL6pcN7RP2AxHhZkj12J765EwJyTAZ1MyOR504MuM7aou8thhxecvZQ3oARLBV1fzpeSOjB7Rer70nn8sIsfOVRS7y9G3vc17bETYiwfdd0ESPbgXlWZXw7eITUlZjt9NFgY8wumPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
						alt=''
					/>
					<img
						src='https://s3-alpha-sig.figma.com/img/8976/6e6a/2291e97a8b5c5afaf3f292bb6732bc9d?Expires=1693180800&Signature=P9IaXV6GEuBeU7bY5fC5uj7RbyIMIngjR3pRGcfg9MBZk0YgjWbEh2lDfdY3oObwJ~u~vxdH-Zgsi3kB6ANfHsc6DfDwwroys24zaAeCwgH5sJWEm1COQ8lPpu5LMYo5poaPOWq3IiDFMTOFykXCuUFWbTBL4tpMzdRt0-4ipxvcgTE9m~muEa8zfrkxxEHUFiHOUU1ZKqVIVL6pcN7RP2AxHhZkj12J765EwJyTAZ1MyOR504MuM7aou8thhxecvZQ3oARLBV1fzpeSOjB7Rer70nn8sIsfOVRS7y9G3vc17bETYiwfdd0ESPbgXlWZXw7eITUlZjt9NFgY8wumPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
						alt=''
					/>
				</div>
			}
			justifyContent='space-around'
			backgroundColor={secondary_background}
		/>
	)
}

export default MenuElement
