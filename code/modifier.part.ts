import { Nullable } from './modifier.advanced';

type MarkPropsAsOptional<
  T extends object,
  K extends keyof T = keyof T
> = Partial<Pick<T, K>> & Omit<T, K>;

type MarkPropsAsRequired<T extends object, K extends keyof T = keyof T> = Omit<
  T,
  K
> &
  Required<Pick<T, K>>;

type MarkPropsAsNullable<T extends object, K extends keyof T = keyof T> = Omit<
  T,
  K
> &
  Nullable<Pick<T, K>>;
