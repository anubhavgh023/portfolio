import Image from "next/image";

export default function ProjectSection() {
  return (
    <div className="flex gap-5 items-center justify-around border border-slate-500 h-96">
      <ProjectCard projectName="Project 1" imageUrl="/building.png" />
      <ProjectCard projectName="Project 2" imageUrl="/building.png" />
      <ProjectCard projectName="Project 3" imageUrl="/building.png" />
      <ProjectCard projectName="Project 4" imageUrl="/building.png" />
    </div>
  );
}

function ProjectCard({
  projectName,
  imageUrl,
}: {
  projectName: string;
  imageUrl: string;
}) {
  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-lg shadow-lg p-4 h-64 w-72 bg-gray-900 text-white">
      <Image
        src={imageUrl}
        alt={projectName}
        width={100}
        height={144}
        className="rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{projectName}</h3>
      <p className="text-gray-300 mb-4 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
      </p>
      <button className="bg-white text-gray-900 py-2 px-4 rounded hover:bg-gray-300 mt-2">
        Explore
      </button>
      </div>
  );
};
