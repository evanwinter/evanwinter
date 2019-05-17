/**
 * Main app entry
 */

// Import styles
import styles from '../scss/styles.scss'

// Import theme manager
import ThemeManager from './theme-manager'

import device from 'current-device'

/**
 * When the document is ready, begin any initialization that
 * needs to take place
 */
document.addEventListener('DOMContentLoaded', () => {
	// Instantiate the theme manager, set an initial theme, and listen for
	// subsequent theme changes
	const themeManager = new ThemeManager()
	themeManager.setInitialTheme()
	themeManager.listen()

	const root = document.documentElement
	setTimeout(() => root.style.setProperty('--theme', 'dark'), 1000)

	// Wait longer to animate the button because I think users are more likely
	// to discover it on their own on a non-touchscreen
	const delay = device.mobile() || device.tablet() ? 5000 : 15000
	setTimeout(() => {
		document.querySelector('#secret-button').classList.add('animate')
	}, delay)
})