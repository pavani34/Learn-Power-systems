
export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
}

export interface DayPlan {
  day: number;
  title: string;
  category: 'Fundamentals' | 'Generation' | 'Analysis' | 'Protection' | 'Control' | 'Modern Grid';
  lessons: Lesson[];
  quiz?: string[]; // Questions
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Progress {
  completedDays: number[];
  currentDay: number;
  quizScores: Record<number, number>;
}
