import { useState, useMemo } from 'react';

type UsePaginationProps<T> = {
  data: T[];
  itemsPerPage?: number;
  initialPage?: number;
};

type UsePaginationReturn<T> = {
  currentPage: number;
  totalPages: number;
  currentData: T[];
  totalItems: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  goToFirstPage: () => void;
  goToLastPage: () => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export const usePagination = <T,>({
  data,
  itemsPerPage = 10,
  initialPage = 1,
}: UsePaginationProps<T>): UsePaginationReturn<T> => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = useMemo(() => {
    return Math.ceil(data.length / itemsPerPage);
  }, [data.length, itemsPerPage]);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage]);

  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  const nextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (hasPrevPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);

  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(1);
  }

  return {
    currentPage,
    totalPages,
    currentData,
    totalItems: data.length,
    itemsPerPage,
    setCurrentPage,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    hasNextPage,
    hasPrevPage,
  };
};