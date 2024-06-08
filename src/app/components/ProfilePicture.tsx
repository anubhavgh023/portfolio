import Image from "next/image";

export default function ProfilePicture() {
  return (
      <Image
        src="/profile.jpg"
        width={300}
        height={300}
        alt="Picture of the author"
        className="border border-slate-500 m-5 rounded-md"
      ></Image>
  );
}
