import { User, Group, Organization, Project, Task, Course, CourseModule, MapPoint, MapNote } from '@/types';

// Dummy Users
export const dummyUsers: User[] = [
  { 
    id: '1', 
    name: 'John Doe', 
    email: 'john@example.com',
    role: 'individual' 
  },
  { 
    id: '2', 
    name: 'Jane Smith', 
    email: 'jane@example.com',
    role: 'org_admin' 
  },
  { 
    id: '3', 
    name: 'Mike Brown', 
    email: 'mike@example.com',
    role: 'org_admin' 
  },
  { 
    id: '4', 
    name: 'Sarah Johnson', 
    email: 'sarah@example.com',
    role: 'org_admin' 
  }
];

// Dummy Groups
export const dummyGroups: Group[] = [
  {
    id: '1',
    name: 'Downtown Community Group',
    description: 'A group focused on downtown community initiatives',
    members: [
      dummyUsers[0],
      dummyUsers[1]
    ],
    leader: dummyUsers[0],
    projects: []
  },
  {
    id: '2',
    name: 'Westside Initiative',
    description: 'A group focused on westside neighborhood projects',
    members: [
      dummyUsers[2],
      dummyUsers[3]
    ],
    leader: dummyUsers[2],
    projects: []
  }
];

// Dummy Organizations
export const dummyOrganizations: Organization[] = [
  {
    id: '1',
    name: 'First Baptist Church',
    description: 'A church committed to community transformation',
    address: '123 Main St, Louisville, KY',
    contactEmail: 'info@firstbaptist.org',
    members: [dummyUsers[1], dummyUsers[2]],
    admins: [dummyUsers[1]],
    groups: dummyGroups,
    projects: [],
  },
];

export const dummyCourse: Course = {
  id: 'course-1',
  title: 'Community Leadership Fundamentals',
  description: 'Learn the essentials of community leadership and engagement',
  modules: [
    {
      id: 'module-1',
      title: 'Introduction to Community Engagement',
      description: 'Learn the basics of community engagement and leadership',
      duration: '2 hours',
      status: 'completed',
      progress: 100,
    },
    {
      id: 'module-2',
      title: 'Building Relationships',
      description: 'Develop skills for building strong community relationships',
      duration: '3 hours',
      status: 'completed',
      progress: 100,
    },
    {
      id: 'module-3',
      title: 'Project Planning',
      description: 'Master the art of planning community projects',
      duration: '4 hours',
      status: 'in_progress',
      progress: 60,
    },
    {
      id: 'module-4',
      title: 'Resource Management',
      description: 'Learn to manage community resources effectively',
      duration: '3 hours',
      status: 'not_started',
      progress: 0,
    },
  ],
};

export const dummyProjects: Project[] = [
  {
    id: '1',
    title: 'Community Garden Initiative',
    description: 'Creating a sustainable community garden',
    status: 'in_progress',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31'),
    tasks: [
      {
        id: 'task-1',
        title: 'Site Selection',
        description: 'Identify and evaluate potential garden locations',
        status: 'completed',
        assignedTo: dummyUsers[0],
        dueDate: new Date('2024-02-01'),
      },
      {
        id: 'task-2',
        title: 'Community Survey',
        description: 'Gather community input on garden preferences',
        status: 'in_progress',
        assignedTo: dummyUsers[1],
        dueDate: new Date('2024-03-01'),
      },
      {
        id: 'task-3',
        title: 'Resource Planning',
        description: 'Plan required resources and budget',
        status: 'not_started',
        assignedTo: dummyUsers[2],
        dueDate: new Date('2024-04-01'),
      },
    ],
    members: [dummyUsers[0], dummyUsers[1], dummyUsers[2]],
  },
];

// Dummy Map Points
export const dummyMapPoints: MapPoint[] = [
  {
    id: '1',
    latitude: 38.2527,
    longitude: -85.7585,
    address: '123 Maple St, Louisville, KY',
    notes: [
      {
        id: '1',
        content: 'Initial visit completed. Family interested in community garden.',
        author: dummyUsers[1],
        createdAt: new Date('2023-04-20'),
      },
    ],
    status: 'visited',
  },
  {
    id: '2',
    latitude: 38.2530,
    longitude: -85.7580,
    address: '456 Oak Ave, Louisville, KY',
    notes: [],
    status: 'not_visited',
  },
]; 