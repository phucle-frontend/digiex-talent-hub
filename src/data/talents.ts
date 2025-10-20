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
  skills: string[] | null;
  yoe: number | null;
  availability: "Available" | "Unavailable";
  profileFeedback: "Very Good" | "Good" | "Not Sure" | null;
  partner: string | null;
  background: "Very Good" | "Good" | "Not Sure" | null;
  technical: "Very Good" | "Good" | "Not Sure" | null;
  internal: string | null;
  isHired: boolean;
  isVerifiedProfile: boolean;
  createdDate: Date;
  updatedDate: Date | null;
  status: "Pending" | "Active" | "Deactivate";
  language: string[] | null;
  totalExps: number;
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
    position: "Backend Engineer",
    talentLevel: 3,
    skills: ["Java", "SQL", "Spring Boot", "Docker"],
    yoe: 3,
    availability: "Available",
    profileFeedback: "Very Good",
    partner: "Partner New",
    background: "Good",
    technical: "Very Good",
    internal: "LinkedIn",
    isHired: false,
    isVerifiedProfile: true,
    createdDate: new Date("2025-01-14T10:51:00"),
    updatedDate: new Date("2025-01-14T10:51:00"),
    status: "Active",
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
    skills: ["React", "TypeScript", "Next.js"],
    yoe: 1,
    availability: "Unavailable",
    profileFeedback: "Good",
    partner: null,
    background: "Not Sure",
    technical: "Good",
    internal: "Internal",
    isHired: true,
    isVerifiedProfile: false,
    createdDate: new Date("2025-01-10T09:30:00"),
    updatedDate: null,
    status: "Pending",
    language: ["Vietnamese"],
    totalExps: 1,
  },
];