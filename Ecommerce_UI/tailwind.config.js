/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				bgDesktopHome: 'url("/assets/Photo.svg")',
			},
		},
	},
	plugins: [],
};
