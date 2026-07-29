type PersonJsonLdProps = Readonly<{
  name: string;
  jobTitle: string;
  description: string;
  websiteUrl: string;
  email: string;
  location: {
    locality: string;
    country: string;
  };
  sameAs?: readonly string[];
}>;

function createPersonJsonLd({
  name,
  jobTitle,
  description,
  websiteUrl,
  email,
  location,
  sameAs = [],
}: PersonJsonLdProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${websiteUrl}#person`,
    name,
    url: websiteUrl,
    email: `mailto:${email}`,
    jobTitle,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.locality,
      addressCountry: location.country,
    },
    sameAs,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": websiteUrl,
    },
  };
}

export function PersonJsonLd(props: PersonJsonLdProps) {
  const structuredData = createPersonJsonLd(props);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
