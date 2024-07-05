import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Props {
  text: string;
  href: string;
  className?: string;
}

export default function LinkText({ text, className, href }: Props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Link href={href} target='_blank' className='inline-block'>
      <p className='underline decoration-2 decoration-zinc-400 hover:decoration-zinc-600 transition'>{text}</p>
    </Link>
  );
}
