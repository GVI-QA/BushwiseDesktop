const baseFormData = {
    firstName: "Automated",
    lastName: "Test",
    email: "automatedtest@gviprograms.com",
    phone: "07123456789",
    country: "United Kingdom",
    birthYear: "1990",
    message: "This is just a test",
  };
  
  export const applyTestData = [
    {
      testName: "Apply for the Bushwise International Field Guide Course",
      formData: {
        ...baseFormData,
        course: "ZABF0039N",
        date: "2025-07-08",
        levelOfEducation: "Graduate degree",
        fieldExperience: "NQF4",
        grantValue: "60%",
      },
    },
    {
      testName: "Apply for the Bushwise 60-day Safari Guide Course",
      formData: {
        ...baseFormData,
        course: "ZABF0038N",
        date: "2025-10-15",
        levelOfEducation: "Undergraduate degree",
        fieldExperience: "Nature Enthusiast",
        grantValue: "80%",
      },
    },
    {
      testName: "Apply for the Bushwise Field Guiding Online Course",
      formData: {
        ...baseFormData,
        course: "ZABF0766M",
        date: "2025-06-30",
        levelOfEducation: "Currently in high school",
        fieldExperience: "Apprentice Trails Guide",
      },
    },
    {
      testName: "Apply for the Nature Enthusiast Online Course",
      formData: {
        ...baseFormData,
        course: "ZABF0765U",
        date: "2025-09-22",
        levelOfEducation: "Other",
        fieldExperience: "Nature Enthusiast",
      },
    },
    {
      testName: "Apply for the Introduction to Field Guiding Online Course",
      formData: {
        ...baseFormData,
        course: "ZABF0764U",
        date: "2025-11-17",
        levelOfEducation: "High school graduate, matric or the equivalent",
        fieldExperience: "None",
      },
    },
  ];
  