import { cn } from '@/lib/utils';
import SidebarRoutes from './sidebar-routes';
import { Separator } from '../ui/separator';

type Props = {
  className?: string;
};

export default function Sidebar({ className }: Props) {
  return (
    <div className={cn('flex flex-col lg:w-[256px] lg:fixed px-4 left-0 top-0 border-r-2 h-full', className)}>
      <div className='p-4 flex flex-col space-y-4'>
        <SidebarRoutes
          title='Works'
          links={[
            { href: '/', label: 'Project 1' },
            { href: '/', label: 'Project 2' },
          ]}
        />
        <SidebarRoutes title='Personal Projects' links={[{ href: '/', label: 'Project 1' }]} />
        <SidebarRoutes
          title='Contact'
          links={[
            { href: 'mailto:idil.iman1999@gmail.com', label: 'Mail' },
            { href: '/', label: 'Linkedin' },
            { href: '/', label: 'CV' },
          ]}
        />
      </div>
    </div>
  );
}
