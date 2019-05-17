/**
 * Main app entry
 */

// Import styles
import styles from "../scss/styles.scss"

// Import theme manager
import ThemeManager from "./theme-manager"

document.addEventListener("DOMContentLoaded", () => {
	const themeManager = new ThemeManager()
	themeManager.setInitialTheme()
	themeManager.listen()
})
