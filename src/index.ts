type Result<V, E> = Ok<V> | Err<E>;
type Ok<V> = { ok: true; value: V };
type Err<E> = { ok: false; error: E };

const ok = <V>(value: V): Ok<V> => ({ ok: true, value });
const err = <E>(error: E): Err<E> => ({ ok: false, error });

export type { Result, Ok, Err };
export { ok, err };
