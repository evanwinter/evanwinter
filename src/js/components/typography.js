import Typography from "typography"

const FONTS = ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif']

const typography = new Typography({
	baseFontSize: "16px",
	baseLineHeight: 1.5,
	headerFontFamily: FONTS,
	bodyFontFamily: FONTS,
})

typography.injectStyles()
