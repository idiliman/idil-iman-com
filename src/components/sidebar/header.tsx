import { NavLinks } from '@/data';
import Link from 'next/link';
import Logo from '../logo';

export default function Header() {
  return (
    <div className='flex flex-col space-y-6'>
      <Logo />
      <ul className='flex flex-col space-y-3'>
        {NavLinks.map((link) => (
          <Link key={link.label} href={link.href} className='transition font-semibold hover:font-normal'>
            <li>{link.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
