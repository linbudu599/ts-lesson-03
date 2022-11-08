type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type Record<K extends keyof any, T> = {
  [P in K]: T;
};

type Dictionary<T = unknown> = Record<string, T>;

type NumbericDictionary<T> = Record<number, T>;

export {};
