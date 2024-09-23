/** 泛型 ( Generics )
 * 使用時機，不確定 type 是甚麼時，或可接受任意型別丟進函式就可以使用
 * 調用函式需補上 <type>
 */

//「型別 + 方括號」
// const list1: number[] = [1, 2, 3];
//陣列泛型
// const list2: Array<number> = [1, 2, 3];

function resArg<T>(arg: T): T {
  return arg;
}

// const resArg = <T>(arg: T): T => {
//   return arg;
// };

const res1 = resArg<string>('Sunny');
const res2 = resArg<number>(100);

console.log(res1); // -> "Sunny"
console.log(res2); // -> 100

//---------------------------------------------

// string[]、number[]
// <string>(arr: string[]): string
// <number>(arr: number[]): number
function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

const numbers = [1, 2, 3, 4];
const firstNumber = getFirstItem<number>(numbers);
console.log(firstNumber); // => 1

const strings = ['a', 'b', 'c', 'd'];
const firstString = getFirstItem<string>(strings);
console.log(firstString); // => "a"

/**實現一個函式 createArray */
function createArray<T>(length: number, value: T): T[] {
  const result: T[] = [];
  // value = 'aa'; // !錯誤: 不能將 'string' 類型指派給 'T' 類型，确保 value 的类型始终與 T 一致
  for (let i = 0; i < length; i++) {
    result[i] = value; // ?确保 value 的类型始终與 T 一致
  }
  return result;
}

const res3 = createArray(3, 100);
console.log(res3); // => [100, 100, 100]

//---------------------------------------------

/**多個型別引數
 * 可以一次定義多個型別引數
 */
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const res4 = swap([7, "seven"]); // ['seven', 7]
console.log(res4);

//---------------------------------------------

export { createArray };
