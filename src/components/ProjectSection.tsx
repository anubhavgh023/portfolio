import Image from "next/image";

export default function ProjectSection() {
  return (
    <div className="bg-slate-950 flex flex-col md:flex-row lg:flex-row gap-5 items-center justify-around border border-slate-800 rounded-md p-5 lg:p-10 bg-grid-white/[0.08]">
      <ProjectCard projectName="Building🛠️" imageUrl="/building.png" />
      <ProjectCard projectName="Building🛠️" imageUrl="/building.png" />
      <ProjectCard projectName="Building🛠️" imageUrl="/building.png" />
      <ProjectCard projectName="Building🛠️" imageUrl="/building.png" />
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
    <div className="flex flex-col items-center border border-gray-300 rounded-lg shadow-lg p-4 h-64 w-full max-w-xs mx-auto bg-gray-950 text-white">
      <Image
        src={imageUrl}
        alt={projectName}
        width={100}
        height={144}
        className="rounded-md"
      />
      <h3 className="text-xl font-semibold mt-1 mb-2">{projectName}</h3>
      <p className="text-gray-300 mb-4 text-center">Coming Soon....</p>
      <button className="bg-white text-gray-900 font-semibold py-2 px-4 rounded hover:bg-gray-300 mt-2">
        Explore
      </button>
    </div>
  );
}
