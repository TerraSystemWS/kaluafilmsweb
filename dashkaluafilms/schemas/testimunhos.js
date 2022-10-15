export default {
	name: "testemunhos",
	type: "document",
	title: "Testemunhos",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Título",
		},
		{
			name: "pessoa",
			type: "string",
			title: "Pessoa",
			description: "A pessoa que vai testemunhar",
		},
		{
			name: "descricao",
			type: "text",
			title: "Descrição",
			description: "Cita a avaliação do cliente",
		},
	],
};
