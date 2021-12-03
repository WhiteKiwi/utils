export type Function<T extends any[], R> = (...args: T) => R;
export type AsyncFunction<T extends any[], R> = (...args: T) => Promise<R>;
