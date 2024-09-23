/**
 * Array 與 Tuple(元組)
 * tuple 是固定長度的 array，type 和 value 相互對應，
 * 這些類型在元素的位置上是固定的。
 * 這種嚴格的類型檢查使得 Tuple 在需要確保數據結構的正確性時非常有用。
 * 相反，Array 的類型推斷和靈活性使得它們在需要存儲不同類型和可變長度的數據時更為方便。
 */

const tuple1: [number, string] = [1, "a"];
const tuple2: [string, number] = ['a', 1]; // error -> 不可以改變類型順序
const tuple3: [number, string, number] = [1, 'a', 2]; // error -> 不可以多加類型

tuple1.push("admin");

export { tuple1, tuple2, tuple3 };
