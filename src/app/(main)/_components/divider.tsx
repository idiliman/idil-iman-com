import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type Props = {
  title: string;
  className?: string;
};

export default function Divider({ title, className }: Props) {
  return (
    <div className={cn('text-xs', className)}>
      <Separator className='my-4' />
      <h1>{title}</h1>
    </div>
  );
}
