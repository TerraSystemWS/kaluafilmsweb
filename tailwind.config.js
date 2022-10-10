/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				laranja: "#E74C3C",
				"laranja-claro": "#EB6F62",
				"laranja-escuro": "#e8563b",
				branco: "#FFFFFF",
				preto: "#000000",
				"cinza-claro": "#8A8A8A",
				"cinza-escuro": "#8895B3",
			},
		},
	},
	plugins: [],
};
