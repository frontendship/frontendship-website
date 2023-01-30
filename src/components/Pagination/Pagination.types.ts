import React from 'react';

export type Pagination = {
  current: number;
  limit?: number;
  total: number;
};

// eslint-disable-next-line no-unused-vars
type PaginationCallback = (current: number) => void;

export type PaginationProps = Pagination & {
  onPageClick: PaginationCallback;
};

export type PaginationButtonProps = {
  content: React.ReactNode;
  show: boolean;
  position: 'left' | 'right';
  onPageClick: () => void;
};

export type PaginationButtonGroupProps = {
  pages: number[];
  current: number;
  maxPage: number;
  onPageClick: PaginationCallback;
};

export type PaginationNumberButtonProps = {
  page: number | string;
  active: boolean;
  onPageClick?: () => void;
};

export type PaginationGroupItem = {
  content: number | string;
  show: boolean;
  page: number;
};
