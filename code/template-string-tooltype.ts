type Heavy<T extends string> = `${Uppercase<T>}`;
type Respect<T extends string> = `${Capitalize<T>}`;

type HeavyName = Heavy<'linbudu'>; // "LINBUDU"
type RespectName = Respect<'linbudu'>; // "Linbudu"

// 重映射 re-mapping
type CopyWithRename<T extends object> = {
  [K in keyof T as `modified${Capitalize<string & K>}`]: T[K];
};

interface Foo {
  name: string;
  age: number;
}

// {
//   modifiedName: string;
//   modifiedAge: number;
// }
type CopiedFoo = CopyWithRename<Foo>;

export {};
