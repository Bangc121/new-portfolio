import ExperienceCard from "@/components/ExperienceCard";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Shared Partners",
    date: "2024.02 - 2024.05",
    description: "Working on the Google Search team.",
  },
  {
    title: "Frontend Developer",
    company: "메디히어",
    date: "June 2019 - June 2021",
    description: "Worked on the Facebook News Feed team.",
  },
  {
    title: "Frontend Developer",
    company: "컴젠",
    date: "Summer 2018",
    description: "Worked on the Facebook News Feed team.",
  },
  {
    title: "Frontend Developer",
    company: "아이픽셀",
    date: "Summer 2017",
    description: "Worked on the Google Search team.",
  },
  {
    title: "Full-Stack Developer",
    company: "필기",
    date: "Summer 2017",
    description: "Worked on the Google Search team.",
  },
];

export default function ExperiencesPage() {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2 mt-10">👨🏻‍💻 Work Experience</h2>
      <ul className="w-full mt-5">
        {experiences.map((experience, index) => (
          <li key={index}>
            <ExperienceCard experience={experience} />
          </li>
        ))}
      </ul>
    </div>
  );
}
