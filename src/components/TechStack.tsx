import Button from "./Button";

export default function TechStack() {
  return (
    <div className="bg-slate-950 border border-slate-800 w-full h-36 rounded-md p-2">
      <p className="font-semibold mb-5 text-center">Tech Stack</p>
      <div className="flex gap-3 justify-center">
        <Button name="Javascript"></Button>
        <Button name="Typescript"></Button>
        <Button name="NextJS"></Button>
        <Button name="MongoDB"></Button>
        <Button name="Mongoose"></Button>
        <Button name="Linux"></Button>
        <Button name="Git "></Button>
      </div>
    </div>
  );
}
