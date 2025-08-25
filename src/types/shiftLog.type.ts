// types/shift.type.ts - Update atau tambahkan interface ini

export interface ShiftLogData {
  id: number;
  userId: number;
  date: string;
  checkIn: string;
  checkOut: string | null;
}

export interface ShiftApiResponse {
  success: boolean;
  message: string;
  data: ShiftLogData;
}

export interface ShiftLogResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    userId: number;
    date: string;
    checkIn: string;
    checkOut: string | null;
  };
}