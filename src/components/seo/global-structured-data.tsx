import { JsonLd } from "@/components/seo/json-ld";
import { buildGlobalStructuredData } from "@/lib/seo/structured-data";

function GlobalStructuredData() {
  return <JsonLd data={buildGlobalStructuredData()} />;
}

export { GlobalStructuredData };
