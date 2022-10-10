import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import sanityClient from "../sanityClient";
import Layout from "../components/Layout";

const Home: NextPage = ({ posts }) => {
	// console.log(posts);
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
			{/* hero section */}
			<section id="hero" className="">
				{/* flex contaier */}
				<div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
					{/* left item */}
					<div className="flex flex-col md-32 space-y-12 md:w-1/2">
						<h1 className="max-w-lg text-4xl font-bold text-center md:text-5xl md:text-center">
							Videos, fotos ou filmes ?
						</h1>
						<p className="max-w-lg text-center text-cinza-claro">
							Queres um up no seu negocio, fazer o mundo conhece-lo ou valorizar
							seus produtos?
							<br />
							Estas a um click do seu sonho!
						</p>
						<div className="flex justify-center md:justify-center">
							<a
								href=""
								className="p-3 px-6 pt-2 text-white bg-laranja hover:bg-laranja-claro rounded-full baseline hover:bg- md:block"
							>
								Click
							</a>
						</div>
					</div>
					{/* imagem */}
					<div className="md:w-1/2">
						<Image src="/vercel.svg" alt="foto" width={500} height={500} />
					</div>
				</div>
			</section>

			{/* features section */}
			<section id="features">
				{/* container para agrupar as boxes */}
				<div className="max-w-6xl px-5 mx-auto mt-32 text-center">
					{/* features container */}
					<div className="flex flex-col mt-24 md:flex-row md:space-x-6">
						{/* features 1 */}
						<div className="mb-6 border border-laranja flex flex-col items-center p-6 space-y-6 rounded-lg md:w-1/3 ">
							<Image
								src="/vercel.svg"
								width={100}
								height={100}
								alt="features"
								// className="w-16 -mt-14"
							/>
							<h5 className="text-lg font-bold text-laranja">Kalua films</h5>
							<p className="text-sm text-cinza-claro">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit
							</p>
						</div>
						{/* features 2 */}
						<div className="mb-6 border border-laranja flex flex-col items-center p-6 space-y-6 rounded-lg md:w-1/3 ">
							<Image
								src="/vercel.svg"
								width={100}
								height={100}
								alt="features"
								// className="w-16 -mt-14"
							/>
							<h5 className="text-lg font-bold text-laranja">Kalua films 2</h5>
							<p className="text-sm text-cinza-claro">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit
							</p>
						</div>
						{/* features 3 */}
						<div className="mb-6 border border-laranja flex flex-col items-center p-6 space-y-6 rounded-lg md:w-1/3 ">
							<Image
								src="/vercel.svg"
								width={100}
								height={100}
								alt="features"
								// className="w-16 -mt-14"
							/>
							<h5 className="text-lg font-bold text-laranja">Kalua films 3</h5>
							<p className="text-sm text-cinza-claro">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit
							</p>
						</div>
						{/* features 4 */}
						<div className="mb-6 border border-laranja flex flex-col items-center p-6 space-y-6 rounded-lg md:w-1/3 ">
							<Image
								src="/vercel.svg"
								width={100}
								height={100}
								alt="features"
								// className="w-16 -mt-14"
							/>
							<h5 className="text-lg font-bold text-laranja">Kalua films 4</h5>
							<p className="text-sm text-cinza-claro">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit
							</p>
						</div>
					</div>
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

	return {
		props: {
			posts,
		},
	};
}

export default Home;
