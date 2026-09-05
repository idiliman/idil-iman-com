import { site } from "@/lib/site";

export function Contacts() {
  const items = site.contacts;

  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-serif text-lg italic">
        Contacts<span className="text-primary">.</span>
      </h3>
      <ul className="flex flex-col">
        {items.map((item, index) => {
          const isExternal = item.href.startsWith("http");

          return (
            <li key={item.label}>
              <a
                href={item.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-baseline justify-between gap-4 py-2 motion-safe:animate-fade-in"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <span className="font-medium group-hover:underline">
                  {item.label}
                </span>
                <span className="shrink-0 text-sm text-muted/60">
                  {item.value}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
