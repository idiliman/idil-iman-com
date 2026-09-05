import Image from "next/image";

export function Hero({
  title,
  subtitle,
  description,
  picture,
}: {
  title: string;
  subtitle: string;
  description: string;
  picture: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Image
          src={picture}
          alt={title}
          width={56}
          height={56}
          className="size-14 shrink-0 rounded-sm object-cover"
          priority={true}
        />

        <div className="flex flex-col gap-0.5">
          <h1 className="font-mono text-lg">{title}</h1>
          <h2 className="font-serif text-xl font-medium text-primary">
            {subtitle}
          </h2>
        </div>
      </div>
      <p className="max-w-prose text-pretty text-sm/6 text-slate-500">
        {description}
      </p>
    </div>
  );
}
