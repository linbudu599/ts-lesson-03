type FunctionType = (...args: any) => any;

type FirstParameter<T extends FunctionType> = T extends (
  arg: infer P,
  ...args: any
) => any
  ? P
  : never;

type LastParameter<T extends FunctionType> = T extends (arg: infer P) => any
  ? P
  : T extends (...args: infer R) => any
  ? R extends [...any, infer Q]
    ? Q
    : never
  : never;

type FuncFoo = (arg: number) => void;
type FuncBar = (...args: string[]) => void;
type FuncBaz = (arg1: string, arg2: boolean) => void;

type FooFirstParameter = FirstParameter<FuncFoo>; // number
type BarFirstParameter = FirstParameter<FuncBar>; // string
type BazFirstParameter = FirstParameter<FuncBaz>; // string

type FooLastParameter = LastParameter<FuncFoo>; // number
type BarLastParameter = LastParameter<FuncBar>; // string
type BazLastParameter = LastParameter<FuncBaz>; // boolean

type Awaited<T> = T extends null | undefined
  ? T
  : T extends object & { then(onfulfilled: infer F): any }
  ? F extends (value: infer V, ...args: any) => any
    ? Awaited<V>
    : never
  : T;

export {};
