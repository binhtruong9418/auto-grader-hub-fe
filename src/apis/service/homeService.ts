// mockData.tsexport
const mockStatistics = {
  totalUsers: 15482,
  totalProblems: 847,
  activeContests: 3,
  totalSubmissions: 127365,
  todayActiveUsers: 342,
  todaySubmissions: 1256,
};
export const mockRecentContests = [
  {
    id: 1,
    name: "Weekly Algorithm Contest #45",
    startTime: "2024-02-15 14:00",
    duration: "2 hours",
    status: "ACTIVE",
    participants: 234,
  },
  {
    id: 2,
    name: "Code Masters Challenge",
    startTime: "2024-02-16 10:00",
    duration: "3 hours",
    status: "UPCOMING",
    participants: 156,
  },
  {
    id: 3,
    name: "Data Structures Special",
    startTime: "2024-02-14 15:00",
    duration: "2.5 hours",
    status: "ENDED",
    participants: 412,
  },
  {
    id: 4,
    name: "Frontend Development Contest",
    startTime: "2024-02-18 09:00",
    duration: "4 hours",
    status: "UPCOMING",
    participants: 178,
  },
];
export const mockTopUsers = [
  {
    id: 1,
    name: "AlgoMaster2024",
    score: 15420,
    solved: 423,
    rank: 1,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "CodeNinja",
    score: 14250,
    solved: 389,
    rank: 2,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "ByteWizard",
    score: 13890,
    solved: 376,
    rank: 3,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "DevChampion",
    score: 12760,
    solved: 345,
    rank: 4,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "ProgrammingPro",
    score: 12340,
    solved: 328,
    rank: 5,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];
export const mockRecentActivities = [
  {
    id: 1,
    type: "SUBMISSION",
    title: "AlgoMaster2024 solved 'Binary Tree Maximum Path Sum'",
    time: "5 minutes ago",
    user: "AlgoMaster2024",
    problem: "Binary Tree Maximum Path Sum",
    status: "ACCEPTED",
  },
  {
    id: 2,
    type: "CONTEST_JOIN",
    title: "CodeNinja joined 'Weekly Algorithm Contest #45'",
    time: "15 minutes ago",
    user: "CodeNinja",
    contest: "Weekly Algorithm Contest #45",
  },
  {
    id: 3,
    type: "SUBMISSION",
    title: "ByteWizard solved 'Dynamic Programming Challenge'",
    time: "32 minutes ago",
    user: "ByteWizard",
    problem: "Dynamic Programming Challenge",
    status: "ACCEPTED",
  },
  {
    id: 4,
    type: "PROBLEM_CREATED",
    title: "New problem added: 'Graph Traversal Mastery'",
    time: "1 hour ago",
    problem: "Graph Traversal Mastery",
  },
  {
    id: 5,
    type: "SUBMISSION",
    title: "DevChampion attempted 'SQL Database Design'",
    time: "2 hours ago",
    user: "DevChampion",
    problem: "SQL Database Design",
    status: "WRONG_ANSWER",
  },
  {
    id: 6,
    type: "CONTEST_END",
    title: "Data Structures Special has ended",
    time: "3 hours ago",
    contest: "Data Structures Special",
  },
];
// Additional mock data for enhanced features
export const mockProblemCategories = [
  { name: "Arrays", count: 156 },
  { name: "Strings", count: 134 },
  { name: "Dynamic Programming", count: 98 },
  { name: "Trees", count: 87 },
  { name: "Graphs", count: 76 },
];
export const mockSubmissionStats = {
  accepted: 78234,
  wrongAnswer: 34123,
  timeLimitExceeded: 12543,
  compilationError: 2345,
  runtimeError: 4321,
};
// Weekly submission trend
export const mockWeeklySubmissions = [
  { day: "Mon", submissions: 1234 },
  { day: "Tue", submissions: 2345 },
  { day: "Wed", submissions: 1876 },
  { day: "Thu", submissions: 2789 },
  { day: "Fri", submissions: 3456 },
  { day: "Sat", submissions: 4567 },
  { day: "Sun", submissions: 3234 },
];
const homeService = {
  getStatistics: async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mockStatistics;
  },
  getRecentContests: async () => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return mockRecentContests;
  },
  getTopUsers: async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return mockTopUsers;
  },
  getRecentActivities: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockRecentActivities;
  },
  getProblemCategories: async () => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    return mockProblemCategories;
  },
  getSubmissionStats: async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    return mockSubmissionStats;
  },
  getWeeklySubmissions: async () => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return mockWeeklySubmissions;
  },
};
export default homeService;
