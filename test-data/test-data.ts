// Centralize the course and date data
export const courseData = [
  {
    courseCode: "ZABF0039N",
    date: "2025-07-08",
    description: "Bushwise International Field Guide Course"
  },
  {
    courseCode: "ZABF0038N",
    date: "2025-10-15",
    description: "Bushwise 60-day Safari Guide Course"
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
    grantValue: "60%",
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

// Contact form test data with message removed
export const contactFormTestData = {
  ...baseFormData,
  birthYear: undefined
};
