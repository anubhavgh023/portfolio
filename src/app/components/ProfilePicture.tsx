import Image from "next/image";

export default function ProfilePicture() {
  return (
      <Image
        src="/profile.jpg"
        width={300}
        height={100}
        alt="Picture of the author"
      ></Image>
  );
}
