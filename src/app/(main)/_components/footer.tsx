import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='h-20 border-t-2'>
      <div className='h-full mx-auto flex items-center justify-between px-4 lg:px-10 text-sm text-muted-foreground'>
        <span>
          <Link href='/'>Idil Iman</Link>
        </span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
