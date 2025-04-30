export interface User {
  id: string;
  name: string;
  email: string;
  role: 'individual' | 'group_member' | 'org_admin' | 'system_admin';
  avatar?: string;
  lastLogin?: Date;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  members: User[];
  leader: User;
  projects: Project[];
}

export interface Organization {
  id: string;
  name: string;
  description: string;
  address: string;
  contactEmail: string;
  members: User[];
  admins: User[];
  groups: Group[];
  projects: Project[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'planned' | 'in_progress' | 'completed';
  startDate: Date;
  endDate?: Date;
  tasks: Task[];
  members: User[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'not_started' | 'in_progress' | 'completed';
  assignedTo: User;
  dueDate?: Date;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  modules: CourseModule[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  content?: string;
  duration: string;
  progress: number;
  status: 'not_started' | 'in_progress' | 'completed';
  totalParticipants?: number;
  activeParticipants?: number;
}

export interface MapPoint {
  id: string;
  latitude: number;
  longitude: number;
  address: string;
  notes: MapNote[];
  status: 'not_visited' | 'visited' | 'needs_follow_up';
}

export interface MapNote {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  progress: number;
  lastActive: string;
}

export interface RecommendedCourse {
  id: string;
  title: string;
  description: string;
  duration: string;
} 