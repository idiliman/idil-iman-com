import { site } from "@/lib/site";

export function Experience() {
  const items = site.experience;

  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-serif text-lg italic text-primary">
        Experience<span>.</span>
      </h3>
      <div className="flex flex-col">
        {items.map((item, index) => {
          const row = (
            <>
              <div className="flex items-baseline gap-2">
                <span className="font-medium group-hover:underline">
                  {item.company}
                </span>
                <span className="text-sm text-muted">{item.role}</span>
              </div>
              <span className="shrink-0 text-sm text-muted/60">
                {item.period}
              </span>
            </>
          );

          const className =
            "flex items-baseline justify-between gap-4 py-2 motion-safe:animate-fade-in";

          if ("url" in item && item.url) {
            return (
              <a
                key={item.company}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${className}`}
                style={{ animationDelay: `${index * 40}ms` }}
              >
                {row}
              </a>
            );
          }

          return (
            <div
              key={item.company}
              className={className}
              style={{ animationDelay: `${index * 40}ms` }}
            >
              {row}
            </div>
          );
        })}
      </div>
    </div>
  );
}
