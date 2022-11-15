import type { NextPage } from "next";
import Layout from "../../components/Layout";
import sanityClient from "../../sanityClient";

const Posts: NextPage = ({ posts }: any) => {
	return (
		<Layout>
			{/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
			{posts.map((value: any, index: any) => (
				<div key={index}>
					<h1>
						<a href={`/posts/${value.slug}`}>{value.title}</a>
					</h1>
				</div>
			))}
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
		subtitle,
		'imagem': cover.asset->url,
		resumo
	}[0...10]
	`);

	return {
		props: {
			posts,
		},
	};
}

export default Posts;
