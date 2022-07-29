import type TupleConsistentType from 'fup-tuple-consistent-type';
import type TupleImpactType     from 'fup-tuple-impact-type';

type CurryResultType <
    Arguments  extends readonly unknown[],
    Parameters extends readonly unknown[],
    Result     extends          unknown = unknown,
> = TupleImpactType<Parameters, Arguments> extends readonly []
    ? Result
    : <NextArguments extends TupleConsistentType<TupleImpactType<Parameters, Arguments>>>(...nextParameters: NextArguments) => CurryResultType<
        [...Arguments, ...NextArguments],
        Parameters,
        Result
    > & {
        length: NextArguments['length']
    };

export default CurryResultType;