export default {
	name: "documentos",
	type: "document",
	title: "Videos & Documentos",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Titulo",
			description: "Crie um toitulo para o documento ou video",
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
	],
};
