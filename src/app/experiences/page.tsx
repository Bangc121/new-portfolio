import ExperienceCard from "@/components/ExperienceCard";

export type Experience = {
  title: string;
  company: string;
  date: string;
  position: string;
  projects: Project[];
  description: string;
};

type Project = {
  title: string;
  period: string;
  skills: string[];
  description: string;
  url?: string;
  video?: string;
};
const experiences = [
  {
    title: "Frontend Developer",
    company: "Shared Partners",
    position: "파트타임 앱 개발",
    date: "2024.02 - 2024.05",
    projects: [
      {
        title: "UNIC",
        period: "2024.02 - 2024.05",
        skills: ["react-native", "typeScript", "recoil", "react-query"],
        description: "외주 프로젝트 앱 초기 설계 및 개발",
        url: "https://x.com/0xUNIC",
        video: "/videos/high.mp4",
      },
    ],
    description:
      "UNIC은 NFT 이미지에 보이지 않게 인코딩된 서명을 스캔하여 정보를 가져오고 본인의 블록체인 지갑과 연동할 수 있는 서비스입니다.",
  },
  {
    title: "Frontend Developer",
    company: "메디히어",
    position: "앱 개발팀 / Part Lead",
    date: "2021.10 - 2023.12",
    projects: [
      {
        title: "닥터히어(진료예약 및 건강케어 서비스)",
        period: "2023.03 - 2024.05",
        skills: [
          "react-native",
          "typescript",
          "rtk-query",
          "codepush",
          "github actions",
          "sentry",
        ],
        description: "닥터히어 Primary Care 서비스 신규런칭 및 유지보수",
      },
      {
        title: "닥터히어(원격진료 서비스)",
        period: "2022.10 - 2023.02",
        skills: ["react-native", "typescript"],
        description: "닥터히어 원격진료서비스 유지보수 및 신규기능 개발",
      },
    ],
    description: "Worked on the Facebook News Feed team.",
  },
  {
    title: "Frontend Developer",
    company: "컴젠(주)",
    position: "파트타임 앱 개발",
    date: "2021.08 - 2021.09",
    projects: [
      {
        title: "현대자동차(미국법인) 사내 공지 앱",
        period: "2024.02 - 2024.05",
        skills: [
          "react-native",
          "typescript",
          "redux-toolkit",
          "styled-components",
        ],
        description: "외주 프로젝트 앱 초기 설계 및 개발",
      },
    ],
    description: "Worked on the Facebook News Feed team.",
  },
  {
    title: "Frontend Developer",
    company: "아이픽셀",
    position: "앱 개발팀 / Part Lead",
    date: "2020.04 - 2021.07",
    projects: [
      {
        title: "하우핏",
        period: "2020.04 - 2021.07",
        skills: [
          "react-native",
          "typescript",
          "redux",
          "styled-components",
          "codepush",
        ],
        description:
          "🏆 구글플레이가 선정한 '2021 올해를 빛낸 자기계발 앱' 부문에서 최우수상",
      },
    ],
    description:
      "동작인식 AI기술을 바탕으로 비대면 피트니스 서비스 플랫폼 하우핏을 서비스하는 스타트업입니다",
  },
  {
    title: "Full-Stack Developer",
    company: "필기",
    position: "앱 개발",
    date: "2019.09 - 2021.04",
    projects: [
      {
        title: "Fillgi",
        period: "2024.02 - 2024.05",
        skills: [
          "React",
          "TypeScript",
          "GraphQL",
          "Apollo Client",
          "Tailwind CSS",
        ],
        description: "Working on the Facebook News Feed team.",
      },
    ],
    description: "Worked on the Google Search team.",
  },
];

export default function ExperiencesPage() {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2 mt-10">👨🏻‍💻 Work Experience</h2>
      <ul className="w-full mt-5 pb-20">
        {experiences.map((experience, index) => (
          <li key={index}>
            <ExperienceCard experience={experience} />
          </li>
        ))}
      </ul>
    </div>
  );
}
