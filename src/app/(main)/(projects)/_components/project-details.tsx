import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  title: string;
  description?: string;
  paragraphs: JSX.Element[];
  tools?: string[] | undefined;
};

export default function ProjectDetails({ description = '', paragraphs, title, className, tools }: Props) {
  return (
    <div className={cn(className)}>
      <div className='text-left'>
        <h1 className='text-4xl mb-2 font-semibold text-zinc-600'>{title}</h1>
        <p className='text-muted-foreground'>{description}</p>
      </div>
      <Separator className='my-4' />
      <div className='flex flex-col space-y-3 text-zinc-500'>{paragraphs}</div>
      <Separator className='my-4' />
      <div className='flex flex-col space-y-2 text-sm'>
        <h2>Tools</h2>
        <ul className='text-muted-foreground flex flex-col space-y-1'>
          {tools?.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
