export interface Talent {
  name: {
    id: number;
    name: string;
    email: string;
    avatar: string;
  };
  nationality: string;
  phoneNumber: string;
  type: string;
  totalExps: number;
  talentLevel: number;
  skills: 'Java/SQL' | 'React/Typescript';
  isCvUploaded: boolean;
  backgroundInterview: {
    score: string;
    cappedScore: string;
  };
  technicalInterview: {
    score: string;
    cappedScore: string;
  };
  status: "Available" | "Unavailable";
  isHired: boolean;
  profile: "Basic Info completed" | "Converted";
  createdDate: Date;
  updatedDate: Date;
  source: "Basic Info completed" | "Converted";
}

export const talents: Talent[] = [
  {
    name: {
      id: 1,
      name: "Tommy Le",
      email: "tommyle1310@gmail.com",
      avatar: "https://github.com/shadcn.png",
    },
    nationality: "Vietnam",
    phoneNumber: "+84 707 171 164",
    type: "ODC",
    totalExps: 1,
    talentLevel: 3,
    skills: "Java/SQL",
    isCvUploaded: true,
    backgroundInterview: {
      score: "4.0",
      cappedScore: "5.0",
    },
    technicalInterview: {
      score: "4.0",
      cappedScore: "5.0",
    },
    status: "Available",
    isHired: false,
    profile: "Converted",
    createdDate: new Date(),
    updatedDate: new Date(),
    source: "Basic Info completed",
  },
  {
    name: {
      id: 2,
      name: "Phuc Le Frontend Intern",
      email: "phuc.le@digiex.group",
      avatar: "https://github.com/shadcn.png",
    },
    nationality: "Vietnam",
    phoneNumber: "+84 707 171 164",
    type: "IND",
    totalExps: 1,
    talentLevel: 1,
    skills: "React/Typescript",
    isCvUploaded: false,
    backgroundInterview: {
      score: "4.0",
      cappedScore: "5.0",
    },
    technicalInterview: {
      score: "4.0",
      cappedScore: "5.0",
    },
    status: "Unavailable",
    isHired: true,
    profile: "Basic Info completed",
    createdDate: new Date(),
    updatedDate: new Date(),
    source: "Converted",
  },
];