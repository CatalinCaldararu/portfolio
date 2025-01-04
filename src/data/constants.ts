export const TITLE = "Hi, I am Catalin.";
export const HASHTAGS = "#FullStackDeveloper #LifelongLearner #TechEnthusiast";
export const DESCRIPTION = `I am a Full Stack Software Developer specializing in .NET Core with
experience in collaborating with remote, cross-functional teams to
develop, modernize, and maintain software systems. I am also a proud
volunteer and hold several Scrum certifications such as PSM II and PSPO II.`;

export type ExperienceEntry = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bulletPoints: string[];
  skills: string[];
};

export const internshipExperienceData: ExperienceEntry = {
  title: ".NET Software Developer Intern",
  company: "Suvoda",
  period: "Oct 2020 - Dec 2020 • 3 mos",
  location: "Remote",
  description:
    "Assisted in the development of an IRT software system using .NET, LINQ, EF, and SQL Server and learned principles and processes applied in software development.",
  bulletPoints: [],
  skills: ["C#", "ASP.NET MVC", "Microsoft SQL Server", "Entity Framework"],
};

export const experienceData: ExperienceEntry = {
  title: "Full Stack .NET Software Developer",
  company: "Dell Technologies",
  period: "Aug 2021 - Present • 2 yrs 5 mos",
  location: "Remote",
  description:
    "Engaged in a dynamic team at Dell Digital Services, focusing on the redesign of strategic products to bolster the company's growth.",
  bulletPoints: [
    "Developed, tested, and documented .NET Core 3.1 - .NET 8.0 services relying on multiple REST APIs, in collaboration with developers from multiple product teams to ensure service alignment.",
    "Utilized tools like SonarQube, Snyk, and Dynatrace for code analysis to identify and remediate code smells, vulnerabilities, and performance bottlenecks, enhancing the code base.",
    "Delivered defect resolutions and end-user support during User Acceptance Testing phases.",
    "Played a pivotal role in blocker removal and the onboarding process for new team members.",
  ],
  skills: [
    "REST APIs",
    "C#",
    ".NET Core",
    "Oracle Database",
    "MongoDB",
    "Entity Framework",
    "Postman",
    "CI/CD",
    "Jira",
  ],
};
