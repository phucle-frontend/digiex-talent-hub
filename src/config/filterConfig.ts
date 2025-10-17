export interface FilterOption {
  value: string;
  label: string;
  hasDot?: boolean;
  dotColor?: string;
}

export interface FilterField {
  key: string;
  label: string;
  options: FilterOption[];
}

export const filterFields: FilterField[] = [
  {
    key: "nationality",
    label: "Nationality",
    options: [
      { value: "All", label: "All" },
      { value: "Vietnam", label: "Vietnam" },
      { value: "USA", label: "USA" },
      { value: "Japan", label: "Japan" },
    ],
  },
  {
    key: "skills",
    label: "Skills",
    options: [
      { value: "All", label: "All" },
      { value: "React/Typescript", label: "React/Typescript" },
      { value: "Java/SQL", label: "Java/SQL" },
    ],
  },
  {
    key: "status",
    label: "Status",
    options: [
      { value: "All", label: "All" },
      {
        value: "Active",
        label: "Active",
        hasDot: true,
        dotColor: "bg-green-500",
      },
      { value: "Inactive", label: "Inactive" },
    ],
  },
  {
    key: "cvStatus",
    label: "CV Status",
    options: [
      { value: "All", label: "All" },
      {
        value: "Uploaded",
        label: "Uploaded",
        hasDot: true,
        dotColor: "bg-green-500",
      },
      { value: "Unuploaded", label: "Unuploaded" },
    ],
  },
  {
    key: "totalExps",
    label: "Total Exps",
    options: [
      { value: "All", label: "All" },
      { value: "0-1", label: "0-1 Years" },
      { value: "1-3", label: "1-3 Years" },
      { value: "3-5", label: "3-5 Years" },
      { value: "5+", label: "5+ Years" },
    ],
  },
  {
    key: "talentLevel",
    label: "Talent Level",
    options: [
      { value: "All", label: "All" },
      { value: "1", label: "Level 1" },
      { value: "2", label: "Level 2" },
      { value: "3", label: "Level 3" },
      { value: "4", label: "Level 4" },
    ],
  },
  {
    key: "backgroundInterview",
    label: "Background Interview",
    options: [
      { value: "All", label: "All" },
      { value: "1", label: "0.0-1.0" },
      { value: "2", label: "1.0-2.0" },
      { value: "3", label: "2.0-3.0" },
      { value: "4", label: "3.0-4.0" },
      { value: "5", label: "4.0-5.0" },
    ],
  },
  {
    key: "technicalInterview",
    label: "Technical Interview",
    options: [
      { value: "All", label: "All" },
      { value: "1", label: "0.0-1.0" },
      { value: "2", label: "1.0-2.0" },
      { value: "3", label: "2.0-3.0" },
      { value: "4", label: "3.0-4.0" },
      { value: "5", label: "4.0-5.0" },
    ],
  },
  {
    key: "hired",
    label: "Hired",
    options: [
      { value: "All", label: "All" },
      {
        value: "Hired",
        label: "Hired",
        hasDot: true,
        dotColor: "bg-green-500",
      },
      { value: "Not Hired", label: "Not Hired" },
    ],
  },
  {
    key: "profile",
    label: "Profile",
    options: [
      { value: "All", label: "All" },
      { value: "Complete", label: "Complete" },
      { value: "Incomplete", label: "Incomplete" },
    ],
  },
];

export const defaultFilters = {
  nationality: "All",
  skills: "All",
  status: "All",
  cvStatus: "All",
  totalExps: "All",
  talentLevel: "All",
  backgroundInterview: "All",
  technicalInterview: "All",
  hired: "All",
  profile: "All",
} as const;

export type FilterValues = typeof defaultFilters;
