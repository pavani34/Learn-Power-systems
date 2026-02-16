
export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  mathHighlight?: string;
  resources?: string[];
}

export interface DayPlan {
  day: number;
  title: string;
  category: 'Fundamentals' | 'Generation' | 'Analysis' | 'Protection' | 'Control' | 'Modern Grid';
  lessons: Lesson[];
  quiz?: string[];
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
