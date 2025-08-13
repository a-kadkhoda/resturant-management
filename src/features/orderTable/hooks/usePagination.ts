import { useState, useMemo, useEffect } from "react";

const usePagination = <T extends object>(data: Array<T>) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(0); // start at 0 until we know height

  const totalPages = Math.max(1, Math.ceil(data.length / Math.max(1, perPage)));
  const hasMore = pageNumber < totalPages;

  const currentData = useMemo(() => {
    if (perPage <= 0) return []; // no rows until we know height
    const start = (pageNumber - 1) * perPage;
    const end = start + perPage;
    return data.slice(start, end);
  }, [data, pageNumber, perPage]);

  const nextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setPageNumber(page);
    }
  };

  // Reset to page 1 if perPage changes so we don't land on empty page
  useEffect(() => {
    setPageNumber(1);
  }, [perPage]);

  return {
    currentData,
    pageNumber,
    perPage,
    totalPages,
    hasMore,
    setPerPage,
    nextPage,
    prevPage,
    goToPage,
  };
};

export default usePagination;
