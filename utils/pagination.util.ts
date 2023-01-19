type CalculatePaginationParams = {
  current: number;
  minPage: number;
  maxPage: number;
  maxShownPages?: number;
};

export const calculatePagination = (
  params: CalculatePaginationParams
): number[] => {
  const pages: number[] = [];
  const maxShownPages = params.maxShownPages || 5;
  const minPageNumber = Math.max(
    params.minPage,
    params.current - Math.floor(maxShownPages / 2)
  );
  const maxPageNumber = Math.min(
    params.maxPage,
    params.current + Math.floor(maxShownPages / 2)
  );
  const pagesCount = maxPageNumber - minPageNumber + 1;
  const pagesToAdd = maxShownPages - pagesCount;
  const minPageNumberToAdd = Math.max(
    params.minPage,
    minPageNumber - pagesToAdd
  );
  const maxPageNumberToAdd = Math.min(
    params.maxPage,
    maxPageNumber + pagesToAdd
  );
  for (let i = minPageNumberToAdd; i <= maxPageNumberToAdd; i++) {
    pages.push(i);
  }
  if (pages.length === 0 && params.current > 0) {
    pages.push(params.current);
  }
  return pages;
};
