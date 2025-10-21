export interface TalentSkill {
  name: string;
  yoe: number; 
  competency: 'BEGINNER' | 'EXPERIENCED' | 'ADVANCED' | 'EXPERT';
}

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
  position: string;
  talentLevel: number;
  skills: TalentSkill[] | null;
  yoe: number | null;
  availability: "Available" | "Unavailable";
  profileFeedback: "Very Good" | "Good" | "Not Sure" | null;
  partner: string | null;
  background: "Very Good" | "Good" | "Not Sure" | null;
  technical: "Very Good" | "Good" | "Not Sure" | null;
  internal: string | null;
  profileStatus: "Manual" | "Converted" | "Email Verified" | "Basic Info Completed" | "Profile Completed" | null;
  isHired: boolean;
  isVerifiedProfile: boolean;
  createdDate: Date;
  updatedDate: Date | null;
  status: TalentStatus;
  language: string[] | null;
  totalExps: number;
}

export const TalentStatus = {
  PENDING: 'PENDING',
  ACTIVATE: 'ACTIVATE',
  DEACTIVATE: 'DEACTIVATE',
} as const;

export type TalentStatus = typeof TalentStatus[keyof typeof TalentStatus];



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
    position: "Backend Engineer",
    talentLevel: 3,
    skills: [
      { name: "Java", yoe: 3, competency: "ADVANCED" },
      { name: "SQL", yoe: 3, competency: "EXPERIENCED" },
      { name: "Spring Boot", yoe: 2, competency: "EXPERIENCED" },
      { name: "Docker", yoe: 2, competency: "EXPERIENCED" }
    ],
    yoe: 3,
    availability: "Available",
    profileFeedback: "Very Good",
    partner: "Partner New",
    background: "Good",
    profileStatus: 'Basic Info Completed',
    technical: "Very Good",
    internal: "LinkedIn",
    isHired: false,
    isVerifiedProfile: true,
    createdDate: new Date("2025-01-14T10:51:00"),
    updatedDate: new Date("2025-01-14T10:51:00"),
    status: TalentStatus.ACTIVATE,
    language: ["Vietnamese", "English"],
    totalExps: 3,
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
    position: "Frontend Engineer",
    talentLevel: 1,
    skills: [
      { name: "React", yoe: 1, competency: "BEGINNER" },
      { name: "TypeScript", yoe: 1, competency: "BEGINNER" },
      { name: "Next.js", yoe: 1, competency: "BEGINNER" }
    ],
    yoe: 1,
    availability: "Unavailable",
    profileFeedback: "Good",
    partner: 'Aloha',
    background: "Not Sure",
    profileStatus: 'Converted',
    technical: "Good",
    internal: "Internal",
    isHired: true,
    isVerifiedProfile: false,
    createdDate: new Date("2025-01-10T09:30:00"),
    updatedDate: null,
    status: TalentStatus.PENDING,
    language: ["Vietnamese", 'French'],
    totalExps: 1,
  },
];