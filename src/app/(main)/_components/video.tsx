interface Props {
  url: string;
}
export default async function Video({ url }: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <video aria-label='Video player' autoPlay loop muted>
      <source src={url} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
}
