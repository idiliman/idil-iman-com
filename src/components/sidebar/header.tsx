import Link from "next/link";
import Logo from "../logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavLinks } from "@/config/nav-links";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-6">
      <Logo />
      <ul className="flex flex-col space-y-3">
        {NavLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="transition font-semibold hover:font-normal"
          >
            <li className={cn(pathname === link.href && "font-normal")}>{link.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
