import { JsonLd } from "@/components/seo/json-ld";
import { buildProjectPageStructuredData } from "@/lib/seo/structured-data";

interface ProjectStructuredDataProps {
  slug: string;
}

function ProjectStructuredData({ slug }: ProjectStructuredDataProps) {
  const data = buildProjectPageStructuredData(slug);

  if (data.length === 0) {
    return null;
  }

  return <JsonLd data={data} />;
}

export { ProjectStructuredData };
