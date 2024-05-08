import Link from 'next/link';
import { Playfair } from 'next/font/google';

const font = Playfair({ subsets: ['latin'] });

export default function Logo() {
  return (
    <div className='bg-zinc-100 w-[100px] h-[50px] flex items-center rounded-sm justify-center hover:shadow-sm transition'>
      <Link href={'/'} className='text-zinc-700 text-center hover:text-zinc-600 transition text-lg'>
        <h1 className={font.className}>Idil Iman</h1>
      </Link>
    </div>
  );
}
