import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { generateLlmsTxt } from "seo-core";
import { ARTICLES_BASE, SITE_NAME, SITE_TAGLINE, SITE_URL } from "../config/site";

export const GET: APIRoute = async () => {
  const articles = (await getCollection("articles", ({ data }) => data.draft !== true)).sort(
    (a, b) => (b.data.updatedDate || b.data.date).localeCompare(a.data.updatedDate || a.data.date),
  );
  const team = await getCollection("team");
  const services = (await getCollection("services")).sort((a, b) => a.data.order - b.data.order);

  const body = `${generateLlmsTxt({
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
    siteTagline: SITE_TAGLINE.replace(/\.$/, ""),
    articlesBase: ARTICLES_BASE,
    articles,
    team,
    services,
  })}
## Pages

- [Home](${SITE_URL}/): Rebuild your website for modern search and AI discovery. SEO, AEO, content architecture and analytics from $2,000 plus $250/month.
- [Services](${SITE_URL}/services/): Complete website rebuilds combining technical SEO, AEO, keyword research, content architecture, analytics and ongoing publishing.
- [About](${SITE_URL}/about/): Perfect AI Websites rebuilds underperforming sites for modern discovery across traditional search and AI answer engines.
- [FAQ](${SITE_URL}/faq/): Answers about website rebuilds, SEO, AEO, AI discovery, pricing, content, timing and ownership.
- [Contact](${SITE_URL}/contact/): Tell Perfect AI Websites about your current site. Rebuilds include SEO, AEO, content architecture and initial content for $2,000.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
