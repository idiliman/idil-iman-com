import { cn } from '@/lib/utils';
import SidebarRoutes from './sidebar-routes';
import Header from './header';
import { Separator } from '../ui/separator';

type Props = {
  className?: string;
};

export default function Sidebar({ className }: Props) {
  return (
    <div
      className={cn('flex flex-col lg:w-[256px] lg:fixed px-4 left-0 top-0 border-r-2 h-full bg-zinc-50', className)}
    >
      <div className='p-4 flex flex-col space-y-4 pt-[50px]'>
        <Header />
        <Separator />
        <SidebarRoutes
          title='Contact'
          links={[
            { href: 'mailto:idil.iman1999@gmail.com', label: 'Mail' },
            { href: 'https://www.linkedin.com/in/idil-iman/', label: 'Linkedin' },
            { href: 'https://github.com/idiliman', label: 'Github' },
          ]}
        />
      </div>
    </div>
  );
}
