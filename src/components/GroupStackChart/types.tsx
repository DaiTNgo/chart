export type TestScoreResponseType = {
  label?: string;
  assessmentId: number;
  classesScores: ClassScoreType[];
};

export type ClassScoreType = {
  classId: number;
  assessmentId: number;
  className: string;
  teacher: TeacherType;
  score: number;
  domainScores: DomainScoreType[];
  studentScores: StudentScoreType[];
};

export type TeacherType = {
  userId: number;
  userName: null | string | any;
  password: null | string | any;
  title: null | string | any;
  firstName: string;
  middleName: string;
  lastName: string;
  email: null | string | any;
  schoolId: null | string | any;
  school: null | string | any;
  districtId: null | string | any;
  district: null | string | any;
  roleId: null | string | any;
  role: null | string | any;
  status: null | string | any;
  statusType: null | string | any;
  gradeId: null | string | any;
  grade: null | string | any;
  gradeEs: null | string | any;
  studentId: null | string | any;
  learningStyleId: null | string | any;
  learningStyle: null | string | any;
  createdBy: null | string | any;
  modifiedBy: null | string | any;
  createdDate: null | string | any;
  modifiedDate: null | string | any;
  termsAcceptedStatus: null | string | any;
  termsVersionAccepted: null | string | any;
  termsAcceptedDate: null | string | any;
  stateId: null | string | any;
  assignable: boolean;
  numAssign: number;
  phone: null | string | any;
  userLicenses: null | string | any;
  className: null | string | any;
  classId: null | string | any;
  activationCode: null | string | any;
  activationExpiredDate: null | string | any;
  activationStatus: null | string | any;
  authorized: null | string | any;
  authorizedBy: null | string | any;
  authorizedDate: null | string | any;
  hasParent: boolean;
  lmsId: null | string | any;
  instructorRole: null | string | any;
  avatar: null | string | any;
  avatarSetting: null | string | any;
  languageId: null | string | any;
  spokenLanguage: null | string | any;
  classCode: null | string | any;
  parentNum: null | string | any;
  salesManager: null | string | any;
  linked: null | string | any;
  selected: null | string | any;
  opt: null | string | any;
  optCiu: null | string | any;
  optUpdateStatus: null | string | any;
  googleClassroomId: null | string | any;
  googleRefreshToken: null | string | any;
  fullName: string;
  numOfAssignments: null | string | any;
  accessCode: null | string | any;
  canvasRefreshToken: null | string | any;
  importFromCanvas: boolean;
  canvasImportOption: null | string | any;
  studentAssignmentStatus: null | string | any;
  cleverId: null | string | any;
  emailNotification: null | string | any;
  schoologyOauthKey: null | string | any;
  schoologyId: null | string | any;
  schoologyEnrollmentId: null | string | any;
  userDeviceDTOS: null | string | any;
  mapStatus: {} | any;
  lockAssignmentTemp: boolean;
  assignedByTeacher: boolean;
  allowImpersonation: boolean;
  classNum: null | string | any;
  classNames: null | string | any;
  camelFirstLastName: string;
  searchSchoolUser: boolean;
  resendTeacherVerification: boolean;
  shownHelp: null | string | any;
  needTermAccepted: boolean;
  allowImpersonated: boolean;
  firstLastName: string;
  lastFirstName: string;
  displayName: string;
};

export type DomainScoreType = {
  domainId: number;
  displayOrder: number;
  domainName: string;
  domainCode: string;
  domainColorCode: string;
  percentageScore: number;
  proficiencyLevel: string;
  fillColor: string;
  strokeColor: string;
  limitDomain: boolean;
};

export type StudentScoreType = {
  studentId: number;
  displayName: string;
  firstName: string;
  lastName: string;
  proficiencyLevel: string;
  score: number;
  fillColor: string;
  strokeColor: string;
  domainScores: DomainScoreType[];
};

export type TData = {
  legendGroup: string;
  valueGroup: TBar[];
  growth: number;
};

export type TBar = {
  valueBar: TStack[];
  legendBar: string;
};

export type TStack = {
  percentage: number;
  info: any;
};
