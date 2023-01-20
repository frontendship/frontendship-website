import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';

import {
  PaginationButtonGroupProps,
  PaginationButtonProps,
  PaginationGroupItem,
  PaginationNumberButtonProps,
  PaginationProps
} from '@/components/Pagination/Pagination.types';
import {
  calculatePagination,
  mapPagesToPaginationGroupItems
} from '@/utils/pagination.util';

const ArrowButton: React.FC<PaginationButtonProps> = ({
  onPageClick,
  position,
  content,
  show
}) => {
  const positionClasses: Record<string, string> = {
    left: 'justify-start',
    right: 'justify-end'
  };
  return (
    <div className={`flex flex-1 ${positionClasses[position]}`}>
      {show && (
        <button
          className="flex gap-2 rounded-lg py-2 px-4 text-gray-500 hover:bg-gray-100"
          onClick={() => onPageClick()}
        >
          {content}
        </button>
      )}
    </div>
  );
};

const PaginationNumberButton: React.FC<PaginationNumberButtonProps> = ({
  onPageClick,
  page,
  active
}) => {
  return (
    <button
      className={`rounded-lg py-2 px-4 hover:bg-pink-100 hover:text-pink-400 ${
        active ? 'bg-pink-100 text-pink-600' : 'text-gray-500'
      }`}
      onClick={() => (onPageClick ? onPageClick() : null)}
    >
      {page}
    </button>
  );
};

const PaginationButtonGroup: React.FC<PaginationButtonGroupProps> = ({
  onPageClick,
  pages,
  maxPage,
  current
}) => {
  const [pageItems, setPageItems] = useState<PaginationGroupItem[]>([]);
  const [totalCount, setTotalCount] = useState(pages.length);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const index = pages.findIndex(p => p === current);
    setCenterIndex(index);
    setTotalCount(pages.length);
  }, [pages, current]);

  useEffect(() => {
    setPageItems(
      mapPagesToPaginationGroupItems({
        maxPage,
        pages,
        centerIndex: centerIndex,
        totalCount
      })
    );
  }, [centerIndex, totalCount, pages, maxPage]);

  return (
    <div className="flex flex-1 grow justify-center gap-2">
      {pageItems.map((item, index) => (
        <PaginationNumberButton
          key={index}
          page={item.content}
          active={item.page === current}
          onPageClick={() => onPageClick(item.page)}
        />
      ))}{' '}
    </div>
  );
};

const Pagination: React.FC<PaginationProps> = ({
  onPageClick,
  current,
  total,
  limit = 10
}) => {
  const [isPrevAvailable, setIsPrevAvailable] = useState(false);
  const [isNextAvailable, setIsNextAvailable] = useState(false);
  const [maxPage, setMaxPage] = useState(0);
  const [pages, setPages] = useState<number[]>([current]);

  useEffect(() => {
    setIsPrevAvailable(current > 1);
    setIsNextAvailable(current * limit < total);
    setMaxPage(Math.ceil(total / limit));
    setPages(
      calculatePagination({
        maxPage: maxPage,
        minPage: 1,
        current: current
      })
    );
  }, [maxPage, limit, total, current]);

  return (
    <div className="flex w-full items-center justify-between border-t py-4 px-2">
      <ArrowButton
        position="left"
        show={isPrevAvailable}
        onPageClick={() => onPageClick(current - 1)}
        content={
          <>
            <ArrowLeft></ArrowLeft> Önceki
          </>
        }
      />{' '}
      <PaginationButtonGroup
        pages={pages}
        maxPage={maxPage}
        current={current}
        onPageClick={page => onPageClick(page)}
      />{' '}
      <ArrowButton
        position="right"
        show={isNextAvailable}
        onPageClick={() => onPageClick(current + 1)}
        content={
          <>
            Sonraki <ArrowRight></ArrowRight>
          </>
        }
      />
    </div>
  );
};

export default Pagination;
