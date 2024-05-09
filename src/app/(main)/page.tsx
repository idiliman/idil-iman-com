import Header from './_components/header';
import Projects from './_components/projects';

export default function Home() {
  return (
    <div className='p-4 md:p-7 flex flex-col flex-1 pt-20 lg:pt-6 max-w-7xl mx-auto'>
      <Header />
      <Projects />
    </div>
  );
}
