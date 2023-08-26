import Home from './components/Home/containers/Home'
import './App.scss'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'

function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<Home />
		</I18nextProvider>
	)
}

export default App
