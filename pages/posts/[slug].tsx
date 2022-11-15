import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import sanityClient from "../../sanityClient";
import React from "react";

// interface Dados {
// 	_id: string;
// 	title: string;
// 	gostos: number;
// 	resumo: string;
// 	cover: string;
// }

const PostItem: NextPage = ({ _id, title, gostos, resumo, cover }: any) => {
	// console.log(posts);
	const [gostoState, setGosto] = React.useState(gostos);

	const addGosto = async () => {
		const { gostos: newGosto } = await fetch("/api/handle-gosto", {
			method: "POST",
			body: JSON.stringify({ _id }),
		}).then((res) => res.json());

		setGosto(newGosto);
	};

	return (
		<main>
			<h1>================= {title} =====================</h1>

			{/* <Image src={post.cove	} /> */}
			<article>
				<p>{resumo}</p>
			</article>

			<button
				onClick={addGosto}
				className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
			>
				{gostoState} Gostos
			</button>
			<hr></hr>
		</main>
	);
};

export async function getStaticProps({ params }: any) {
	const slug = params.slug;

	const [post] = await sanityClient.fetch(`
	*[_type == 'posts' && slug.current == '${slug}']
	{
		_id,
		title,
		cover,
		resumo,
        gostos
	}
	`);

	return {
		props: {
			...post,
		},
	};
}

export async function getStaticPaths() {
	const posts = await sanityClient.fetch(`
        *[_type == 'posts']
        {
            'slug': slug.current
        }
    `);

	return {
		paths: posts.map(({ slug }: any) => `/posts/${slug}`),
		fallback: false,
	};
}

export default PostItem;
