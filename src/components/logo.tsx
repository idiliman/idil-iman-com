import Link from 'next/link';
import { Playfair } from 'next/font/google';

const font = Playfair({ subsets: ['latin'] });

export default function Logo() {
  return (
    <Link href={'/'} className='text-zinc-700 text-center hover:text-zinc-600 transition text-lg'>
      <div className='bg-zinc-100 w-[100px] h-[50px] flex items-center rounded-sm justify-center hover:shadow-sm transition '>
        <h1 className={font.className}>Idil Iman</h1>
      </div>
    </Link>
  );
}
