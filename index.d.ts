import type TupleConsistentType from 'fup-tuple-consistent-type';
import type CurryResultType     from 'fup-curry-result-type';

export type CurryCore <
  ExpectedParameters extends readonly [unknown, unknown, ...unknown[]] = readonly [unknown, unknown, ...unknown[]],
  ExpectedResult     extends          unknown                          = unknown
> = <
    Parameters extends ExpectedParameters,
    Result     extends ExpectedResult,
    Arguments  extends TupleConsistentType<Parameters>,
  > (executor: <X>(...parameters: Parameters) => Result, ...arguments: Arguments) => CurryResultType<Arguments, Parameters, Result>;

/**
 * - We’ll create a helper function `curry(executor);`
 * - that performs currying for a two-argument executor.
 * - In other words, curry(executor)
 * - for two-argument executor(y, x)
 * - translates it into a function that runs as executor(y)(x) or executor(y, x):
 * @param {(y: unknown, x: unknown, ...arguments: unknown[]) => unknown} executor
 * @param {unknown[]} parameters
 * @example
 * const add    = curry((a, b) => a + b); // function (y, x) | (y)(x)
 * const add1   = add(1);                 // function (x) ...
 * const add2   = add(2);                 // function (x) ...
 * const oneOne = add1(1);                // 2
 * const twoOne = add2(1);                // 3
 */
declare const curryCore: CurryCore;

export default curryCore;