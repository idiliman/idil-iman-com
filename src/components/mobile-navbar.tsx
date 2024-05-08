import { cn } from '@/lib/utils';
import Link from 'next/link';

type Props = {
  className?: string;
};

export default function MobileNavbar({ className }: Props) {
  const links = [
    { href: '/', label: 'About' },
    { href: '/', label: 'CV' },
  ];
  return (
    <div
      className={cn(
        'w-full h-[50px] fixed top-0 z-50 backdrop-blur-sm bg-opacity-10 bg-zinc-100 border-b-2 rounded-sm backdrop-filter',
        className
      )}
    >
      <div className='flex justify-between items-center w-full px-5 text-sm'>
        <div>
          <Link href={'/'} className='text-zinc-700 hover:text-zinc-600 transition text-sm'>
            <h1>LOGO</h1>
          </Link>
        </div>
        <ul className='flex space-x-3'>
          {links.map((link) => (
            <Link key={link.label} href={link.href} className='text-zinc-700 hover:text-zinc-900 transition'>
              <li>{link.label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
