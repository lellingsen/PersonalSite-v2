import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
	const posts = await getCollection("blog");
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts
			.sort((postA, postB) => postB.data.pubDate - postA.data.pubDate)
			.map((post) => ({
				...post.data,
				link: `/blog/${post.slug}/`,
			})),
	});
}
