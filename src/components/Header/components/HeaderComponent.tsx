import React from 'react'
import './HeaderComponent.scss'
import { useTranslation } from 'react-i18next'

const HeaderComponent = () => {
	const { t } = useTranslation()

	return (
		<header className='header'>
			<h1>Bodegon Puerto Cruz</h1>
			<nav className='nav-links'>
				<a href='/home'>{t('header.home')}</a>
				<a href='/menu'>{t('header.menu')}</a>
				<a href='/location'>{t('header.location')}</a>
				<a href='/contact'>{t('header.contact')}</a>
				<a href={t('header.lenguaje.spanish')}>
					<img
						src='https://s3-alpha-sig.figma.com/img/6c6c/ab73/2eca65b6f9e51b9ddc6f69059cc59132?Expires=1693180800&Signature=Y3yK2SGLBurNuFDooG0o76PjGZzB5io9mdQBhXi78WRp3d3OhGfKxPGvYI6Vvjhg9Ci97Q2wfFZ5OKMekEusIkOAnW2QyZWCWbRRJgyIesJS49ll9sc5EU-2DUErfiRVwvZZBgui-zWiJI9HYqluaglCUAksnyo~FryUXhYKkO1mPnULjstYyH2lSignEu2iP5Mdngri2KnRMsLxzd7dnElwMzGmqFh2xVEDgwq2iys3MpShgWY1sZxKTp0orrcldFZQ4PNDJoxIZjZrxPO3jKXJ33cSdkY8qgJgceOGViA1y7bGIM-cfl9TMdWZmZNrU8RsPmsT7~fSRMk1h-Mn5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
						alt={t('header.lenguaje.spanish')}
						className='lenguaje'
					/>
				</a>
				<a href={t('header.lenguaje.german')}>
					<img
						src='https://s3-alpha-sig.figma.com/img/647d/17cf/0e544da41755f3ede93505e912452ed1?Expires=1693180800&Signature=amp0dKvrDikvdj10zI7-C9IkhwyATRBa9zZcaOuEjZtRZMsUrhkF7nAHodSZkH26W9c15kxyGvZq3vMOK6fxTEzJRCC0biPmsngq2odDm3HM5IHXENOYnPLcgRT9S5JVaO2NNvEDAJ6QojW5vB3dbUvDhhslDkWlbpJjJxsrlhSQCEIqmr0Uke3mgYv60ID8n71~~UN5NqTPuoBobwJA5-hW4uIYBs6VoTOcp-1s4nI6gc9ezcSm-pHEztjN3NObG70kdVr5RFAg8Ss7PKg5R~aR0cT7ZvRKBM7ICOGWfzrf4Fnn6VYMHqauswMCZOewnlv3qmWjtwMi4KDFbAPTuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
						alt={t('header.lenguaje.german')}
						className='lenguaje'
					/>
				</a>

				<a href={t('header.lenguaje.english')}>
					<img
						src='https://s3-alpha-sig.figma.com/img/a363/8dff/b6150f781750bcfbedb64778bb4b58cd?Expires=1693180800&Signature=B0EbAsVCwne8HpClZfAybqSxsiX0SEfG~FoyLAu2fmL4hP4wOMImIqsZPpG3EHqAoXiuuWr9OloRIHp9q707laBZ~l0rqbGcMY9facLL17Iq-VLrrDD-oE7Kh3VOtHwzpusaLdDAvOVl3hRDu24~R4M6-6mVYolTuGEPKW38nRRE2NZoA1UZKBj71vl~8IFK7BGqZ2dNudSVO334WipB-qNAew3znUXOjUI7mxM1wjU2Ps0rZAW4RAIn9pufizsMm9l-RNN4MW93OepsqwVNyMR4kfv5Fwd~ZVaS8kz2dQwiOu9R-MizUAS5nh7uZI~FMn26KApiqFQ~-dzC51O3zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
						alt={t('header.lenguaje.english')}
						className='lenguaje'
					/>
				</a>
				<a href={t('header.lenguaje.fransh')}>
					<img
						src='https://cdn.icon-icons.com/icons2/3665/PNG/512/france_flag_icon_228673.png'
						alt={t('header.lenguaje.fransh')}
						className='lenguaje'
					/>
				</a>
			</nav>
		</header>
	)
}

export default HeaderComponent
