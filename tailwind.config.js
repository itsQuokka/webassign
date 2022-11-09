/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: ['./pages/**/*.{html,js,jsx}', './components/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'20/80': '20% 80%',
				fixed: '40px 260px',
				'80/20': '80% 20%',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [],
};
