import { useState, useMemo } from "react";

const usePagination = <T extends object>(data: Array<T>) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);

  const totalPages = Math.ceil(data.length / perPage);
  const hasMore = pageNumber < totalPages;

  const currentData = useMemo(() => {
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
