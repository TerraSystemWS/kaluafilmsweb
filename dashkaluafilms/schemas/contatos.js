export default {
	name: "contatos",
	type: "document",
	title: "Meus Contatos",
	//__experimental_actions: [, /*"create"*/ "update", /*'delete',*/ "publish"],
	fields: [
		{
			name: "facebook",
			type: "url",
			title: "Facebook",
			description: "Introduza o link para a sua pagina de facebook",
		},
		{
			name: "instagram",
			type: "url",
			title: "Instagram",
			description: "Introduza o link para a sua pagina de Instagram",
		},
		{
			name: "whatsapp",
			type: "url",
			title: "Whatsapp",
			description: "Introduza o link para a sua pagina de Whatsapp",
		},
		{
			name: "youtube",
			type: "url",
			title: "Youtube",
			description: "Introduza o link para a sua pagina de Youtube",
		},
		{
			name: "email",
			type: "string",
			title: "E-mail",
			description: "Introduza o seu endereço de email",
		},
		{
			name: "phone",
			type: "number",
			title: "Contato",
			description: "Introduza seu numero de contato",
		},
	],
};
