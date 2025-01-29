import Projects from "./_components/projects";
import Section from "./_components/section";

export default async function Home() {
  return (
    <main className="">
      <Section title="Hobbies">
        <Projects />
      </Section>
    </main>
  );
}
