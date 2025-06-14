// Images
export const IMAGES = {
  // Hero images
  HERO: "src/images/fed.jpg",
 ABOUT_HEADER: "src/images/fed.jpg",
  SERVICES_HEADER: "src/images/hero.jpg",
  CONTACT_HEADER: "src/images/hero.jpg",
  APPOINTMENT_HEADER: "src/images/hero.jpg",
  FAQ_HEADER: "src/images/hero.jpg",
  PATIENT_INFO_HEADER: "src/images/hero.jpg",
  OUTREACH_HEADER: "src/images/mt.jpg",
  
  
  // Service images
  CHILD_CLINIC: "src/images/ccs.jpg",
  FAMILY_PLANNING: "src/images/mib.jpg",
  COUNSELLING: "src/images/ad.jpg",
  INPATIENT: "src/images/inpas.jpg",
  HIV_TESTING: "src/images/sns.jpg",
  REPRODUCTIVE: "src/images/reps.jpg",
  SURGERIES: "src/images/mns.jpg",
  LABORATORY: "src/images/lbs.jpg",
  SICKLE_CELL: "src/images/scs.jpg",
  
  // Other images
  TEAM_DOCTOR_1: "src/images/dr.jpg",
  TEAM_DOCTOR_2: "src/images/docs.jpg",
  TEAM_NURSE: "src/images/fed.jpg",
  CLINIC_OUTSIDE: "src/images/fed.jpg",
  CLINIC_INSIDE: "src/images/fed.jpg",
  OUTREACH_1: "src/images/scs.jpg",
  OUTREACH_2: "src/images/comms.jpg",
};

// Contact Information
export const CONTACT_INFO = {
  PHONE: "+256 705 451656",
  EMAIL: "thembonehemiya@gmail.com",
  ADDRESS: "Mubende District, Central Uganda",
  HOURS: "24/7",
  LOCATION: { lat: 0.584, lng: 31.371 }, // Approximate coordinates for Mubende
};

// Service descriptions
export const SERVICES = [
  {
    id: "child-clinic",
    title: "Young Child Clinic",
    description: "Comprehensive care for infants and young children including growth monitoring, vaccinations, developmental assessments, and treatment of common childhood illnesses.",
    image: IMAGES.CHILD_CLINIC
  },
  {
    id: "family-planning",
    title: "Family Planning",
    description: "Guidance and resources for family planning options, including counseling on various contraceptive methods tailored to individual needs and preferences.",
    image: IMAGES.FAMILY_PLANNING
  },
  {
    id: "counselling",
    title: "Guidance and Counselling",
    description: "Professional counseling services addressing mental health concerns, life challenges, and wellness strategies to support overall wellbeing.",
    image: IMAGES.COUNSELLING
  },
  {
    id: "inpatient-outpatient",
    title: "Inpatient and Outpatient Services",
    description: "Comprehensive medical care for both hospitalized patients and those receiving care without overnight stays, ensuring continuity of treatment.",
    image: IMAGES.INPATIENT
  },
  {
    id: "hiv-testing",
    title: "HIV Screening and Testing",
    description: "Confidential HIV testing and counseling services with compassionate support and education about prevention and management options.",
    image: IMAGES.HIV_TESTING
  },
  {
    id: "reproductive",
    title: "Reproductive Health",
    description: "Comprehensive reproductive healthcare services including prenatal care, postnatal support, and general gynecological health management.",
    image: IMAGES.REPRODUCTIVE
  },
  {
    id: "surgeries",
    title: "Minor Surgeries",
    description: "Professional surgical procedures for minor conditions performed by our skilled medical team in a safe and sterile environment.",
    image: IMAGES.SURGERIES
  },
  {
    id: "laboratory",
    title: "Laboratory Services",
    description: "Advanced diagnostic testing and laboratory services to support accurate diagnosis and effective treatment planning.",
    image: IMAGES.LABORATORY
  },
  {
    id: "sickle-cell",
    title: "Sickle Cell Management",
    description: "Specialized care for patients with sickle cell disease, including screening, education, counseling, and comprehensive management strategies.",
    image: IMAGES.SICKLE_CELL
  }
];

// FAQs
export const FAQS = [
  {
    question: "What are your operating hours?",
    answer: "Dove Medical Services operates 24 hours a day, 7 days a week to ensure our community has access to healthcare whenever needed."
  },
  {
    question: "Do I need an appointment to see a doctor?",
    answer: "While we do accept walk-in patients for urgent care, we recommend booking an appointment for regular check-ups and consultations to minimize waiting time."
  },
  {
    question: "What insurance plans do you accept?",
    answer: "We work with most major insurance providers. Please contact our billing department for specific information regarding your insurance plan."
  },
  {
    question: "How do I book an appointment?",
    answer: "Appointments can be booked through our online booking system on our website, by calling our reception at +256 705 451656, or in person at our clinic."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring your identification, insurance information (if applicable), a list of current medications, and any relevant medical records or test results."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we provide emergency services 24/7. For life-threatening emergencies, please proceed directly to the nearest emergency room or call for an ambulance."
  },
  {
    question: "What specialist services do you offer?",
    answer: "We offer a range of specialist services including pediatric care, reproductive health, HIV testing and counseling, family planning, and minor surgical procedures."
  },
  {
    question: "How can I get my test results?",
    answer: "Test results are typically discussed during follow-up appointments. For certain tests, results may be available through phone call or secure electronic communication."
  }
];