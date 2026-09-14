import { site } from "../data/site";

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${site.url}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
