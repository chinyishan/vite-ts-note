/** 泛型 ( Generics )
 * 使用時機，不確定 type 是甚麼時，或可接受任意型別丟進函式就可以使用
 * 調用函式需補上 <type>
 */
function resArg<T>(arg: T): T {
  return arg;
}

// const resArg = <T>(arg: T): T => {
//   return arg;
// };

const res1 = resArg<string>("Sunny");
const res2 = resArg<number>(100);

console.log(res1); // -> "Sunny"
console.log(res2); // -> 100

//---------------------------------------------

// string[]、number[]
function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

const numbers = [1, 2, 3, 4];
const firstNumber = getFirstItem<number>(numbers);
console.log(firstNumber); // => 1

const strings = ["a", "b", "c", "d"];
const firstString = getFirstItem<string>(strings);
console.log(firstString); // => "a"
