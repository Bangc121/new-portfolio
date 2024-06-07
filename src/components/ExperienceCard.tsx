import { Experience } from "@/app/experiences/page";
import Link from "next/link";
import VideoCollapse from "./VideoCollapse";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <div className="p-5 my-5">
      <h3 className="text-xl font-bold mb-5">{experience.company}</h3>
      <div className="flex flex-row border-y border-gray-200 py-3.5">
        <p className="flex basis-2/5 text-md font-semibold">period</p>
        <p className="flex basis-3/5 text-md">{experience.date}</p>
      </div>
      <div className="flex flex-row border-b border-gray-200 py-3.5">
        <p className="flex basis-2/5 text-md font-semibold">position</p>
        <p className="flex basis-3/5 text-md">
          {experience.title} / {experience.position}
        </p>
      </div>
      <div className="flex flex-row border-b border-gray-200 py-3.5">
        <p className="flex basis-2/5 text-md font-semibold">projects</p>
        <p className="flex basis-3/5 text-md">
          {experience.projects.map((project) => project.title).join(", ")}
        </p>
      </div>
      <ul className="flex flex-col">
        {experience.projects.map((project, index) => (
          <li key={index} className="flex flex-col mt-4">
            <p className="text-md font-semibold mt-3">{project.title}</p>
            <ul className="flex flex-col list-disc mt-1">
              <li className="ml-5">
                <p className="text-sm">{project.period}</p>
              </li>
              {project.description.map((description, index) => (
                <li key={index} className="ml-5 mx-auto">
                  <p className="text-sm">{description}</p>
                </li>
              ))}
              {project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  className="ml-5 mx-auto"
                >
                  <li>
                    <p className="text-sm text-blue-500">{project.url}</p>
                  </li>
                </Link>
              )}
            </ul>
            <p className="text-sm font-semibold mt-4">Tech Stack</p>
            <ul className="flex mt-2">
              {project.skills.map(
                (skill, index) =>
                  skill && (
                    <li key={index}>
                      <div className="flex rounded-2xl bg-teal-200 px-4 py-1.5 mr-1">
                        <p className="text-md text-gray-800 text-sm">{skill}</p>
                      </div>
                    </li>
                  )
              )}
            </ul>
            <div className="mt-4">
              {project.video && <VideoCollapse src={project.video} />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
