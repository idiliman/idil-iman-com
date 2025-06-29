import Link from "next/link";
import Logo from "../logo";
import { cn } from "@/lib/utils";
import { NavLinks } from "@/config/nav-links";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row justify-between items-center lg:items-start lg:space-y-6 lg:flex-col border-b lg:p-12 p-6">
      <div className="flex flex-row items-center space-x-4">
        <Logo />
      </div>

      <ul className="flex flex-col space-y-3">
        {NavLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn("transition font-normal hover:font-semibold", pathname === link.href && "font-semibold")}
          >
            <li>{link.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
