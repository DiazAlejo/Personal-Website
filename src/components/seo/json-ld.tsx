interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          payload.length === 1 ? payload[0] : { "@context": "https://schema.org", "@graph": payload },
        ),
      }}
    />
  );
}

export { JsonLd };
