interface Pager {
  readonly page: number;
  readonly total: number;
  readonly limit: number;
  readonly offset: number;
  readonly pageTotal: number;
}

export interface Pagination<T> {
  readonly rows: Array<T>;
  readonly total: number;
  readonly pager: Pager;
}
