"use client"
import { TypewriterEffectSmooth } from "@/components/ui/typewritter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function AboutMe() {
  return (
    <div className="border border-slate-500 w-auto h-full rounded-md p-1">
      <IntroText></IntroText>
      <div className="text-center mt-18">
      <GenerateAboutMe></GenerateAboutMe>
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
      className: "text-blue-500 dark:text-blue-500"
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[7rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}


const words = `Interested in : CS Fundamentals | Software Engineering | Cloud Computing | DevOps.`;
export function GenerateAboutMe() {
  return <TextGenerateEffect words={words} />;
}
