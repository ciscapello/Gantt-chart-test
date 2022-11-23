export interface Task {
  id: number;
  title: string;
  period_start: string;
  period_end: string;
  sub?: Task[];
  nestingLevel?: number;
  isShow?: boolean;
}
