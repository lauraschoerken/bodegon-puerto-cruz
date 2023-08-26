import { useTranslation } from 'react-i18next'
import Header from '../../Header/containers/Header'
import MenuElement from '../../elements/MenuElement/MenuElement'
import SectionBanner from '../../elements/SectionBanner/SectionBanner'
import './HomeComponent.scss'
import React from 'react'

const HomeComponent = () => {
	const { t } = useTranslation()

	return (
		<div className='main'>
			<div className='header'>
				<Header />
			</div>
			<div className='body'>
				<SectionBanner
					title={t('home.title')}
					body={t('home.description')}
					SideComponent={<>ㅤ</>}
					justifyContent='space-around'
					backgroundImage='https://s3-alpha-sig.figma.com/img/adf0/dbff/a4c0afb21f7b08e8a81a363f60fdfe25?Expires=1693180800&Signature=lVadcBYplTmlQZueo-HogbiYW-EZgOwLOU5IdhyIzUW-EDTwaMqvfu0S5v7yK1m4jagwWErb0p5Yz066C2aDn8V-BjgztTSKIVZOTzM0x5~HspdWEJYMpzxXS~RwpV~AP3466ANHB0wHfqEcyEd0q4NqK4ebQtKF2nZGUAHqUh2a7Ae6GAWLM-OD~f2SY4P0yAQ5cAicIUJEBHZD~AECawpY8URdfgbG2cERz0JfrDAQrTeqXJJl46PCkWIKkcr7w6ydwhgEaSHj2wPvlB3wZM9m~YVvf6nCmo9yHpAiVAwsjt312vsAnwDvKGAZVLqNrcyB73PNfBM4V9252F14VQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
				/>
				<MenuElement />
			</div>
		</div>
	)
}

export default HomeComponent
