import Link from "next/link";
import { Separator } from "../ui/separator";

type Props = {
  className?: string;
  title: string;
  links: { href: string; label: string }[];
};

export default function SidebarRoutes({ className, title, links = [] }: Props) {
  return (
    <>
      <div>
        <h1 className="text-zinc-400 tracking-wide">{title}</h1>
        <ul className="flex flex-col space-y-1">
          {links.map((link) => (
            <Link
              target="_blank"
              key={link.label}
              href={link.href}
              className="text-zinc-600 hover:text-zinc-400 transition text-sm"
            >
              <li>{link.label}</li>
            </Link>
          ))}
        </ul>
      </div>
      <Separator />
    </>
  );
}
