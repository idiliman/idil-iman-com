import Hero from "@/components/hero";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div>
      <Hero
        title={site.seo.title}
        subtitle={site.seo.subtitle}
        description={site.seo.description}
        picture={site.profile.picture}
      />
    </div>
  );
}
