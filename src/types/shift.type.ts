export interface ShiftData {
  id: number;
  userId: number;
  date: string;
  checkIn: string | null;
  checkOut: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ShiftApiResponse {
  success: boolean;
  message: string;
  data: ShiftData;
  error?: string;
}

export interface CheckInRequest {
  location?: {
    latitude: number;
    longitude: number;
  };
  notes?: string;
}

export interface CheckOutRequest {
  notes?: string;
}