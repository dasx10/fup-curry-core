type TupleImpactType <
    YTuple extends readonly unknown[],
    XTuple extends readonly unknown[]
    > = YTuple extends readonly [unknown, ...infer TailValuesYTuple]
    ? XTuple extends readonly [unknown, ...infer TailValuesXTuple]
        ? TupleImpactType<TailValuesYTuple, TailValuesXTuple>
        : YTuple
    : readonly [];

export default TupleImpactType;