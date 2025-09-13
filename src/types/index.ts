export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'instructor';
  avatar?: string;
  createdAt: Date;
}

export interface Document {
  id: string;
  title: string;
  type: 'pdf' | 'text' | 'video';
  uploadedAt: Date;
  size: number;
  processed: boolean;
  content?: string;
}

export interface Assessment {
  id: string;
  title: string;
  documentId: string;
  questions: Question[];
  createdAt: Date;
  timeLimit?: number;
  attempts: number;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'essay';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  points: number;
}

export interface StudySession {
  id: string;
  userId: string;
  documentId: string;
  startTime: Date;
  endTime?: Date;
  progress: number;
  performance: number;
}

export interface Recommendation {
  id: string;
  userId: string;
  type: 'document' | 'assessment' | 'study-plan';
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}