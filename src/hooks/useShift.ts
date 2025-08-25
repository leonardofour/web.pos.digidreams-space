// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { checkIn, checkOut, getShiftHistory } from '@/lib/api/shift';

// // Hook untuk get shift history
// export const useShiftHistory = () => {
//   return useQuery({
//     queryKey: ['shiftHistory'],
//     queryFn: getShiftHistory,
//     staleTime: 5 * 60 * 1000, // 5 minutes
//     retry: 2,
//   });
// };

// // Hook untuk check-in mutation
// export const useCheckIn = () => {
//   const queryClient = useQueryClient();
  
//   return useMutation({
//     mutationFn: checkIn,
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries({ queryKey: ['userProfile'] });
//       queryClient.invalidateQueries({ queryKey: ['shiftHistory'] });
//     },
//     onError: (error: Error) => {
//       console.error('Check-in failed:', error);
      
//       if (error.message.includes('Unauthorized')) {
//         // Handle auth error - redirect to login
//         window.location.href = '/login';
//       }
//     },
//   });
// };

// // Hook untuk check-out mutation
// export const useCheckOut = () => {
//   const queryClient = useQueryClient();
  
//   return useMutation({
//     mutationFn: checkOut,
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries({ queryKey: ['userProfile'] });
//       queryClient.invalidateQueries({ queryKey: ['shiftHistory'] });
//     },
//     onError: (error: Error) => {
//       console.error('Check-out failed:', error);
      
//       if (error.message.includes('Unauthorized')) {
//         // Handle auth error - redirect to login
//         window.location.href = '/';
//       }
//     },
//   });
// };