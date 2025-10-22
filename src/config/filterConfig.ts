import { AVAILABILITY, INTERNAL, LANGUAGE, PARTNER, POSITION, PROFILE_STATUS, TALENT_STATUS } from "@/data/talents";
import { randomGeneratorSkill } from "@/lib/common";

export interface FilterOption {
  value: string;
  label: string;
  hasDot?: boolean;
  dotColor?: string;
}

export const FILTER_FIELDS_KEY = {
  SKILLS: "skills",
  POSITION: "position",
  TOTAL_EXPS: "totalExps",
  TALENT_LEVEL: "talentLevel",
  PARTNERS: "partners",
  AVAILABILITY: "availability",
  VERIFIED_PROFILE: "verifiedProfile",
  PROFILE_STATUS: "profileStatus",
  LANGUAGE: "language",
  TALENT_STATUS: "talentStatus",
  INTERNAL: "internal",
  CREATED_DATE: "createdDate",
} as const;
export type FILTER_FIELDS_KEY =
  (typeof FILTER_FIELDS_KEY)[keyof typeof FILTER_FIELDS_KEY];

export const FILTER_FIELDS_TYPE = {
  CHECKBOXES: "checkboxes",
  RADIO: "radio",
  RANGE: "range",
  DATE_PICKER: "date_picker",
  SKILLS: "skills"
} as const;
export type FILTER_FIELDS_TYPE = (typeof FILTER_FIELDS_TYPE)[keyof typeof FILTER_FIELDS_TYPE];

export interface FilterField {
  key: FILTER_FIELDS_KEY;
  type: FILTER_FIELDS_TYPE;
  label: string;
  options?: FilterOption[] | string[] | number[];
  value?: any;
  from?: number | string;
  to?: number | string;
}

export const filterFields: FilterField[] = [
  {
    type: FILTER_FIELDS_TYPE.SKILLS,
    key: "skills",
    label: "Skills",
    value: [
      { name: randomGeneratorSkill(), yoe: 6, competency: "EXPERT" },
      { name: randomGeneratorSkill(), yoe: 2, competency: "ADVANCED" },
      { name: randomGeneratorSkill(), yoe: 3, competency: "EXPERT" },
      { name: randomGeneratorSkill(), yoe: 4, competency: "ADVANCED" },
    ],
  },
  {
    type: FILTER_FIELDS_TYPE.CHECKBOXES,
    key: "position",
    label: "Position",
    options: Object.entries(POSITION).map(item => item[1]),
  },
  {
    type: FILTER_FIELDS_TYPE.RANGE,
    key: "totalExps",
    label: "Total Experience",
    from: 0,
    to: 14,
  },
  {
    type: FILTER_FIELDS_TYPE.CHECKBOXES,
    key: "talentLevel",
    label: "Level",
    options: [1, 2, 3, 4, 5],
  },
  {
    type: FILTER_FIELDS_TYPE.CHECKBOXES,
    key: "partners",
    label: "Partners",
    options: Object.entries(PARTNER).map(item => item[1]),
  },
  {
    type: FILTER_FIELDS_TYPE.RADIO,
    key: "availability",
    label: "Job Availability",
    options: Object.entries(AVAILABILITY).map(item => item[1]),
  },
  {
    type: FILTER_FIELDS_TYPE.RADIO,
    key: "verifiedProfile",
    label: "Verify Profile",
    options: ["Verified", "Not Verified"],
  },
  {
    type: FILTER_FIELDS_TYPE.CHECKBOXES,
    key: "profileStatus",
    label: "Profile Status",
    options: Object.entries(PROFILE_STATUS).map(item => item[1]),
  },
  {
    type: FILTER_FIELDS_TYPE.CHECKBOXES,
    key: "language",
    label: "Language",
    options: Object.entries(LANGUAGE).map(item => item[1]),
  },
  {
    type: FILTER_FIELDS_TYPE.CHECKBOXES,
    key: "talentStatus",
    label: "Talent Status",
    options: Object.entries(TALENT_STATUS).map(item => item[1]),
  },
  {
    type: FILTER_FIELDS_TYPE.RADIO,
    key: "internal",
    label: "Internal",
    options: Object.entries(INTERNAL).map(item => item[1]),
  },
  {
    type: FILTER_FIELDS_TYPE.DATE_PICKER,
    key: "createdDate",
    label: "Created Date",
    from: "Mon Aug 20 2025 15:01:43 GMT+0700 (Indochina Time)",
    to: "Mon Oct 20 2025 15:01:43 GMT+0700 (Indochina Time)",
  },
];

export const defaultFilters: Record<string, string[]> = {
  skills: [],
  position: [],
  totalExps: [],
  talentLevel: [],
  partners: [],
  availability: [],
  verifiedProfile: [],
  profileStatus: [],
  language: [],
  talentStatus: [],
  internal: [],
  createdDate: [],
};

export type FilterValues = typeof defaultFilters;


