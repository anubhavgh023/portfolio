"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewritter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function AboutMe() {
  return (
    <div className="bg-slate-950 border border-slate-800 w-auto h-full rounded-md p-4">
      <IntroText />
      <div className="text-center mt-4">
        <GenerateAboutMe />
      </div>
    </div>
  );
}

function IntroText() {
  const words = [
    {
      text: "Hello",
    },
    {
      text: "I'm",
    },
    {
      text: "Anubhav !",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-28 sm:h-32 md:h-40">
      <TypewriterEffectSmooth words={words} className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl" />
    </div>
  );
}

const words = `Interested in : CS Fundamentals | Software Engineering | Cloud Computing | DevOps.`;
export function GenerateAboutMe() {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
      <TextGenerateEffect words={words} />
    </div>
  );
}
