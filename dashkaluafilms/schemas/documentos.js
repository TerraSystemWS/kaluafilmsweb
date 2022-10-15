export default {
	name: "documentos",
	type: "document",
	title: "Videos & Documentos",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Titulo",
			description: "Crie um titulo para o documento ou video",
		},
		{
			title: "Descriçao",
			name: "descricao",
			type: "text",
			description: "Crie uma historia para esse documento ou video",
		},
		{
			name: "docs",
			type: "file",
			title: "Documento ou Video",
			description:
				"Faz upload do documento(pdf, docx, etc) ou video (mpeg, mp4, etc)",
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
