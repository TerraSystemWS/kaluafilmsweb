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
			options: {
				hotspot: true,
			},
		},
		{
			name: "destaque",
			type: "boolean",
			title: "Destaque",
			description: "Apresentaçao permanente na pagina principal do site",
		},
		{
			name: "pposition",
			type: "document",
			title: "Posiçao",
			description:
				"Posiçao na pagina inicial, inicia-se apartir de 1 como inicio da pagina",
			fields: [
				{
					title: "Posiçao no site",
					name: "position",
					type: "number",
					options: {
						list: [
							{
								title: "Posiçao 1",
								value: 0,
							},
							{
								title: "Posiçao 2",
								value: 1,
							},
							{
								title: "Posiçao 3",
								value: 2,
							},
							{
								title: "Posiçao 4",
								value: 3,
							},
						],
					},
				},
			],
		},
	],
};
