import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto p-12">
      {/* Header */}
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-bold">hi,</h1>
        <p className="text-lg max-w-2xl">
          I&apos;m a fullstack developer, can do Ai stuff, can do backend stuff, can do frontend stuff, can do devops
          stuff.
        </p>
      </div>
      <Separator className="my-12" />
      <Section
        title="Hobbies"
        description="Personal projects, side projects, and other stuff."
      >
        <div className="flex flex-col space-y-4">
          <Link
            prefetch={false}
            href="https://github.com/idiliman/idiliman.com"
            target="_blank"
            className="hover:underline"
          >
            <p>Project 1</p>
          </Link>
        </div>
      </Section>
    </div>
  );
}

function Section({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-lg max-w-2xl">{description}</p>
      {children}
    </div>
  );
}
