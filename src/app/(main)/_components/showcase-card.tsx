import Image from "next/image";

interface ShowcaseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ShowcaseCard({ title, description, imageSrc, imageAlt }: ShowcaseCardProps) {
  return (
    <div className="mt-8 space-y-4">
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        <div className="flex justify-center">
          <div className="relative w-64 md:w-80 h-64">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="object-contain"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
