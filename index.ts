export type Result<V, E> = Ok<V> | Err<E>;
export type Ok<V> = { ok: true; value: V };
export type Err<E> = { ok: false; error: E };

export const ok = <V>(value: V): Ok<V> => ({ok: true, value});
export const err = <E>(error: E): Err<E> => ({ok: false, error});