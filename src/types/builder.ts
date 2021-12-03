export interface Builder<T> {
	build(...args: any[]): T | Promise<T>;
}
