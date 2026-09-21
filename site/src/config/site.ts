// Site identity. Placeholder values are replaced at activation.
export const SITE_URL = "https://perfectaiwebsites.com";
export const SITE_NAME = "Perfect AI Websites";
export const SITE_TAGLINE =
  "Websites rebuilt for modern discovery across traditional search and AI answer engines.";
export const SAME_AS: string[] = [];
export const ARTICLES_BASE = "articles";          // URL segment; changing later requires redirects
export const GOOGLE_SITE_VERIFICATION = "";       // rendered as <meta> only when non-empty
export const DEFAULT_AUTHOR = "dori-fussmann";
export const AI_CRAWLERS: Record<string, "allow" | "deny"> = {
  GPTBot: "allow", ClaudeBot: "allow", "Claude-Web": "allow",
  PerplexityBot: "allow", "Google-Extended": "allow", CCBot: "deny",
};
