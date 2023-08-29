/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'image-1': "url('./assets/images/Sky.jpg')",
				'image-2': "url('./assets/images/artistic.jpg')",

				// 'image-2': "url('/path/to/image-2.jpg')",
			},
		},
	},
	plugins: [],
};
