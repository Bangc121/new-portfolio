type Props = {
  experience: { title: string; date: string; description: string };
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <div className="border border-gray-300 rounded-lg p-5 my-5">
      <h3 className="text-xl font-bold">{experience.title}</h3>
      <p className="text-lg text-gray-500">{experience.date}</p>
      <p className="text-lg mt-3">{experience.description}</p>
    </div>
  );
}
