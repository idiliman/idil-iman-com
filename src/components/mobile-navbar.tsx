import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "./logo";
import { NavLinks } from "@/config/nav-links";

type Props = {
  className?: string;
};

export default function MobileNavbar({ className }: Props) {
  return (
    <div
      className={cn(
        "w-full h-[60px] fixed top-0 z-50 backdrop-blur-sm bg-opacity-10 bg-zinc-100 rounded-sm filter drop-shadow-sm",
        className
      )}
    >
      <div className="flex justify-between items-center w-full px-4  md:px-[27px] text-sm">
        <Logo />
        <ul className="flex space-x-3">
          {NavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition font-semibold hover:font-normal"
            >
              <li>{link.label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
