// Import typography library
import Typography from "typography"

const FONTS = ["Space Grotesk", "-apple-system", "system-ui", "sans-serif"]

const typography = new Typography({
	baseFontSize: "16px",
	baseLineHeight: 1.5,
	headerFontFamily: FONTS,
	bodyFontFamily: FONTS,
})

typography.injectStyles()