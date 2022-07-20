type TupleConsistentType <Tuple extends readonly unknown[]> = Tuple extends readonly [...infer StartValues, unknown]
    ? Tuple | TupleConsistentType<StartValues>
    : readonly [];

export default TupleConsistentType;