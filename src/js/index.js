/**
 * Main app entry
 */

/* Import styles */
import styles from "../scss/styles.scss"

/* Import theme JS */
import ThemeManager from "./theme"

/**
 * When the document is ready, begin any initialization that
 * needs to take place
 */
document.addEventListener("DOMContentLoaded", () => {
	const themeManager = new ThemeManager()
	themeManager.setInitialTheme()
	themeManager.listen()
})
