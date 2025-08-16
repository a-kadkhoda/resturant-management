import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  onNext: () => void;
  onPrev: () => void;
  totalPages: number;
  onToPage: (value: number) => void;
  pageNumber: number;
  perPage: number;
  totalRecords: number;
}

const TablePagination: React.FC<PaginationProps> = ({
  onNext,
  onPrev,
  onToPage,
  totalPages,
  pageNumber,
  perPage,
  totalRecords,
}) => {
  const maxPagesToShow = 4;

  const getVisiblePages = () => {
    let startPage = Math.max(1, pageNumber - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    const pages = [];
    for (let page = startPage; page <= endPage; page++) {
      pages.push(page);
    }
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-between bg-transparent size-full px-2">
      <span className="w-full text-sm text-gray-500 font-normal leading-[140%] tracking-[-0.28px]">
        Showing {(pageNumber - 1) * perPage + 1} to{" "}
        {Math.min(pageNumber * perPage, totalRecords)} out of {totalRecords}{" "}
        records
      </span>
      <Pagination className="w-full ">
        <PaginationContent className="w-full flex justify-end">
          <PaginationItem>
            <ChevronLeft onClick={onPrev} className="cursor-pointer" />
          </PaginationItem>

          {visiblePages[0] > 1 && (
            <>
              <PaginationItem>
                <PaginationLink
                  className="cursor-pointer"
                  onClick={() => onToPage(1)}
                  isActive={pageNumber === 1}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              {visiblePages[0] > 2 && <PaginationEllipsis />}
            </>
          )}

          {visiblePages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                className="cursor-pointer"
                onClick={() => onToPage(page)}
                isActive={page === pageNumber}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          {visiblePages[visiblePages.length - 1] < totalPages && (
            <>
              {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
                <PaginationEllipsis />
              )}
              <PaginationItem>
                <PaginationLink
                  className="cursor-pointer"
                  onClick={() => onToPage(totalPages)}
                  isActive={pageNumber === totalPages}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          <PaginationItem>
            <ChevronRight onClick={onNext} className="cursor-pointer" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default TablePagination;
