import Button from "./Button";

export default function TechStack() {
  return (
    <div className="bg-slate-950 border border-slate-800 w-full rounded-md p-4">
      <p className="font-semibold mb-5 text-center text-white">Tech Stack</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Button name="Javascript" />
        <Button name="Typescript" />
        <Button name="NextJS" />
        <Button name="MongoDB" />
        <Button name="Mongoose" />
        <Button name="Linux" />
        <Button name="Git" />
      </div>
    </div>
  );
}
