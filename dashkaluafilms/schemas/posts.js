export default {
	name: "posts",
	type: "document",
	title: "Blog",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Titulo",
			description: "Titulo do post",
		},
		{
			name: "subtitle",
			type: "string",
			title: "SubTitulo",
			description: "Descreva em uma linha este post",
		},
		{
			name: "cover",
			type: "image",
			title: "Capa",
			description: "Imagem de capa para o post",
		},
		{
			title: "Resumo",
			name: "resume",
			type: "text",
			description:
				"escreva o primeiro estrofe do seu post, isso melhora as pesquisas do google e outros",
		},
		{
			title: "Detalhes",
			description: "Crie a sua historia",
			name: "detalhes",
			type: "array",
			of: [{ type: "block" }],
		},
	],
};