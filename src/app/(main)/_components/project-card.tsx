import { FlickeringGrid } from "@/components/fickering-grid";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  image: string | undefined;
  link: string;
}

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.48, 0.15, 0.25, 0.96],
    },
  },
};

const imageVariant = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: [0.48, 0.15, 0.25, 0.96],
    },
  },
};

const textVariant = {
  hover: {
    y: -5,
    transition: {
      duration: 0.4,
      ease: [0.48, 0.15, 0.25, 0.96],
    },
  },
};

export default function ProjectCard({ title, description, year, image, link }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white">
      <Link href={link}>
        <div className="relative aspect-[16/9] overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <FlickeringGrid
              className="z-0 absolute inset-0 size-full"
              squareSize={4}
              gridGap={6}
              color="#6B7280"
              maxOpacity={0.5}
              flickerChance={0.1}
              height={800}
              width={800}
            />
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm text-gray-200">{description}</p>
            </div>
            <span className="text-sm text-gray-300">{year}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
