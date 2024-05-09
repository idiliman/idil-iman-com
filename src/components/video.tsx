type Props = {
  url: string;
};
export default function Video({ url }: Props) {
  return (
    <video aria-label='Video player' autoPlay loop muted className='h-full w-full'>
      <source src={url} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
}
