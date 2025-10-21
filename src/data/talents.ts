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
  VERY_GOOD: 'Very Good',
  GOOD: 'Good',
  NOT_SURE: 'Not Sure',
} as const;
export type FEEDBACK_COMMENT = typeof FEEDBACK_COMMENT[keyof typeof FEEDBACK_COMMENT];


export const TALENT_STATUS = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  DEACTIVATE: 'DEACTIVATE',
} as const;
export type TALENT_STATUS = typeof TALENT_STATUS[keyof typeof TALENT_STATUS];

export const PROFILE_STATUS = {
  BASIC_INFO_COMPLETED: 'Basic Info Completed',
  MANUAL: 'Manual',
  CONVERTED:'Converted',
  EMAIL_VERIFIED: 'Email Verified'
} as const;
export type PROFILE_STATUS = typeof PROFILE_STATUS[keyof typeof PROFILE_STATUS];

export const LANGUAGE = {
  VIETNAMESE: 'Vietnamese',
  ENGLISH: 'English',
  JAPANESE: 'Japanese',
  FRENCH: 'French',
  CHINESE: 'Chinese',
  KOREA: 'Korea'
} as const;
export type LANGUAGE = typeof LANGUAGE[keyof typeof LANGUAGE];

export const AVAILABILITY = {
  AVAILABLE: 'Available',
  UNAVAILABLE: 'Unavailable'
} as const;
export type AVAILABILITY = typeof AVAILABILITY[keyof typeof AVAILABILITY]; 

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
    availability: AVAILABILITY.AVAILABLE,
    profileFeedback: FEEDBACK_COMMENT.VERY_GOOD,
    partner: "Partner New",
    background: FEEDBACK_COMMENT.NOT_SURE,
    profileStatus: PROFILE_STATUS.BASIC_INFO_COMPLETED,
    technical: FEEDBACK_COMMENT.NOT_SURE,
    internal: "LinkedIn",
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
    availability: AVAILABILITY.UNAVAILABLE,
    profileFeedback: FEEDBACK_COMMENT.GOOD,
    partner: 'Aloha',
    background: FEEDBACK_COMMENT.GOOD,
    profileStatus: PROFILE_STATUS.CONVERTED,
    technical: FEEDBACK_COMMENT.GOOD,
    internal: "Internal",
    isHired: true,
    isVerifiedProfile: false,
    createdDate: new Date("2025-10-12T09:30:00"),
    updatedDate: null,
    status: TALENT_STATUS.PENDING,
    language: [LANGUAGE.VIETNAMESE, LANGUAGE.JAPANESE],
    totalExps: 1,
  },
  {
  name: { id: 3, name: "Alice Nguyen", email: "alice.nguyen@devhub.io", avatar: "https://i.pravatar.cc/150?img=3" },
  nationality: "Vietnam",
  phoneNumber: "+84 902 123 111",
  type: "ODC",
  position: "Fullstack Developer",
  talentLevel: 3,
  skills: [
    { name: "React", yoe: 3, competency: "ADVANCED" },
    { name: "Node.js", yoe: 3, competency: "EXPERIENCED" },
    { name: "GraphQL", yoe: 2, competency: "EXPERIENCED" },
  ],
  yoe: 3,
  availability: AVAILABILITY.AVAILABLE,
  profileFeedback: FEEDBACK_COMMENT.GOOD,
  partner: "TechOne",
  background: FEEDBACK_COMMENT.VERY_GOOD,
  profileStatus: PROFILE_STATUS.EMAIL_VERIFIED,
  technical: FEEDBACK_COMMENT.GOOD,
  internal: "LinkedIn",
  isHired: false,
  isVerifiedProfile: true,
  createdDate: new Date("2025-09-10T14:00:00"),
  updatedDate: null,
  status: TALENT_STATUS.ACTIVE,
  language: [LANGUAGE.ENGLISH, LANGUAGE.VIETNAMESE],
  totalExps: 3,
},
{
  name: { id: 4, name: "Kenji Sato", email: "kenji.sato@jtech.jp", avatar: "https://i.pravatar.cc/150?img=4" },
  nationality: "Japan",
  phoneNumber: "+81 80 1234 5678",
  type: "IND",
  position: "Backend Engineer",
  talentLevel: 4,
  skills: [
    { name: "Go", yoe: 5, competency: "EXPERT" },
    { name: "PostgreSQL", yoe: 4, competency: "ADVANCED" },
    { name: "Docker", yoe: 4, competency: "ADVANCED" },
  ],
  yoe: 5,
  availability: AVAILABILITY.UNAVAILABLE,
  profileFeedback: FEEDBACK_COMMENT.VERY_GOOD,
  partner: "Rakuten",
  background: FEEDBACK_COMMENT.VERY_GOOD,
  profileStatus: PROFILE_STATUS.MANUAL,
  technical: FEEDBACK_COMMENT.VERY_GOOD,
  internal: "Referral",
  isHired: true,
  isVerifiedProfile: true,
  createdDate: new Date("2025-08-25T09:45:00"),
  updatedDate: new Date("2025-09-01T10:00:00"),
  status: TALENT_STATUS.ACTIVE,
  language: [LANGUAGE.JAPANESE, LANGUAGE.ENGLISH],
  totalExps: 5,
},
{
  name: { id: 5, name: "Sarah Lim", email: "sarah.lim@fusionlabs.com", avatar: "https://i.pravatar.cc/150?img=5" },
  nationality: "Singapore",
  phoneNumber: "+65 8123 5555",
  type: "ODC",
  position: "Product Designer",
  talentLevel: 2,
  skills: [
    { name: "Figma", yoe: 2, competency: "ADVANCED" },
    { name: "UX Research", yoe: 2, competency: "EXPERIENCED" },
  ],
  yoe: 2,
  availability: AVAILABILITY.AVAILABLE,
  profileFeedback: FEEDBACK_COMMENT.GOOD,
  partner: "UIverse",
  background: FEEDBACK_COMMENT.GOOD,
  profileStatus: PROFILE_STATUS.BASIC_INFO_COMPLETED,
  technical: FEEDBACK_COMMENT.NOT_SURE,
  internal: "Dribbble",
  isHired: false,
  isVerifiedProfile: false,
  createdDate: new Date("2025-10-01T08:15:00"),
  updatedDate: null,
  status: TALENT_STATUS.DEACTIVATE,
  language: [LANGUAGE.ENGLISH],
  totalExps: 2,
},
{
  name: { id: 6, name: "David Tran", email: "david.tran@codebase.vn", avatar: "https://i.pravatar.cc/150?img=6" },
  nationality: "Vietnam",
  phoneNumber: "+84 933 999 888",
  type: "ODC",
  position: "DevOps Engineer",
  talentLevel: 4,
  skills: [
    { name: "AWS", yoe: 4, competency: "ADVANCED" },
    { name: "Terraform", yoe: 3, competency: "EXPERIENCED" },
    { name: "Docker", yoe: 3, competency: "ADVANCED" },
  ],
  yoe: 4,
  availability: AVAILABILITY.UNAVAILABLE,
  profileFeedback: FEEDBACK_COMMENT.VERY_GOOD,
  partner: "CloudAsia",
  background: FEEDBACK_COMMENT.GOOD,
  profileStatus: PROFILE_STATUS.MANUAL,
  technical: FEEDBACK_COMMENT.VERY_GOOD,
  internal: "GitHub",
  isHired: true,
  isVerifiedProfile: true,
  createdDate: new Date("2025-07-20T13:22:00"),
  updatedDate: new Date("2025-09-01T09:00:00"),
  status: TALENT_STATUS.ACTIVE,
  language: [LANGUAGE.ENGLISH, LANGUAGE.VIETNAMESE],
  totalExps: 4,
},
{
  name: { id: 7, name: "Minh Chau", email: "minh.chau@digiex.vn", avatar: "https://i.pravatar.cc/150?img=7" },
  nationality: "Vietnam",
  phoneNumber: "+84 901 222 333",
  type: "ODC",
  position: "Mobile Developer",
  talentLevel: 3,
  skills: [
    { name: "Flutter", yoe: 2, competency: "EXPERIENCED" },
    { name: "React Native", yoe: 2, competency: "EXPERIENCED" },
    { name: "Firebase", yoe: 2, competency: "BEGINNER" },
  ],
  yoe: 2,
  availability: AVAILABILITY.AVAILABLE,
  profileFeedback: FEEDBACK_COMMENT.GOOD,
  partner: null,
  background: FEEDBACK_COMMENT.NOT_SURE,
  profileStatus: PROFILE_STATUS.BASIC_INFO_COMPLETED,
  technical: FEEDBACK_COMMENT.GOOD,
  internal: "Referral",
  isHired: false,
  isVerifiedProfile: false,
  createdDate: new Date("2025-10-05T10:00:00"),
  updatedDate: null,
  status: TALENT_STATUS.PENDING,
  language: [LANGUAGE.VIETNAMESE, LANGUAGE.ENGLISH],
  totalExps: 2,
},
{
  name: { id: 8, name: "Linh Hoang", email: "linh.hoang@datahub.vn", avatar: "https://i.pravatar.cc/150?img=8" },
  nationality: "Vietnam",
  phoneNumber: "+84 987 222 456",
  type: "IND",
  position: "Data Analyst",
  talentLevel: 2,
  skills: [
    { name: "Python", yoe: 2, competency: "EXPERIENCED" },
    { name: "Power BI", yoe: 1, competency: "BEGINNER" },
    { name: "SQL", yoe: 2, competency: "ADVANCED" },
  ],
  yoe: 2,
  availability: AVAILABILITY.AVAILABLE,
  profileFeedback: FEEDBACK_COMMENT.GOOD,
  partner: "Datafy",
  background: FEEDBACK_COMMENT.GOOD,
  profileStatus: PROFILE_STATUS.CONVERTED,
  technical: FEEDBACK_COMMENT.NOT_SURE,
  internal: "Internal",
  isHired: false,
  isVerifiedProfile: true,
  createdDate: new Date("2025-09-30T16:00:00"),
  updatedDate: null,
  status: TALENT_STATUS.DEACTIVATE,
  language: [LANGUAGE.ENGLISH, LANGUAGE.VIETNAMESE],
  totalExps: 2,
},
{
  name: { id: 9, name: "John Lee", email: "john.lee@outlook.com", avatar: "https://i.pravatar.cc/150?img=9" },
  nationality: "Korea",
  phoneNumber: "+82 10 7777 8888",
  type: "ODC",
  position: "Frontend Engineer",
  talentLevel: 4,
  skills: [
    { name: "Vue.js", yoe: 4, competency: "EXPERT" },
    { name: "TypeScript", yoe: 4, competency: "ADVANCED" },
    { name: "TailwindCSS", yoe: 3, competency: "ADVANCED" },
  ],
  yoe: 4,
  availability: AVAILABILITY.UNAVAILABLE,
  profileFeedback: FEEDBACK_COMMENT.VERY_GOOD,
  partner: "HanSoft",
  background: FEEDBACK_COMMENT.VERY_GOOD,
  profileStatus: PROFILE_STATUS.EMAIL_VERIFIED,
  technical: FEEDBACK_COMMENT.VERY_GOOD,
  internal: "LinkedIn",
  isHired: true,
  isVerifiedProfile: true,
  createdDate: new Date("2025-07-15T09:00:00"),
  updatedDate: new Date("2025-09-15T09:00:00"),
  status: TALENT_STATUS.ACTIVE,
  language: [LANGUAGE.KOREA, LANGUAGE.ENGLISH],
  totalExps: 4,
},
{
  name: { id: 10, name: "Amelia Chen", email: "amelia.chen@devasia.cn", avatar: "https://i.pravatar.cc/150?img=10" },
  nationality: "China",
  phoneNumber: "+86 130 8888 1234",
  type: "IND",
  position: "QA Engineer",
  talentLevel: 2,
  skills: [
    { name: "Cypress", yoe: 1, competency: "BEGINNER" },
    { name: "Jest", yoe: 2, competency: "EXPERIENCED" },
  ],
  yoe: 2,
  availability: AVAILABILITY.AVAILABLE,
  profileFeedback: FEEDBACK_COMMENT.GOOD,
  partner: "Testify",
  background: FEEDBACK_COMMENT.NOT_SURE,
  profileStatus: PROFILE_STATUS.BASIC_INFO_COMPLETED,
  technical: FEEDBACK_COMMENT.GOOD,
  internal: "LinkedIn",
  isHired: false,
  isVerifiedProfile: true,
  createdDate: new Date("2025-09-25T12:30:00"),
  updatedDate: null,
  status: TALENT_STATUS.DEACTIVATE,
  language: [LANGUAGE.CHINESE, LANGUAGE.ENGLISH],
  totalExps: 2,
},
];