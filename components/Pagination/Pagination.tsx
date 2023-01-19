import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';

import {
  PaginationButtonGroupProps,
  PaginationButtonProps,
  PaginationNumberButtonProps,
  PaginationProps
} from '@/components/Pagination/Pagination.types';
import { calculatePagination } from '@/utils/pagination.util';

const PrevButton = (props: PaginationButtonProps) => {
  return (
    <div className="flex flex-1 justify-start">
      {props.show && (
        <button
          className="flex gap-2 rounded-lg py-2 px-4 text-gray-500 hover:bg-gray-100"
          onClick={() => props.onPageClick()}
        >
          <ArrowLeft></ArrowLeft> Önceki
        </button>
      )}
    </div>
  );
};

const NextButton = (props: PaginationButtonProps) => {
  return (
    <div className="flex flex-1 justify-end">
      {props.show && (
        <button
          className="flex gap-2 rounded-lg py-2 px-4 text-gray-500 hover:bg-gray-100"
          onClick={() => props.onPageClick()}
        >
          Sonraki <ArrowRight></ArrowRight>
        </button>
      )}
    </div>
  );
};

const PaginationNumberButton = (props: PaginationNumberButtonProps) => {
  return (
    <button
      className={`rounded-lg py-2 px-4 hover:bg-pink-100 hover:text-pink-400 ${
        props.active ? 'bg-pink-100 text-pink-600' : 'text-gray-500'
      }`}
      onClick={() => (props.onPageClick ? props.onPageClick() : null)}
    >
      {props.page}
    </button>
  );
};

const PaginationButtonGroup = (props: PaginationButtonGroupProps) => {
  const [totalCount, setTotalCount] = useState(props.pages.length);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const index = props.pages.findIndex(p => p === props.current);
    setCenterIndex(index);
    setTotalCount(props.pages.length);
  }, [props.pages, props.current]);

  return (
    <div className="flex flex-1 grow justify-center gap-2">
      {centerIndex > 1 && (
        <>
          <PaginationNumberButton
            active={false}
            page={1}
            onPageClick={() => props.onPageClick(1)}
          />{' '}
          <PaginationNumberButton
            active={false}
            page="..."
            onPageClick={() => props.onPageClick(props.pages[centerIndex - 2])}
          />
        </>
      )}{' '}
      {props.pages.map((page, index) => {
        if (index >= centerIndex - 1 && index <= centerIndex + 1) {
          return (
            <PaginationNumberButton
              key={index}
              active={page === props.current}
              page={page}
              onPageClick={() => props.onPageClick(page)}
            />
          );
        }
      })}{' '}
      {centerIndex < totalCount - 2 && (
        <>
          <PaginationNumberButton
            active={false}
            page="..."
            onPageClick={() => props.onPageClick(props.pages[centerIndex + 2])}
          />{' '}
          <PaginationNumberButton
            active={false}
            page={props.maxPage}
            onPageClick={() => props.onPageClick(props.maxPage)}
          />{' '}
        </>
      )}{' '}
    </div>
  );
};

const Pagination = (props: PaginationProps) => {
  const [isPrevAvailable, setIsPrevAvailable] = useState(false);
  const [isNextAvailable, setIsNextAvailable] = useState(false);
  const [maxPage, setMaxPage] = useState(0);
  const [pages, setPages] = useState<number[]>([props.current]);

  useEffect(() => {
    const limit = props.limit || 10;
    setIsPrevAvailable(props.current > 1);
    setIsNextAvailable(props.current * limit < props.total);
    setMaxPage(Math.ceil(props.total / limit));
    setPages(
      calculatePagination({
        maxPage: maxPage,
        minPage: 1,
        current: props.current
      })
    );
  }, [maxPage, props, props.limit, props.total]);

  return (
    <div className="flex w-full items-center justify-between border-t py-4 px-2">
      <PrevButton
        show={isPrevAvailable}
        onPageClick={() => props.onPageClick(props.current - 1)}
      />{' '}
      <PaginationButtonGroup
        pages={pages}
        maxPage={maxPage}
        current={props.current}
        onPageClick={page => props.onPageClick(page)}
      />{' '}
      <NextButton
        show={isNextAvailable}
        onPageClick={() => props.onPageClick(props.current + 1)}
      />
    </div>
  );
};

export default Pagination;
