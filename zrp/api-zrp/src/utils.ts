// TODO: import from bots-builder
export type List<T> = {
  Count: number;
  Items: T[];
};

export type Dictionary<T extends string | number, V> = Record<T, V>;

export type SafeCapitalize<T> = T extends string ? Capitalize<T> : T;

export type AsCSharpType<T> = T extends Array<infer U>
  ? List<AsCSharp<U>>
  : T extends Record<string, infer V>
  ? Dictionary<string, AsCSharp<V>>
  : T extends Record<number, infer V>
  ? Dictionary<number, AsCSharp<V>>
  : T extends object
  ? AsCSharp<T>
  : T;

export type AsCSharp<T> = {
  [P in keyof T as SafeCapitalize<P>]: AsCSharpType<T[P]>;
};
