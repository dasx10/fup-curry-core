type TupleConsistent<Tuple extends readonly unknown[]> = Tuple extends readonly [...infer StartTupleValues, unknown]
  ? Tuple | TupleConsistent<StartTupleValues>
  : readonly [];

type TupleDeference<
  FirstTuple  extends readonly unknown[],
  SecondTuple extends readonly unknown[]
> = FirstTuple extends readonly [unknown, ...infer TailValuesFirstTuple]
  ? SecondTuple extends readonly [unknown, ...infer TailValuesSecondTuple]
    ? TupleDeference<TailValuesFirstTuple, TailValuesSecondTuple>
    : FirstTuple
  : readonly [];

export type CurryReturnType <
  Arguments extends readonly unknown[],
  Return,
  Parameters extends TupleConsistent<Arguments>
> = TupleDeference<Arguments, Parameters> extends readonly []
  ? Return
  : <NextParameters extends TupleConsistent<TupleDeference<Arguments, Parameters>>>(...nextParameters: NextParameters) => CurryReturnType<
    Arguments, Return,
    // @ts-ignore
    [...Parameters, ...NextParameters]>;

export type Curry = <
  Arguments extends readonly [unknown, unknown, ...unknown[]], Return, Parameters extends TupleConsistent<Arguments>
> (executor: (...arguments: Arguments) => Return, ...parameters: Parameters) => CurryReturnType<Arguments, Return, Parameters>;

declare const curry: Curry;

export default curry;
