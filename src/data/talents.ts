import { randomGeneratorSkill } from "@/lib/common";

export interface TalentSkill {
  name: string;
  yoe: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
  competency: COMPETENCY;
}

export interface Talent {
  name: {
    id: number;
    name: string;
    email: string;
    avatar: string;
  };
  nationality: NATIONALITY;
  phoneNumber: string;
  type: string;
  position: POSITION;
  talentLevel: 1 | 2 | 3 | 4 | 5;
  skills: TalentSkill[] | null;
  yoe: number | null;
  availability: AVAILABILITY;
  profileFeedback: FEEDBACK_COMMENT | null;
  partner: string | null;
  background: FEEDBACK_COMMENT | null;
  technical: FEEDBACK_COMMENT | null;
  internal: string | null;
  profileStatus: PROFILE_STATUS | null;
  isHired: boolean;
  isVerifiedProfile: boolean;
  createdDate: Date;
  updatedDate: Date | null;
  status: TALENT_STATUS;
  language: string[] | null;
  totalExps: number;
}

export const FEEDBACK_COMMENT = {
  VERY_GOOD: "Very Good",
  GOOD: "Good",
  NOT_SURE: "Not Sure",
} as const;
export type FEEDBACK_COMMENT =
  (typeof FEEDBACK_COMMENT)[keyof typeof FEEDBACK_COMMENT];

export const TALENT_STATUS = {
  PENDING: "Pending",
  ACTIVE: "Active",
  DEACTIVATE: "Deactivate",
} as const;
export type TALENT_STATUS = (typeof TALENT_STATUS)[keyof typeof TALENT_STATUS];

export const PROFILE_STATUS = {
  BASIC_INFO_COMPLETED: "Basic Info Completed",
  MANUAL: "Manual",
  CONVERTED: "Converted",
  EMAIL_VERIFIED: "Email Verified",
} as const;
export type PROFILE_STATUS =
  (typeof PROFILE_STATUS)[keyof typeof PROFILE_STATUS];

export const LANGUAGE = {
  VIETNAMESE: "Vietnamese",
  ENGLISH: "English",
  JAPANESE: "Japanese",
  FRENCH: "French",
  CHINESE: "Chinese",
  KOREA: "Korea",
} as const;
export type LANGUAGE = (typeof LANGUAGE)[keyof typeof LANGUAGE];

export const AVAILABILITY = {
  AVAILABLE: "Available",
  UNAVAILABLE: "Unavailable",
} as const;
export type AVAILABILITY = (typeof AVAILABILITY)[keyof typeof AVAILABILITY];

export const NATIONALITY = {
  VIETNAM: "Vietnam",
  CHINA: "China",
  JAPAN: "Japan",
  AMERICA: "America",
} as const;
export type NATIONALITY = (typeof NATIONALITY)[keyof typeof NATIONALITY];

export const DEVELOPER_TYPE = {
  IND: "IND",
  ODC: "ODC",
} as const;
export type DEVELOPER_TYPE =
  (typeof DEVELOPER_TYPE)[keyof typeof DEVELOPER_TYPE];

export const COMPETENCY = {
  BEGINNER: "BEGINNER",
  EXPERIENCED: "EXPERIENCED",
  ADVANCED: "ADVANCED",
  EXPERT: "EXPERT",
} as const;
export type COMPETENCY = (typeof COMPETENCY)[keyof typeof COMPETENCY];

export const PARTNER = {
  ALOHA: "Aloha",
  MANH: "Manh",
  PARTNER_NEW: "Partner new",
} as const;
export type PARTNER = (typeof PARTNER)[keyof typeof PARTNER];

export const INTERNAL = {
  INTERNAL: "Internal",
  LINKEDIN: "LinkedIn",
  TOPCV: "TopCV",
} as const;
export type INTERNAL = (typeof INTERNAL)[keyof typeof INTERNAL];

export const POSITION = {
  ARTIST_DESIGN_3D: "3D Artist/Design",
  AI_ENGINEER: "AI Engineer",
  BACKEND_ENGINEER: "Backend Engineer",
  FRONTEND_ENGINEER: "Frontend Engineer",
  CLOUD_ENGINEER: "Cloud Engineer",
  CTO: "CTO",
  QA: "QA",
  QC: "QC",
  COO: 'COO',
  CFO: 'CFO'
} as const;
export type POSITION = (typeof POSITION)[keyof typeof POSITION];

export const SKILL_OPTIONS = [
  "Ajax",
  "Algorithms",
  "Android",
  "Angular",
  "ASP.NET",
  "AWS",
  "Azure",
  "Bootstrap",
  "C#",
  "C++",
  "CSS",
  "Docker",
  "Express.js",
  "Firebase",
  "Git",
  "HTML",
  "Java",
  "JavaScript",
  "jQuery",
  "Kubernetes",
  "Laravel",
  "MongoDB",
  "MySQL",
  "Node.js",
  "PHP",
  "Python",
  "React",
  "Redis",
  "Ruby",
  "SQL",
  "TypeScript",
  "Vue.js",
];

export const talents: Talent[] = [
  {
    name: {
      id: 1,
      name: "Tommy Le",
      email: "tommyle1310@gmail.com",
      avatar: "https://github.com/shadcn.png",
    },
    nationality: NATIONALITY.VIETNAM,
    phoneNumber: "+84 707 171 164",
    type: DEVELOPER_TYPE["ODC"],
    position: POSITION.BACKEND_ENGINEER,
    talentLevel: 3,
    skills: [
      {
        name: randomGeneratorSkill(),
        yoe: 3,
        competency: COMPETENCY["ADVANCED"],
      },
      {
        name: randomGeneratorSkill(),
        yoe: 3,
        competency: COMPETENCY["EXPERIENCED"],
      },
      {
        name: randomGeneratorSkill(),
        yoe: 2,
        competency: COMPETENCY["EXPERIENCED"],
      },
      {
        name: randomGeneratorSkill(),
        yoe: 2,
        competency: COMPETENCY["EXPERIENCED"],
      },
    ],
    yoe: 3,
    availability: AVAILABILITY.AVAILABLE,
    profileFeedback: FEEDBACK_COMMENT.VERY_GOOD,
    partner: PARTNER.PARTNER_NEW,
    background: FEEDBACK_COMMENT.NOT_SURE,
    profileStatus: PROFILE_STATUS.BASIC_INFO_COMPLETED,
    technical: FEEDBACK_COMMENT.NOT_SURE,
    internal: INTERNAL["LINKEDIN"],
    isHired: false,
    isVerifiedProfile: true,
    createdDate: new Date("2025-10-15T10:51:00"),
    updatedDate: new Date("2025-10-15T10:51:00"),
    status: TALENT_STATUS.ACTIVE,
    language: [LANGUAGE.VIETNAMESE, LANGUAGE.CHINESE],
    totalExps: 3,
  },
  {
    name: {
      id: 2,
      name: "Phuc Le Frontend Intern",
      email: "phuc.le@digiex.group",
      avatar: "https://github.com/shadcn.png",
    },
    nationality: NATIONALITY.VIETNAM,
    phoneNumber: "+84 707 171 164",
    type: DEVELOPER_TYPE["IND"],
    position: POSITION.FRONTEND_ENGINEER,
    talentLevel: 1,
    skills: [
      { name: randomGeneratorSkill(), yoe: 1, competency: COMPETENCY.BEGINNER },
      { name: randomGeneratorSkill(), yoe: 1, competency: COMPETENCY.BEGINNER },
      { name: randomGeneratorSkill(), yoe: 1, competency: COMPETENCY.BEGINNER },
    ],
    yoe: 1,
    availability: AVAILABILITY.UNAVAILABLE,
    profileFeedback: FEEDBACK_COMMENT.GOOD,
    partner: PARTNER.PARTNER_NEW,
    background: FEEDBACK_COMMENT.GOOD,
    profileStatus: PROFILE_STATUS.CONVERTED,
    technical: FEEDBACK_COMMENT.GOOD,
    internal: INTERNAL["TOPCV"],
    isHired: true,
    isVerifiedProfile: false,
    createdDate: new Date("2025-10-12T09:30:00"),
    updatedDate: null,
    status: TALENT_STATUS.PENDING,
    language: [LANGUAGE.VIETNAMESE, LANGUAGE.JAPANESE],
    totalExps: 1,
  },
  {
    name: {
      id: 3,
      name: "Alice Nguyen",
      email: "alice.nguyen@devhub.io",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    nationality: NATIONALITY.VIETNAM,
    phoneNumber: "+84 902 123 111",
    type: DEVELOPER_TYPE["ODC"],
    position: POSITION.AI_ENGINEER,
    talentLevel: 3,
    skills: [
      {
        name: randomGeneratorSkill(),
        yoe: 3,
        competency: COMPETENCY["ADVANCED"],
      },
      {
        name: randomGeneratorSkill(),
        yoe: 3,
        competency: COMPETENCY["EXPERIENCED"],
      },
      {
        name: randomGeneratorSkill(),
        yoe: 2,
        competency: COMPETENCY["EXPERIENCED"],
      },
    ],
    yoe: 3,
    availability: AVAILABILITY.AVAILABLE,
    profileFeedback: FEEDBACK_COMMENT.GOOD,
    partner: PARTNER.PARTNER_NEW,
    background: FEEDBACK_COMMENT.VERY_GOOD,
    profileStatus: PROFILE_STATUS.EMAIL_VERIFIED,
    technical: FEEDBACK_COMMENT.GOOD,
    internal: INTERNAL["LINKEDIN"],
    isHired: false,
    isVerifiedProfile: true,
    createdDate: new Date("2025-09-10T14:00:00"),
    updatedDate: null,
    status: TALENT_STATUS.ACTIVE,
    language: [LANGUAGE.ENGLISH, LANGUAGE.VIETNAMESE],
    totalExps: 3,
  },
  {
    name: {
      id: 4,
      name: "Kenji Sato",
      email: "kenji.sato@jtech.jp",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    nationality: NATIONALITY.JAPAN,
    phoneNumber: "+81 80 1234 5678",
    type: DEVELOPER_TYPE["IND"],
    position: POSITION.AI_ENGINEER,
    talentLevel: 4,
    skills: [
      {
        name: randomGeneratorSkill(),
        yoe: 5,
        competency: COMPETENCY["EXPERT"],
      },
      {
        name: randomGeneratorSkill(),
        yoe: 4,
        competency: COMPETENCY["ADVANCED"],
      },
      {
        name: randomGeneratorSkill(),
        yoe: 4,
        competency: COMPETENCY["ADVANCED"],
      },
    ],
    yoe: 5,
    availability: AVAILABILITY.UNAVAILABLE,
    profileFeedback: FEEDBACK_COMMENT.VERY_GOOD,
    partner: PARTNER.MANH,
    background: FEEDBACK_COMMENT.VERY_GOOD,
    profileStatus: PROFILE_STATUS.MANUAL,
    technical: FEEDBACK_COMMENT.VERY_GOOD,
    internal: INTERNAL["TOPCV"],
    isHired: true,
    isVerifiedProfile: true,
    createdDate: new Date("2025-08-25T09:45:00"),
    updatedDate: new Date("2025-09-01T10:00:00"),
    status: TALENT_STATUS.ACTIVE,
    language: [LANGUAGE.JAPANESE, LANGUAGE.ENGLISH],
    totalExps: 5,
  },
  {
    name: {
      id: 5,
      name: "Sarah Lim",
      email: "sarah.lim@fusionlabs.com",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    nationality: NATIONALITY.CHINA,
    phoneNumber: "+65 8123 5555",
    type: DEVELOPER_TYPE["ODC"],
    position: POSITION.CTO,
    talentLevel: 2,
    skills: [
      {
        name: randomGeneratorSkill(),
        yoe: 2,
        competency: COMPETENCY["ADVANCED"],
      },
      {
        name: randomGeneratorSkill(),
        yoe: 2,
        competency: COMPETENCY["EXPERIENCED"],
      },
    ],
    yoe: 2,
    availability: AVAILABILITY.AVAILABLE,
    profileFeedback: FEEDBACK_COMMENT.GOOD,
    partner: PARTNER.PARTNER_NEW,
    background: FEEDBACK_COMMENT.GOOD,
    profileStatus: PROFILE_STATUS.BASIC_INFO_COMPLETED,
    technical: FEEDBACK_COMMENT.NOT_SURE,
    internal: INTERNAL["INTERNAL"],
    isHired: false,
    isVerifiedProfile: false,
    createdDate: new Date("2025-10-01T08:15:00"),
    updatedDate: null,
    status: TALENT_STATUS.DEACTIVATE,
    language: [LANGUAGE.ENGLISH],
    totalExps: 2,
  },
  {
    name: {
      id: 6,
      name: "David Tran",
      email: "david.tran@codebase.vn",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    nationality: NATIONALITY.VIETNAM,
    phoneNumber: "+84 933 999 888",
    type: DEVELOPER_TYPE["ODC"],
    position: POSITION.CLOUD_ENGINEER,
    talentLevel: 4,
    skills: [
      {
        name: randomGeneratorSkill(),
        yoe: 4,
        competency: COMPETENCY["ADVANCED"],
      },
      {
        name: randomGeneratorSkill(),
        yoe: 3,
        competency: COMPETENCY["EXPERIENCED"],
      },
      {
        name: randomGeneratorSkill(),
        yoe: 3,
        competency: COMPETENCY["ADVANCED"],
      },
    ],
    yoe: 4,
    availability: AVAILABILITY.UNAVAILABLE,
    profileFeedback: FEEDBACK_COMMENT.VERY_GOOD,
    partner: PARTNER.PARTNER_NEW,
    background: FEEDBACK_COMMENT.GOOD,
    profileStatus: PROFILE_STATUS.MANUAL,
    technical: FEEDBACK_COMMENT.VERY_GOOD,
    internal: INTERNAL["INTERNAL"],
    isHired: true,
    isVerifiedProfile: true,
    createdDate: new Date("2025-07-20T13:22:00"),
    updatedDate: new Date("2025-09-01T09:00:00"),
    status: TALENT_STATUS.ACTIVE,
    language: [LANGUAGE.ENGLISH, LANGUAGE.VIETNAMESE],
    totalExps: 4,
  },
  {
    name: {
      id: 7,
      name: "Minh Chau",
      email: "minh.chau@digiex.vn",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    nationality: NATIONALITY.VIETNAM,
    phoneNumber: "+84 901 222 333",
    type: DEVELOPER_TYPE["ODC"],
    position: POSITION.FRONTEND_ENGINEER,
    talentLevel: 3,
    skills: [
      {
        name: randomGeneratorSkill(),
        yoe: 2,
        competency: COMPETENCY.EXPERIENCED,
      },
      {
        name: randomGeneratorSkill(),
        yoe: 2,
        competency: COMPETENCY.EXPERIENCED,
      },
      { name: randomGeneratorSkill(), yoe: 2, competency: COMPETENCY.BEGINNER },
    ],
    yoe: 2,
    availability: AVAILABILITY.AVAILABLE,
    profileFeedback: FEEDBACK_COMMENT.GOOD,
    partner: null,
    background: FEEDBACK_COMMENT.NOT_SURE,
    profileStatus: PROFILE_STATUS.BASIC_INFO_COMPLETED,
    technical: FEEDBACK_COMMENT.GOOD,
    internal: INTERNAL["INTERNAL"],
    isHired: false,
    isVerifiedProfile: false,
    createdDate: new Date("2025-10-05T10:00:00"),
    updatedDate: null,
    status: TALENT_STATUS.PENDING,
    language: [LANGUAGE.VIETNAMESE, LANGUAGE.ENGLISH],
    totalExps: 2,
  },
  {
    name: {
      id: 8,
      name: "Linh Hoang",
      email: "linh.hoang@datahub.vn",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    nationality: NATIONALITY.VIETNAM,
    phoneNumber: "+84 987 222 456",
    type: DEVELOPER_TYPE["IND"],
    position: POSITION.BACKEND_ENGINEER,
    talentLevel: 2,
    skills: [
      {
        name: randomGeneratorSkill(),
        yoe: 2,
        competency: COMPETENCY["EXPERIENCED"],
      },
      {
        name: randomGeneratorSkill(),
        yoe: 1,
        competency: COMPETENCY["BEGINNER"],
      },
      {
        name: randomGeneratorSkill(),
        yoe: 2,
        competency: COMPETENCY["ADVANCED"],
      },
    ],
    yoe: 2,
    availability: AVAILABILITY.AVAILABLE,
    profileFeedback: FEEDBACK_COMMENT.GOOD,
    partner: PARTNER.PARTNER_NEW,
    background: FEEDBACK_COMMENT.GOOD,
    profileStatus: PROFILE_STATUS.CONVERTED,
    technical: FEEDBACK_COMMENT.NOT_SURE,
    internal: INTERNAL["INTERNAL"],
    isHired: false,
    isVerifiedProfile: true,
    createdDate: new Date("2025-09-30T16:00:00"),
    updatedDate: null,
    status: TALENT_STATUS.DEACTIVATE,
    language: [LANGUAGE.ENGLISH, LANGUAGE.VIETNAMESE],
    totalExps: 2,
  },
  {
    name: {
      id: 9,
      name: "John Lee",
      email: "john.lee@outlook.com",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    nationality: NATIONALITY.AMERICA,
    phoneNumber: "+82 10 7777 8888",
    type: DEVELOPER_TYPE["ODC"],
    position: POSITION.ARTIST_DESIGN_3D,
    talentLevel: 4,
    skills: [
      {
        name: randomGeneratorSkill(),
        yoe: 4,
        competency: COMPETENCY["EXPERT"],
      },
      {
        name: randomGeneratorSkill(),
        yoe: 4,
        competency: COMPETENCY["ADVANCED"],
      },
      {
        name: randomGeneratorSkill(),
        yoe: 3,
        competency: COMPETENCY["ADVANCED"],
      },
    ],
    yoe: 4,
    availability: AVAILABILITY.UNAVAILABLE,
    profileFeedback: FEEDBACK_COMMENT.VERY_GOOD,
    partner: PARTNER.PARTNER_NEW,
    background: FEEDBACK_COMMENT.VERY_GOOD,
    profileStatus: PROFILE_STATUS.EMAIL_VERIFIED,
    technical: FEEDBACK_COMMENT.VERY_GOOD,
    internal: INTERNAL["INTERNAL"],
    isHired: true,
    isVerifiedProfile: true,
    createdDate: new Date("2025-07-15T09:00:00"),
    updatedDate: new Date("2025-09-15T09:00:00"),
    status: TALENT_STATUS.ACTIVE,
    language: [LANGUAGE.KOREA, LANGUAGE.ENGLISH],
    totalExps: 4,
  },
  {
    name: {
      id: 10,
      name: "Amelia Chen",
      email: "amelia.chen@devasia.cn",
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    nationality: NATIONALITY.CHINA,
    phoneNumber: "+86 130 8888 1234",
    type: DEVELOPER_TYPE["IND"],
    position: POSITION.AI_ENGINEER,
    talentLevel: 2,
    skills: [
      {
        name: randomGeneratorSkill(),
        yoe: 1,
        competency: COMPETENCY["BEGINNER"],
      },
      {
        name: randomGeneratorSkill(),
        yoe: 2,
        competency: COMPETENCY["EXPERIENCED"],
      },
    ],
    yoe: 2,
    availability: AVAILABILITY.AVAILABLE,
    profileFeedback: FEEDBACK_COMMENT.GOOD,
    partner: PARTNER.ALOHA,
    background: FEEDBACK_COMMENT.NOT_SURE,
    profileStatus: PROFILE_STATUS.BASIC_INFO_COMPLETED,
    technical: FEEDBACK_COMMENT.GOOD,
    internal: INTERNAL["INTERNAL"],
    isHired: false,
    isVerifiedProfile: true,
    createdDate: new Date("2025-09-25T12:30:00"),
    updatedDate: null,
    status: TALENT_STATUS.DEACTIVATE,
    language: [LANGUAGE.CHINESE, LANGUAGE.ENGLISH],
    totalExps: 2,
  },
];
