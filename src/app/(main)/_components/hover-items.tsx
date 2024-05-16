import Link from 'next/link';

type Props = {
  url: string;
  label?: string;
  icon: JSX.Element;
  blogUrl?: boolean;
};
export default function HoverItems({ url, label, icon, blogUrl }: Props) {
  const target = blogUrl ? '_self' : '_blank';
  return (
    <Link target={target} href={url} className='flex items-center justify-center text-black'>
      <div className='bg-slate-100 p-3 hover:opacity-90 text-xs flex items-center justify-center rounded-full cursor-pointer'>
        {icon}
      </div>
    </Link>
  );
}
