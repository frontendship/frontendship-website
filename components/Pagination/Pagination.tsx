import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';

import { PaginationProps } from '@/components/Pagination/Pagination.types';

const Pagination = ({
  current,
  total,
  onPageClick,
  limit = 1
}: PaginationProps) => {
  const [isPrevAvailable, setIsPrevAvailable] = useState(false);
  const [isNextAvailable, setIsNextAvailable] = useState(false);
  const [pages, setPages] = useState<number[]>([current]);
  const [centerPage, setCenterPage] = useState(0);

  const calculatePages = (
    page: number,
    total: number,
    limit: number
  ): number[] => {
    const pages: number[] = [];
    const maxPage = Math.ceil(total / limit);
    const minPage = 1;
    const maxPages = 5;
    const minPageNumber = Math.max(minPage, page - Math.floor(maxPages / 2));
    const maxPageNumber = Math.min(maxPage, page + Math.floor(maxPages / 2));
    const pagesCount = maxPageNumber - minPageNumber + 1;
    const pagesToAdd = maxPages - pagesCount;
    const minPageNumberToAdd = Math.max(minPage, minPageNumber - pagesToAdd);
    const maxPageNumberToAdd = Math.min(maxPage, maxPageNumber + pagesToAdd);
    for (let i = minPageNumberToAdd; i <= maxPageNumberToAdd; i++) {
      pages.push(i);
    }
    setCenterPage(
      pages.length % 2 === 0 ? pages.length / 2 : (pages.length + 1) / 2
    );
    if (pages.length === 0 && page > 0) {
      pages.push(page);
    }
    return pages;
  };

  useEffect(() => {
    setIsPrevAvailable(current > 1);
    setIsNextAvailable(current * limit < total);
    setPages(calculatePages(current, total, limit));
  }, [current, limit, total]);

  return (
    <div className="flex w-full items-center justify-between border-t py-4 px-2">
      <div className="flex flex-1 justify-start">
        {isPrevAvailable && (
          <button
            className="flex gap-2 rounded-lg py-2 px-4 text-gray-500 hover:bg-gray-100"
            onClick={() => onPageClick(current - 1)}
          >
            <ArrowLeft></ArrowLeft>
            Önceki
          </button>
        )}
      </div>
      <div className="flex flex-1 grow justify-center gap-2">
        {pages.map((p, index) =>
          p === centerPage && pages.length > 4 ? (
            <button key={index} className="rounded-lg py-2 px-4 text-gray-800">
              ...
            </button>
          ) : (
            <button
              key={index}
              className={`rounded-lg py-2 px-4 text-gray-800 hover:bg-pink-100 hover:text-pink-400 ${
                p === current ? 'bg-pink-100 text-pink-600' : 'text-gray-500'
              }`}
              onClick={() => onPageClick(p)}
            >
              {p}
            </button>
          )
        )}
      </div>
      <div className="flex flex-1 justify-end">
        {isNextAvailable && (
          <button
            className="flex gap-2 rounded-lg py-2 px-4 text-gray-500 hover:bg-gray-100"
            onClick={() => onPageClick(current + 1)}
          >
            Sonraki
            <ArrowRight></ArrowRight>
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
