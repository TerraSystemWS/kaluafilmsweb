import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import sanityClient from "../sanityClient";
import Layout from "../components/Layout";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Home: NextPage = ({ posts, destaque, video, testemunho, portfolio }) => {
	// console.log(destaque[0].pposition);

	// css para o portfolio estiloso
	let portfolioCss = [
		"transform scale-110 -rotate-6",
		"transform scale-110 -rotate-6",
		"col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15",
		"transform scale-150 translate-y-11",
		"transform translate-y-24",
		"row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4",
	];

	let destaques: any = [];
	let videos: any = [];
	let testemunhos: any = [];

	destaque.map((value: any, index: any) => {
		// console.log(index);
		destaques[index] = {
			id: index || 0,
			posicao: value.pposition.position,
			title: value.title || "null",
			url: value.imagem.asset.url || "null",
		};
	});

	video.map((value, index) => {
		// console.log(index);
		videos[index] = {
			id: index || 0,
			posicao: value.pposition.position,
			title: value.title || "null",
			url: value.docs.asset.url || "null",
		};
	});

	testemunho.map((value, index) => {
		// console.log(index);
		testemunhos[index] = {
			id: index || 0,
			title: value.title || "null",
			pessoa: value.pessoa,
			desc: value.descricao,
		};
	});

	// criando o portfolio

	// console.log(videos);

	return (
		// <main>
		// 	{/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
		// 	<h1>================= Posts =====================</h1>
		// 	{posts.map((post) => (
		// 		<>
		// 			<article key={post._id}>
		// 				<h2>
		// 					<Link href={`/blog/${post.slug}`}>
		// 						<a>{post.title}</a>
		// 					</Link>
		// 				</h2>
		// 			</article>
		// 			<hr></hr>
		// 		</>
		// 	))}
		// </main>
		<Layout>
			{/* <pre>{JSON.stringify(destaque, null, 2)}</pre> */}
			{/* hero section */}
			<section id="hero" className="">
				{/* flex contaier */}
				<div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-5 space-y-0 md:space-y-0">
					{/* left item */}
					<div className="flex flex-col md-32 space-y-12 md:w-1/2">
						<h1 className="text-4xl font-bold text-center md:text-5xl md:text-center">
							Videos, fotos ou filmes ?
						</h1>
						<p className="text-center text-cinza-claro">
							Queres um up no seu negocio, fazer o mundo conhece-lo ou valorizar
							seus produtos?
							<br />
							Estas a um click do seu Desejo!
						</p>
						<div className="flex justify-center md:justify-center">
							<a
								href="/contatos"
								className="p-3 px-6 pt-2 text-white bg-laranja hover:bg-laranja-claro rounded-full baseline hover:bg- md:block"
							>
								Saiba Mais
							</a>
						</div>
					</div>
					{/* imagem */}
					<div className="md:w-1/2">
						{destaques.map((value, index) => {
							return value.posicao == 1 ? (
								<Image
									key={index}
									src={value.url}
									alt={value.title}
									width={1080}
									height={600}
								/>
							) : (
								""
							);
						})}
					</div>
				</div>
			</section>

			{/* features section */}
			<section id="features">
				{/* container para agrupar as boxes */}
				<div className=" px-5 mx-auto text-start">
					{/* features container */}
					<div className="flex flex-col mt-24 md:flex-row md:space-x-6">
						{/* features 1 */}
						<div className="shadow-2xl mb-6 flex flex-col items-start p-6 space-y-6 rounded-lg md:w-1/3 ">
							<h5 className="text-lg font-bold text-laranja uppercase">
								Videos
							</h5>
							<p className="text-sm text-cinza-claro">
								Qualquer que seja seu objetivo, nossas produções terão grande
								impacto
							</p>
						</div>
						{/* features 2 */}
						<div className="shadow-2xl mb-6 flex flex-col items-start p-6 space-y-6 rounded-lg md:w-1/3 ">
							<h5 className="text-lg font-bold text-laranja uppercase">
								Fotos
							</h5>
							<p className="text-sm text-cinza-claro">
								Atravez de cameras de dispositivos de alta resolução e com as
								novas tecnologias dos drones
							</p>
						</div>
						{/* features 3 */}
						<div className="shadow-2xl mb-6 flex flex-col items-start p-6 space-y-6 rounded-lg md:w-1/3 ">
							<h5 className="text-lg font-bold text-laranja uppercase">
								Profissionalismo
							</h5>
							<p className="text-sm text-cinza-claro">
								Sempre a tempo e respeitando os clientes
							</p>
						</div>
						{/* features 4 */}
						<div className="shadow-2xl mb-6 flex flex-col items-start p-6 space-y-6 rounded-lg md:w-1/3 ">
							<h5 className="text-lg font-bold text-laranja uppercase">
								Qualidade
							</h5>
							<p className="text-sm text-cinza-claro">
								Usando das novas tecnologias e produtos de altaqualidade,
								fornecemos os nossos produtos nas mais variadas resoluções
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* secçao do foto cover */}
			<section className="">
				<div className="w-full h-96 bg-cover bg-center relative">
					{destaques.map((value, index) => {
						return value.posicao == 2 ? (
							// <Image
							// 	key={index}
							// 	src={value.url}
							// 	alt={value.title}
							// 	width={1080}
							// 	height={600}
							// />
							<img
								src={value.url}
								alt={value.title}
								className="w-full h-full object-cover"
							/>
						) : (
							""
						);
					})}
				</div>
			</section>

			{/* seccao do box para video */}
			<section className="container mx-auto p-4 flex items-center flex-col mb-10">
				<div className="w-fit p-2 mt-10">
					<h1 className="text-4xl md:text-5xl font-bold max-w-2xl text-center">
						Mais Oportunidades Para O Seu Negocio
					</h1>
					<p className="mt-2 text-base font-thin text-center">
						Veja um dos nossos videos abaixo e veja do que somos capazes
					</p>
				</div>
				{videos.map((value, index) => {
					return value.posicao == 1 ? (
						// <Image
						// 	key={index}
						// 	src={value.url}
						// 	alt={value.title}
						// 	width={1080}
						// 	height={600}
						// />
						<video src={value.url} className="w-3/4 h-96 mb-10" controls />
					) : (
						""
					);
				})}
			</section>

			{/* secção dos testemunhos */}
			<section className=" bg-laranja w-ful flex justify-center p-10 h-1/2">
				<div className="slide-container w-2/3">
					<Slide>
						{testemunhos.map((value, index) => (
							<div
								key={index}
								className="each-slide flex justify-center text-center"
							>
								<div>
									<h1 className="text-4xl md:text-5xl font-bold text-branco">
										{value.title}
									</h1>
									<h3 className="text-xl font-thin text-branco">
										{value.pessoa}
									</h3>
									<article className="text-branco text-2xl">
										{value.desc}
									</article>
								</div>
							</div>
						))}
					</Slide>
				</div>
			</section>

			{/* secção do portfolio */}
			<section className="container mx-auto p-4 flex items-center flex-col">
				<div className="w-fit p-2 mt-10">
					<h1 className="text-4xl md:text-5xl font-bold max-w-2xl text-center">
						Siga Alguns Dos Nossos Trabalhos
					</h1>
					<p className="mt-2 text-xl font-thin text-center">
						Entre fotos e videos com cameras e drones
					</p>
				</div>
				<div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
					{portfolio.map((value, index) => (
						<div key={index} className={portfolioCss[index]}>
							<Image
								src={value.imagem}
								alt={value.title}
								loading="lazy"
								width={500}
								height={300}
							/>
						</div>
					))}
					{/* <div className="transform scale-110 -rotate-6"> 
						<img
							src="https://tailwindcss.com/_next/static/media/5.e8ff4aa4.jpg"
							alt=""
							loading="lazy"
						/>
					</div>
					<div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
						<img
							src="https://tailwindcss.com/_next/static/media/5.e8ff4aa4.jpg"
							alt=""
							loading="lazy"
						/>
					</div>
					<div className="transform scale-150 translate-y-11">
						<img
							src="https://tailwindcss.com/_next/static/media/5.e8ff4aa4.jpg"
							alt=""
							loading="lazy"
						/>
					</div>
					<div className="transform translate-y-24">
						<img
							src="https://tailwindcss.com/_next/static/media/5.e8ff4aa4.jpg"
							alt=""
							loading="lazy"
						/>
					</div>
					<div className="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
						<img
							src="https://tailwindcss.com/_next/static/media/5.e8ff4aa4.jpg"
							alt=""
							loading="lazy"
						/>
					</div>*/}
				</div>
			</section>

			{/* secçao de subscriçao */}
			<section id="subs" className="bg-laranja">
				<div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
					<h2 className="uppercase text-2xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl">
						Subscreva para estar a par das novidades
					</h2>
					{/* formulario de subscriçao */}
					<div>
						<input
							className="border border-branco text-laranja font-bold rounded-l-full w-1/2 py-2"
							placeholder="Subscreva seu E-mail"
						></input>
						<button className="border border-branco uppercase rounded-r-full font-bold text-branco hover:bg-laranja-claro w-1/2 py-2">
							Subscrever
						</button>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export async function getStaticProps() {
	/*
	const posts = await sanityClient.fetch(`
	*[_type == 'posts']
	{
		_id,
		'slug': slug.current,
		title,
		cover,
		resumo
	}
	`);
*/
	const destaque = await sanityClient.fetch(`
	*[_type == 'galeria' && destaque] | order(_createdAt desc)
	{
		title,
		pposition,
		destaque,
			imagem{
			asset->{
				_id,
				url
			}
		}
	}
	`);

	const video = await sanityClient.fetch(`
	*[_type == 'documentos' && destaque] | order(_createdAt desc)
	{
		title,
		pposition,
		destaque,
		docs{
			asset->{
				_id,
				url
			}
		}
	}
	`);

	const testemunho = await sanityClient.fetch(`
	*[_type == 'testemunhos'] | order(_createdAt desc)
	{
		title,
		pessoa,
		descricao
	}
	`);

	const portfolio = await sanityClient.fetch(`
	*[_type == 'galeria'] | order(_createdAt desc)
	{
		title,
		"imagem": imagem.asset->url
	}[0...6]
	`);

	// console.log("portfolio: ");
	// console.log(portfolio);

	return {
		props: {
			// posts,
			destaque,
			video,
			testemunho,
			portfolio,
		},
	};
}

export default Home;
