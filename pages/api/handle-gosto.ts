// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// my imports
import sanityClient from "../../sanityClient";

type Data = {
	name: string;
};

sanityClient.config({
	token: process.env.SANITY_WRITE_TOKEN,
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { _id } = JSON.parse(req.body);
	const data = await sanityClient.patch(_id).inc({ gostos: 1 }).commit();

	// res.status(200).json({ name: "John Doe" });
	res.statusCode = 200;
	res.json({ gostos: data.gostos });
}
