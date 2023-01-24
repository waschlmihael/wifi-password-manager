export const theme_base = Object.freeze({
	color__primary: '#0700DD',
	color__accent: '#00F2FF',
	color__dark: '#14171A',
	color__white: '#FFFFFF',
	color__light_gray: '#FAFAFA',
	color__dark_gray: '#808080',
	color__orange: '#F05524',
	color__linear_gradient_bg: 'linear-gradient(130deg, #0700DD 0%, #00f2ff 89%)}',
	color__linear_gradient_nav: 'linear-gradient(80deg, #0C37F0 11%, #00A4E4 100%)',
	font__heading: '"Montserrat", sans-serif',
	font__body: '"Montserrat", sans-serif',
	transition__default: '450ms ease-in-out all',
	nav__height: '70px',
});


const ThemeType = { ...theme_base};

export type ThemeType = typeof ThemeType;