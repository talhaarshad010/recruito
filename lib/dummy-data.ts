// ============================================================
// Dummy data for the Recruito AI recruitment platform
// ============================================================

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  status: "Active" | "Closed" | "Draft" | "Paused";
  applicants: number;
  posted: string;
  salary: string;
  description: string;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  avatar: string;
  skills: string[];
  resumeScore: number;
  interviewScore: number;
  finalScore: number;
  status: "New" | "Screening" | "Interview" | "Shortlisted" | "Rejected" | "Hired";
  appliedFor: string;
  appliedDate: string;
  experience: string;
  education: string;
  phone: string;
  location: string;
}

export interface Interview {
  id: string;
  candidateName: string;
  candidateAvatar: string;
  jobTitle: string;
  date: string;
  time: string;
  type: "Technical" | "HR" | "Final" | "Cultural Fit";
  status: "Scheduled" | "Completed" | "Cancelled" | "In Progress";
  interviewer: string;
}

export interface Activity {
  id: string;
  type: "application" | "interview" | "hire" | "job" | "evaluation";
  message: string;
  time: string;
  icon: string;
}

export interface Application {
  id: string;
  jobTitle: string;
  company: string;
  appliedDate: string;
  status: "Applied" | "Under Review" | "Interview" | "Offered" | "Rejected";
  logo: string;
}

// Stats
export const dashboardStats = {
  totalJobs: 24,
  totalCandidates: 1847,
  shortlisted: 142,
  interviewsThisWeek: 38,
  hireRate: 12.4,
  avgTimeToHire: 18,
};

// Jobs
export const jobs: Job[] = [
  {
    id: "j1",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    status: "Active",
    applicants: 87,
    posted: "2 days ago",
    salary: "$150k - $200k",
    description: "We are looking for a Senior Frontend Engineer to join our team and help build the next generation of our product.",
  },
  {
    id: "j2",
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    status: "Active",
    applicants: 54,
    posted: "5 days ago",
    salary: "$120k - $160k",
    description: "Join our design team to create beautiful, intuitive user experiences.",
  },
  {
    id: "j3",
    title: "Backend Developer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    status: "Active",
    applicants: 102,
    posted: "1 week ago",
    salary: "$140k - $190k",
    description: "Build scalable backend systems and APIs that power our platform.",
  },
  {
    id: "j4",
    title: "Data Scientist",
    department: "Data",
    location: "Austin, TX",
    type: "Full-time",
    status: "Paused",
    applicants: 63,
    posted: "2 weeks ago",
    salary: "$130k - $180k",
    description: "Apply machine learning and statistical analysis to solve complex business problems.",
  },
  {
    id: "j5",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    status: "Active",
    applicants: 31,
    posted: "3 days ago",
    salary: "$70 - $90/hr",
    description: "Manage cloud infrastructure and CI/CD pipelines.",
  },
  {
    id: "j6",
    title: "Marketing Manager",
    department: "Marketing",
    location: "Chicago, IL",
    type: "Full-time",
    status: "Closed",
    applicants: 45,
    posted: "1 month ago",
    salary: "$100k - $130k",
    description: "Lead marketing campaigns and drive brand awareness.",
  },
  {
    id: "j7",
    title: "UX Researcher",
    department: "Design",
    location: "San Francisco, CA",
    type: "Part-time",
    status: "Draft",
    applicants: 0,
    posted: "Just now",
    salary: "$50 - $70/hr",
    description: "Conduct user research to inform product design decisions.",
  },
  {
    id: "j8",
    title: "Mobile Developer",
    department: "Engineering",
    location: "Seattle, WA",
    type: "Full-time",
    status: "Active",
    applicants: 76,
    posted: "4 days ago",
    salary: "$145k - $195k",
    description: "Build native iOS and Android applications using React Native.",
  },
];

// Candidates
export const candidates: Candidate[] = [
  {
    id: "c1",
    name: "Sarah Chen",
    email: "sarah.chen@email.com",
    avatar: "SC",
    skills: ["React", "TypeScript", "Node.js", "GraphQL"],
    resumeScore: 92,
    interviewScore: 88,
    finalScore: 90,
    status: "Shortlisted",
    appliedFor: "Senior Frontend Engineer",
    appliedDate: "2024-01-15",
    experience: "6 years",
    education: "M.S. Computer Science, Stanford",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
  },
  {
    id: "c2",
    name: "Marcus Johnson",
    email: "marcus.j@email.com",
    avatar: "MJ",
    skills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
    resumeScore: 85,
    interviewScore: 91,
    finalScore: 88,
    status: "Interview",
    appliedFor: "Data Scientist",
    appliedDate: "2024-01-12",
    experience: "4 years",
    education: "Ph.D. Statistics, MIT",
    phone: "+1 (555) 234-5678",
    location: "Boston, MA",
  },
  {
    id: "c3",
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    avatar: "ER",
    skills: ["Figma", "UI/UX", "Prototyping", "User Research"],
    resumeScore: 78,
    interviewScore: 82,
    finalScore: 80,
    status: "Screening",
    appliedFor: "Product Designer",
    appliedDate: "2024-01-18",
    experience: "5 years",
    education: "B.A. Design, RISD",
    phone: "+1 (555) 345-6789",
    location: "New York, NY",
  },
  {
    id: "c4",
    name: "Alex Kim",
    email: "alex.kim@email.com",
    avatar: "AK",
    skills: ["Go", "Kubernetes", "Docker", "AWS"],
    resumeScore: 94,
    interviewScore: 86,
    finalScore: 90,
    status: "Shortlisted",
    appliedFor: "DevOps Engineer",
    appliedDate: "2024-01-10",
    experience: "7 years",
    education: "B.S. Computer Engineering, UC Berkeley",
    phone: "+1 (555) 456-7890",
    location: "Oakland, CA",
  },
  {
    id: "c5",
    name: "Priya Patel",
    email: "priya.p@email.com",
    avatar: "PP",
    skills: ["Java", "Spring Boot", "PostgreSQL", "Redis"],
    resumeScore: 71,
    interviewScore: 65,
    finalScore: 68,
    status: "Rejected",
    appliedFor: "Backend Developer",
    appliedDate: "2024-01-08",
    experience: "3 years",
    education: "B.S. Information Technology, Georgia Tech",
    phone: "+1 (555) 567-8901",
    location: "Atlanta, GA",
  },
  {
    id: "c6",
    name: "David Park",
    email: "david.park@email.com",
    avatar: "DP",
    skills: ["React Native", "Swift", "Kotlin", "Firebase"],
    resumeScore: 88,
    interviewScore: 90,
    finalScore: 89,
    status: "Hired",
    appliedFor: "Mobile Developer",
    appliedDate: "2024-01-05",
    experience: "5 years",
    education: "M.S. Software Engineering, CMU",
    phone: "+1 (555) 678-9012",
    location: "Seattle, WA",
  },
  {
    id: "c7",
    name: "Jessica Thompson",
    email: "jessica.t@email.com",
    avatar: "JT",
    skills: ["Content Strategy", "SEO", "Analytics", "Social Media"],
    resumeScore: 82,
    interviewScore: 79,
    finalScore: 80,
    status: "New",
    appliedFor: "Marketing Manager",
    appliedDate: "2024-01-20",
    experience: "6 years",
    education: "MBA, Wharton",
    phone: "+1 (555) 789-0123",
    location: "Chicago, IL",
  },
  {
    id: "c8",
    name: "Ryan O'Brien",
    email: "ryan.ob@email.com",
    avatar: "RO",
    skills: ["Vue.js", "Nuxt", "CSS", "Accessibility"],
    resumeScore: 76,
    interviewScore: 84,
    finalScore: 80,
    status: "Interview",
    appliedFor: "Senior Frontend Engineer",
    appliedDate: "2024-01-14",
    experience: "4 years",
    education: "B.S. Computer Science, University of Michigan",
    phone: "+1 (555) 890-1234",
    location: "Detroit, MI",
  },
];

// Interviews
export const interviews: Interview[] = [
  {
    id: "i1",
    candidateName: "Sarah Chen",
    candidateAvatar: "SC",
    jobTitle: "Senior Frontend Engineer",
    date: "2024-01-25",
    time: "10:00 AM",
    type: "Technical",
    status: "Scheduled",
    interviewer: "James Wilson",
  },
  {
    id: "i2",
    candidateName: "Marcus Johnson",
    candidateAvatar: "MJ",
    jobTitle: "Data Scientist",
    date: "2024-01-25",
    time: "2:00 PM",
    type: "HR",
    status: "Scheduled",
    interviewer: "Lisa Chang",
  },
  {
    id: "i3",
    candidateName: "Ryan O'Brien",
    candidateAvatar: "RO",
    jobTitle: "Senior Frontend Engineer",
    date: "2024-01-24",
    time: "11:30 AM",
    type: "Technical",
    status: "Completed",
    interviewer: "James Wilson",
  },
  {
    id: "i4",
    candidateName: "Emily Rodriguez",
    candidateAvatar: "ER",
    jobTitle: "Product Designer",
    date: "2024-01-26",
    time: "9:00 AM",
    type: "Cultural Fit",
    status: "Scheduled",
    interviewer: "Maria Santos",
  },
  {
    id: "i5",
    candidateName: "Alex Kim",
    candidateAvatar: "AK",
    jobTitle: "DevOps Engineer",
    date: "2024-01-23",
    time: "3:30 PM",
    type: "Final",
    status: "Completed",
    interviewer: "Tom Harris",
  },
  {
    id: "i6",
    candidateName: "David Park",
    candidateAvatar: "DP",
    jobTitle: "Mobile Developer",
    date: "2024-01-22",
    time: "1:00 PM",
    type: "Technical",
    status: "Completed",
    interviewer: "Sarah Adams",
  },
  {
    id: "i7",
    candidateName: "Jessica Thompson",
    candidateAvatar: "JT",
    jobTitle: "Marketing Manager",
    date: "2024-01-27",
    time: "10:30 AM",
    type: "HR",
    status: "Cancelled",
    interviewer: "Lisa Chang",
  },
];

// Recent Activities
export const recentActivities: Activity[] = [
  {
    id: "a1",
    type: "application",
    message: "Sarah Chen applied for Senior Frontend Engineer",
    time: "2 minutes ago",
    icon: "user-plus",
  },
  {
    id: "a2",
    type: "interview",
    message: "Interview scheduled with Marcus Johnson",
    time: "15 minutes ago",
    icon: "calendar",
  },
  {
    id: "a3",
    type: "hire",
    message: "David Park was hired as Mobile Developer",
    time: "1 hour ago",
    icon: "check-circle",
  },
  {
    id: "a4",
    type: "evaluation",
    message: "AI evaluation completed for 12 candidates",
    time: "2 hours ago",
    icon: "sparkles",
  },
  {
    id: "a5",
    type: "job",
    message: "New job posted: DevOps Engineer",
    time: "3 hours ago",
    icon: "briefcase",
  },
  {
    id: "a6",
    type: "application",
    message: "Ryan O'Brien applied for Senior Frontend Engineer",
    time: "5 hours ago",
    icon: "user-plus",
  },
  {
    id: "a7",
    type: "interview",
    message: "Interview completed with Alex Kim",
    time: "6 hours ago",
    icon: "calendar",
  },
  {
    id: "a8",
    type: "evaluation",
    message: "Resume screening completed for Backend Developer position",
    time: "8 hours ago",
    icon: "sparkles",
  },
];

// Chart Data
export const hiringTrendsData = [
  { month: "Jul", applications: 120, interviews: 45, hires: 8 },
  { month: "Aug", applications: 150, interviews: 52, hires: 11 },
  { month: "Sep", applications: 180, interviews: 68, hires: 14 },
  { month: "Oct", applications: 165, interviews: 58, hires: 10 },
  { month: "Nov", applications: 210, interviews: 75, hires: 16 },
  { month: "Dec", applications: 195, interviews: 70, hires: 13 },
  { month: "Jan", applications: 240, interviews: 88, hires: 18 },
];

export const departmentHiringData = [
  { name: "Engineering", value: 45, fill: "#6366f1" },
  { name: "Design", value: 18, fill: "#8b5cf6" },
  { name: "Marketing", value: 12, fill: "#ec4899" },
  { name: "Data", value: 15, fill: "#14b8a6" },
  { name: "Sales", value: 10, fill: "#f59e0b" },
];

export const applicationSourceData = [
  { source: "LinkedIn", count: 520 },
  { source: "Indeed", count: 380 },
  { source: "Company Website", count: 290 },
  { source: "Referrals", count: 210 },
  { source: "Glassdoor", count: 170 },
  { source: "Other", count: 95 },
];

// Candidate-side applications
export const myApplications: Application[] = [
  {
    id: "ma1",
    jobTitle: "Senior Frontend Engineer",
    company: "TechCorp Inc.",
    appliedDate: "Jan 15, 2024",
    status: "Interview",
    logo: "TC",
  },
  {
    id: "ma2",
    jobTitle: "Full Stack Developer",
    company: "InnovateLabs",
    appliedDate: "Jan 10, 2024",
    status: "Under Review",
    logo: "IL",
  },
  {
    id: "ma3",
    jobTitle: "React Developer",
    company: "DesignStudio",
    appliedDate: "Jan 8, 2024",
    status: "Offered",
    logo: "DS",
  },
  {
    id: "ma4",
    jobTitle: "UI Engineer",
    company: "CloudBase",
    appliedDate: "Jan 5, 2024",
    status: "Applied",
    logo: "CB",
  },
  {
    id: "ma5",
    jobTitle: "Frontend Architect",
    company: "DataFlow",
    appliedDate: "Dec 28, 2023",
    status: "Rejected",
    logo: "DF",
  },
];

// Browse jobs (for candidate side)
export const browseJobs: Job[] = [
  ...jobs.filter((j) => j.status === "Active"),
  {
    id: "bj1",
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    status: "Active",
    applicants: 134,
    posted: "1 day ago",
    salary: "$160k - $220k",
    description: "Build and deploy machine learning models for our AI-powered recruitment platform.",
  },
  {
    id: "bj2",
    title: "Technical Writer",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    status: "Active",
    applicants: 22,
    posted: "3 days ago",
    salary: "$55 - $75/hr",
    description: "Create technical documentation, API guides, and developer resources.",
  },
];
