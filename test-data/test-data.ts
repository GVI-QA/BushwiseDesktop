// Centralize the course and date data
export const courseData = [
  {
    courseCode: "ZABF0039N",
    date: "2025-07-08",
    description: "IFGA Professional Safari Guide Course - 6/12 months"
  },
  {
    courseCode: "ZABF0046N",
    date: "2025-07-08",
    description: "IFGA Safari Guide & Conservation Course - 12 months"
  },
  {
    courseCode: "ZABF0038N",
    date: "2025-10-15",
    description: "IFGA Professional Safari Guide Short Course - 2 months"
  },
  {
    courseCode: "ZABF0047N",
    date: "2025-07-27",
    description: "Trails Guide Course - 35 days"
  },
  {
    courseCode: "ZABF0044N",
    date: "2025-11-14",
    description: "IFGA Safari Guide Training Experience - 7-28 days"
  },
  {
    courseCode: "ZABF0045N",
    date: "2025-11-01",
    description: "Safari Guide Training Taster - 3 days"
  },
  {
    courseCode: "ZABF0766M",
    date: "2025-06-30",
    description: "Bushwise Field Guiding Online Course"
  },
  {
    courseCode: "ZABF0765U",
    date: "2025-09-22",
    description: "Nature Enthusiast Online Course"
  },
  {
    courseCode: "ZABF0764U",
    date: "2025-11-17",
    description: "Introduction to Field Guiding Online Course"
  },
];

// Base form data for both apply and enquire tests
const baseFormData = {
  firstName: "Automated",
  lastName: "Test",
  email: "automatedtest@gviprograms.com",
  phone: "07123456789",
  country: "United Kingdom",
  birthYear: "1990",
  message: "This is just a test",
};

// Apply test data with additional fields
export const applyTestData = courseData.map(({ courseCode, date, description }) => ({
  testName: `Apply for the ${description}`,
  formData: {
    ...baseFormData,
    course: courseCode,
    date,
    levelOfEducation: "Graduate degree",
    fieldExperience: "NQF4",
    grantValue: "20%",
  },
}));

// Enquire test data using base and course data
export const enquireTestData = courseData.map(({ courseCode, date, description }) => ({
  testName: `Enquire about the ${description}`,
  formData: {
    ...baseFormData,
    course: courseCode,
    date,
  },
}));

// Generic form data for download and virtual open day tests
export const formTestData = {
  ...baseFormData,
  message: undefined,
  birthYear: undefined,
};

// Contact form test data
export const contactFormTestData = {
  ...baseFormData,
  birthYear: undefined
};
// Contact Us Recruitment form test data
interface ContactUsFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country?: string;
  message: string;
  birthYear?: undefined;
  interestedIn: "Services for Lodges" | "Services for Professionals";
}

export const contactUsRecruitmentLodgesTestData: ContactUsFormData = {
  ...baseFormData,
  birthYear: undefined,
  country: undefined,
  interestedIn: "Services for Lodges"
};

export const contactUsRecruitmentProfessionalsTestData: ContactUsFormData = {
  ...baseFormData,
  birthYear: undefined,
  country: undefined,
  interestedIn: "Services for Professionals"
};

// Lodge forms test data
export interface LodgeFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  lodgeName: string;
  message: string;
  roleLookingFor?: string; 
  roleUrgency?: "ASAP" | "It's not urgent" | "Yesterday"
}

export const baseLodgeFormData: LodgeFormData = {
  ...baseFormData,
  lodgeName: "Test Lodge",
  roleLookingFor: "Field Guide",
  roleUrgency: "ASAP",
};

export const lodgeFormSlugs = [
  { path: "/lodges/permanent-roles", hasRoleFields: true },
  { path: "/lodges/short-term-cover", hasRoleFields: true },
  { path: "/lodges/all-in-one", hasRoleFields: false },
  { path: "/lodges/graduate-placements", hasRoleFields: false },
  { path: "/lodges/on-site-training", hasRoleFields: false },
  { path: "/lodges/ifga-assessments", hasRoleFields: false },
  { path: "/lodges/team-audit", hasRoleFields: false },
  { path: "/lodges/guide-academy", hasRoleFields: false },
  { path: "/lodges/fractional-head-guide", hasRoleFields: false }
];
