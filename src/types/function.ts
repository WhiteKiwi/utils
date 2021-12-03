export type Function5<A, B, C, D, E, R> = (a: A, b: B, c: C, d: D, e: E) => R;
export type Function4<A, B, C, D, R> = (a: A, b: B, c: C, d: D) => R;
export type Function3<A, B, C, R> = (a: A, b: B, c: C) => R;
export type Function2<A, B, R> = (a: A, b: B) => R;
export type Function1<A, R> = (a: A) => R;
export type Function0<R> = () => R;
export type Function<
	A,
	B,
	C = undefined,
	D = undefined,
	E = undefined,
	F = undefined,
> = F extends undefined
	? E extends undefined
		? D extends undefined
			? C extends undefined
				? B extends undefined
					? Function0<A>
					: Function1<A, B>
				: Function2<A, B, C>
			: Function3<A, B, C, D>
		: Function4<A, B, C, D, E>
	: Function5<A, B, C, D, E, F>;

export type AsyncFunction<
	A,
	B,
	C = undefined,
	D = undefined,
	E = undefined,
	F = undefined,
> = F extends undefined
	? E extends undefined
		? D extends undefined
			? C extends undefined
				? B extends undefined
					? Function0<Promise<A>>
					: Function1<A, Promise<B>>
				: Function2<A, B, Promise<C>>
			: Function3<A, B, C, Promise<D>>
		: Function4<A, B, C, D, Promise<E>>
	: Function5<A, B, C, D, E, Promise<F>>;
