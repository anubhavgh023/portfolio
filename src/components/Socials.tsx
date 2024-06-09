"use client";
import Image from "next/image";
import { useState } from "react";

export default function Socials() {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText("contact@anubhavsamanta.tech");
    setCopySuccess("Copied!");
    setTimeout(() => setCopySuccess(""), 2000);
  };

  return (
    <div className="bg-slate-950 border border-slate-800 w-full rounded-md p-4">
      <div className="flex gap-4 justify-evenly mt-2">
        <a href="https://x.com/anubhavs_twt" target="_blank">
          <Image
            src="/x-logo.svg"
            width={40}
            height={40}
            alt="X Logo"
            className="bg-white hover:scale-95 hover:opacity-75"
          ></Image>
        </a>

        <a
          href="https://www.linkedin.com/in/anubhav-samanta-a79150265/"
          target="_blank"
        >
          <Image
            src="/linkedin-logo.svg"
            width={40}
            height={40}
            alt="Linkedin Logo"
            className="hover:scale-95 hover:opacity-55"
          ></Image>
        </a>

        <a href="https://github.com/anubhavgh023" target="_blank">
          <Image
            src="/github-logo.svg"
            width={40}
            height={40}
            alt="Github Logo"
            className="bg-white rounded-md hover:scale-95 hover:opacity-55"
          ></Image>
        </a>
      </div>

      {/* email */}
      <div className="flex items-center justify-center gap-2 pt-6">
        <div className="flex flex-col justify-center items-center gap-1">
          <code className="text-slate-300 font-semibold text-xm md:text-sm lg:text-base truncate w-full overflow-hidden">
            contact@anubhavsamanta.tech
          </code>
          <button
            onClick={copyToClipboard}
            className="rounded-md hover:scale-95"
          >
            {copySuccess ? (
              <Image
                src="/clipboard-ticked-icon.svg"
                width={20}
                height={20}
                alt="Clipboard ticked icon"
                className="bg-green-500 rounded-sm"
              />
            ) : (
              <Image
                src="/clipboard-icon.svg"
                width={20}
                height={20}
                alt="Clipboard icon"
                className="bg-white rounded-sm"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
