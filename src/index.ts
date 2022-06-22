export type Result<V, E> = Ok<V> | Err<E>;
export type Ok<V> = { ok: true; value: V };
export type Err<E> = { ok: false; error: E };

export const ok = <V>(value: V): Ok<V> => ({ok: true, value});
export const err = <E>(error: E): Err<E> => ({ok: false, error});

export const unwrap = <V>(result: Result<V, any>): unknown extends V ? never : V => {
    if (result.ok) {
        return result.value as any;
    } else {
        throw result.error;
    }
};
