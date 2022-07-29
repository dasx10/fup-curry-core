import curryCore from "./source";
import { CurryCore } from "./index.d"

const curry = curryCore as CurryCore
const a  = <X extends string, Y extends string>(x: X, y: Y) => x + y as `${X}${Y}`
const a1 = curry(a, 'ds' as const, '' as const);

const a2 = curry((x: number, y: number) => (x + y), 2, 3);