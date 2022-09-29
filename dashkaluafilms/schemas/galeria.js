export default {
	name: "galeria",
	type: "document",
	title: "Galeria",
	fields: [
		{
			title: "Titulo",
			type: "string",
			name: "title",
			description: "Dé um titulo a esta imagem",
		},
		{
			title: "Descriçao",
			name: "descricao",
			type: "text",
			description: "Crie uma historia para esse documento/imagem",
		},
		{
			name: "imagem",
			type: "image",
			title: "Imagem",
			description: "Faz upload da imagem",
		},
	],
};
