import Header from './_components/header';
import Projects from './_components/projects';

export default function Home() {
  return (
    <div className='p-4 md:p-7'>
      <Header />
      <Projects />
    </div>
  );
}
