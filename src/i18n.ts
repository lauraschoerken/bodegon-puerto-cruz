import i18n, { Module } from 'i18next'
import { initReactI18next } from 'react-i18next'
import general_en from './locales/en/general.json'
import general_es from './locales/es/general.json'
import general_fra from './locales/fra/general.json'
import general_deu from './locales/deu/general.json'

const resources = {
	es: {
		general: general_es,
	},
	en: {
		general: general_en,
	},
	fra: {
		general: general_fra,
	},
	deu: {
		general: general_deu,
	},
}

const languageDetector = {
	type: 'languageDetector',
	async: true,
	detect: (callback: (lng: string) => void) => {
		const lang = navigator.language
		callback(lang)
		return lang
	},
}

i18n
	.use(languageDetector as Module)
	.use(initReactI18next)
	.init({
		defaultNS: 'general',
		fallbackLng: ['es', 'en', 'fra', 'deu'],
		interpolation: {
			escapeValue: false,
		},
		returnNull: false,
		resources,
	})

export default i18n
