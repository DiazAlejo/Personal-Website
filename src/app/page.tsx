import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { site } from "@/content/site";

export default function Home() {
  return <PagePlaceholder title={site.name} description={site.description} />;
}
