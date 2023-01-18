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
