"use client";
import React from "react";
import {
  PaginationWrapper,
  PageButton,
  ArrowButton,
  Dots,
} from "./pagination.styled";
import PagiArrowLeft from "@/assets/icons/pagination-arrow-left.svg";
import PagiArrowRight from "@/assets/icons/pagination-arrow-right.svg";
import PagiArrowLeftDark from "@/assets/icons/pagination-arrow-left-dark.svg";
import PagiArrowRightDark from "@/assets/icons/pagination-arrow-right-dark.svg";
import Image from "next/image";
import Text from "../text/text";
import { useThemeContext } from '@/lib/provider/theme-provider/theme-provider';


type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisible?: number;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 10,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === "light";
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1);

    const half = Math.floor(maxVisible / 2);
    let start = Math.max(2, currentPage - half + 1);
    let end = Math.min(totalPages - 1, currentPage + half - 1);

    if (end - start + 1 < maxVisible - 2) {
      if (start === 2) {
        end = Math.min(totalPages - 1, start + maxVisible - 3);
      } else {
        start = Math.max(2, end - maxVisible + 3);
      }
    }

    if (start > 2) {
      pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <PaginationWrapper>
      <ArrowButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        title="Previous page"
      >
        <Image src={isDark ? PagiArrowLeft : PagiArrowLeftDark} alt="arrow left" />
      </ArrowButton>

      {getVisiblePages().map((page, idx) =>
        typeof page === "string" ? (
          <Dots key={`dots-${idx}`}>...</Dots>
        ) : (
          <PageButton
            key={page}
            $active={page === currentPage}
            onClick={() => onPageChange(page)}
            title={`Go to page ${page}`}
          >
            <Text variant="subtitle" level={3}>
              {page}
            </Text>
          </PageButton>
        )
      )}

      <ArrowButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        title="Next page"
      >
        <Image src={isDark ? PagiArrowRight  : PagiArrowRightDark} alt="arrow right" />
      </ArrowButton>
    </PaginationWrapper>
  );
};

export default Pagination;
