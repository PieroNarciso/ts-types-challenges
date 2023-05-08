type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...any: infer S
) => any
  ? S
  : never;

const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: "A" }): void => {};
const baz = (): void => {};

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];
