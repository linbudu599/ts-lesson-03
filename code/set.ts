type Extract<T, U> = T extends U ? T : never;

type Exclude<T, U> = T extends U ? never : T;

type NonNullable<T> = T extends null | undefined ? never : T;

export {};
