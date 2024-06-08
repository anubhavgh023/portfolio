import AboutMe from "../components/AboutMe";
import ProfilePicture from "../components/ProfilePicture";
import ProjectSection from "../components/ProjectSection";
import Socials from "../components/Socials";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <div className="m-5 flex flex-col gap-10">
      <div className="grid grid-cols-6 gap-5">
        <span className="col-span-1">
          <ProfilePicture></ProfilePicture>
        </span>
        <span className="col-span-5">
          <AboutMe></AboutMe>
        </span>

        <span className="col-span-1">
          <Socials></Socials>
        </span>
        <span className="col-span-5">
          <TechStack></TechStack>
        </span>
      </div>
      <div>
        <ProjectSection></ProjectSection>
      </div>
    </div>
  );
}
