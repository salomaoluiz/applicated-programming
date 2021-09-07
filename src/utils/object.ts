export const getDeepKeys = <T extends Record<string, unknown>>(obj: T) => {
  let keys: string[] = [];

  for (const key in obj) {
    keys.push(key);
    if (typeof obj[key] === 'object') {
      const subKeys = getDeepKeys(obj[key] as T);
      keys = keys.concat(
        subKeys.map((subKey) => {
          return `${key}.${subKey}`;
        }),
      );
    }
  }
  return keys as DeepKeys<T>[];
};

export const getDeepLeafKeys = <T extends Record<string, unknown>>(obj: T) => {
  let keys: string[] = [];

  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      const subKeys = getDeepLeafKeys(obj[key] as Record<string, unknown>);
      keys = keys.concat(
        subKeys.map((subKey) => {
          return `${key}.${subKey}`;
        }),
      );
    } else {
      keys.push(key);
    }
  }
  return keys as DeepLeafKeys<T>[];
};

// Types

type Concat<K extends string, P extends string> = `${K}${'' extends P
  ? ''
  : '.'}${P}`;

export type DeepLeafKeys<T> = T extends Record<string, unknown>
  ? { [K in keyof T]-?: Concat<K & string, DeepLeafKeys<T[K]>> }[keyof T]
  : '';

export type DeepKeys<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T]-?: `${K & string}` | Concat<K & string, DeepKeys<T[K]>>;
    }[keyof T]
  : '';

export type DeepValue<
  T extends string,
  O extends Record<string, unknown>,
> = T extends `${infer A}.${infer B}`
  ? O[A] extends Record<string, unknown>
    ? DeepValue<B, O[A]>
    : never
  : O[T];

export type Keys<S extends string> =
  S extends `${string}{{${infer B}}}${infer C}`
    ? C extends `${string}{{${string}}}${string}`
      ? [B, ...Keys<C>]
      : [B]
    : never;
