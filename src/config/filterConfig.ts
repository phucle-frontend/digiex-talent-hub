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

export const filterFields = [
  {
    type: 'skills',
    key: 'skills',
    label: 'Skills',
    value: [
      {name: 'Android', yoe: 6, competency: 'EXPERT'},
      {name: 'Angular', yoe: 2, competency: 'ADVANCED'},
      {name: 'React', yoe: 3, competency: 'EXPERT'},
      {name: 'Java', yoe: 4, competency: 'ADVANCED'},
    ]
  },
  {
    type: 'checkboxes',
    key: 'position',
    label: 'Position',
    options: ['3D Artist/Design', 'AI Engineer', 'Backend Engineer', 'Cloud Engineer', 'CTO', 'Data Analyst']
  },
  {
    type: 'range',
    key: 'totalExps',
    label: 'Total Experience',
    from: 0,
    to: 14
  },
   {
    type: 'checkboxes',
    key: 'talentLevel',
    label: 'Level',
    options: [1, 2, 3, 4, 5]
  },
   {
    type: 'checkboxes',
    key: 'partners',
    label: 'Partners',
    options: ['Aloha', 'Manh', 'New Partner']
  },
  {
    type: 'radio',
    key: 'availability',
    label: 'Job Availability',
    options: ['Available', 'Unavailable']
  },
  {
    type: 'radio',
    key: 'verifiedProfile',
    label: 'Verify Profile',
    options: ['Verified', 'Not Verified']
  },
  {
    type: 'radio',
    key: 'profileStatus',
    label: 'Profile Status',
    options: ['Manual', 'Automatic']
  },
   {
    type: 'checkboxes',
    key: 'language',
    label: 'Language',
    options: ['Vietnamese', 'English']
  },
   {
    type: 'checkboxes',
    key: 'talentStatus',
    label: 'Talent Status',
    options: ['Pending', 'Active']
  },
   {
    type: 'radio',
    key: 'internal',
    label: 'Internal',
    options: ['LinkedIn', 'Internal', 'External']
  },
  {
    type: 'date_picker',
    key: 'createdDate',
    label: 'Created Date',
    from: 'Mon Aug 20 2025 15:01:43 GMT+0700 (Indochina Time)',
    to: 'Mon Oct 20 2025 15:01:43 GMT+0700 (Indochina Time)'
  }
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