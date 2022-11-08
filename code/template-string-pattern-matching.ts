type ReverseName<Str extends string> =
  Str extends `${infer First} ${infer Last}`
    ? `${Capitalize<Last>} ${First}`
    : Str;

type ReversedTomHardy = ReverseName<'Tom hardy'>; // "Hardy Tom"
type ReversedLinbudu = ReverseName<'Lin budu'>; // "Budu Lin"

type ReversedRes1 = ReverseName<'Lin Budu 599'>; // "Budu 599 Lin"

declare function handler<Str extends string>(arg: `Guess who is ${Str}`): Str;

handler(`Guess who is Linbudu`); // "Linbudu"
handler(`Guess who is `); // ""
handler(`Guess who is  `); // " "

handler(`Guess who was`); // Error
handler(``); // Error

// ---

type Include<
  Str extends string,
  Search extends string
> = Str extends `${infer _R1}${Search}${infer _R2}` ? true : false;

type IncludeRes1 = Include<'linbudu', 'lin'>; // true
type IncludeRes2 = Include<'linbudu', '_lin'>; // false
type IncludeRes3 = Include<'linbudu', ''>; // true
type IncludeRes4 = Include<' ', ''>; // true
type IncludeRes5 = Include<'', ''>; // false

// ---

type TrimLeft<Str extends string> = Str extends ` ${infer R}`
  ? TrimLeft<R>
  : Str;

type TrimRight<Str extends string> = Str extends `${infer R} `
  ? TrimRight<R>
  : Str;

export type Trim<Str extends string> = TrimLeft<TrimRight<Str>>;

// ---

export type Replace<
  Str extends string,
  Search extends string,
  Replacement extends string
> = Str extends `${infer Head}${Search}${infer Tail}`
  ? `${Head}${Replacement}${Tail}`
  : Str;

// "林不渡也不是不能渡"
type ReplaceRes1 = Replace<'林不渡', '不', '不渡也不是不能'>;
// "林不渡"
type ReplaceRes2 = Replace<'林不渡', '？', '？？'>; //

export type ReplaceAll<
  Str extends string,
  Search extends string,
  Replacement extends string
> = Str extends `${infer Head}${Search}${infer Tail}`
  ? ReplaceAll<`${Head}${Replacement}${Tail}`, Search, Replacement>
  : Str;

// "mmm.linbudu.top"
type ReplaceAllRes1 = ReplaceAll<'www.linbudu.top', 'w', 'm'>;
// "www-linbudu-top"
type ReplaceAllRes2 = ReplaceAll<'www.linbudu.top', '.', '-'>;
