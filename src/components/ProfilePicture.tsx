import Image from "next/image";

export default function ProfilePicture() {
  return (
      <Image
        src="/profile.jpg"
        width={240}
        height={300}
        style={{width: '100%'}}
        alt="Picture of the author"
        className="border border-slate-500 rounded-md"
      ></Image>
  );
}
