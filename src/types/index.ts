export interface Shift {
  id: string;
  pharmacy: string;
  position: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: string;
  payRate: number;
  totalPay: number;
  unpaidBreak: number;
  location: string;
  status: 'available' | 'booked' | 'completed';
}

export interface FilterOptions {
  date?: string;
  location?: string;
  payRate?: {
    min: number;
    max: number;
  };
  pharmacy?: string;
}

export interface SortOptions {
  field: 'date' | 'payRate' | 'totalPay' | 'duration';
  direction: 'asc' | 'desc';
}

export type ViewMode = 'list' | 'map' | 'calendar';