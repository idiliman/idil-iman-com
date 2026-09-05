import { Contacts } from "@/components/contacts";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 flex-1">
      <Hero
        title={site.seo.title}
        subtitle={site.seo.subtitle}
        description={site.seo.description}
        picture={site.profile.picture}
      />
      <Experience />
      <Contacts />
    </div>
  );
}
