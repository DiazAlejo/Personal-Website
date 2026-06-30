import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/seo/constants";
import type { AskAiContent } from "@/types/content";

export const askAi: AskAiContent = {
  heading: "Ask AI about me",
  prompt: `Who is Alejandro Díaz? ${site.headline} ${site.supportingStatement} Full project and experience details: ${getSiteUrl()}/llms.txt`,
  providers: [
    {
      name: "Claude",
      baseUrl: "https://claude.ai/new",
      label: "Ask Claude about Alejandro Díaz",
    },
    {
      name: "ChatGPT",
      baseUrl: "https://chatgpt.com/",
      label: "Ask ChatGPT about Alejandro Díaz",
    },
    {
      name: "Perplexity",
      baseUrl: "https://www.perplexity.ai/",
      label: "Ask Perplexity about Alejandro Díaz",
    },
  ],
};
