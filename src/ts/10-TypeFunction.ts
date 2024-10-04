/**函式定義 ( function type 定義 )
 */

// 不需要回傳任何 value 的 function 後面可加上 :void 或不加
const compose = (name: string, age: number): void => {
  const inputTextRef = document.querySelector(".inpTxt") as HTMLInputElement;
  inputTextRef.value = `你好 ${name} ~ 今年 ${age} 歲`;
};

// compose("Sunny", 12);

// ------------------------------------------

// 回傳 string 的 function 後面加上 :string
const composeReturn = (name: string, age: number): string => {
  return `你好 ${name} ~ 今年 ${age} 歲`;
};

function composeReturn2(name: string, age: number): string {
  return `你好 ${name} ~ 今年 ${age} 歲`
}

// const res = composeReturn("Sunny", 12);
// console.log(res);

// ------------------------------------------

// 可以透過定義 input 跟 output 來限制 function 的輸入跟輸出型別
type IHandleNumber = {
  (a: number, b: number): number
};

/* 
interface IHandleNumber = {
  (a: number, b: number): number
} 
*/

const add: IHandleNumber = (a, b) => a + b;
const reduce: IHandleNumber = (a, b) => a - b;

console.log("加:", add(2, 3)); // -> 5
console.log("減:", reduce(6, 3)); // -> 3

// -------------------------------------------

function reverse(x: number | string): number | string {
  return typeof x === "number" ? Number(x.toString().split("").reverse().join("")) : x.split("").reverse().join("");
}
reverse("hello");

// -------------------------------------------

/**返回型別指定為 undefined 時，
 * 需在函式中包含明確的 return 語句。
 */
function addNum2(n1: number, n2: number): number {
  return n1 + n2; // 回傳需指派給類型 'number' ，不可為其他型別否則報錯
}

function printResult(num: number): undefined { // TypeScript 報錯
  console.log(`結果:${num}`); // 結果:17
  return; // 加上 return 解決 TypeScript 錯誤
}

printResult(addNum2(5, 12));

// -------------------------------------------

/**型別斷言
 * 將一個聯合型別的變數指定為一個更加具體的型別
 * 需要斷言的變數前加上 <Type> 即可
 * 型別斷言不是型別轉換，斷言成一個聯合型別中不存在的型別是不允許的
 */
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}

export { compose, composeReturn, composeReturn2, reverse, getLength, add, reduce };
