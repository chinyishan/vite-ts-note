// 不需要回傳任何 value 的 function 後面可加上 :void 或不加
const compose = (name: string, age: number): void => {
  const inputTextRef = document.querySelector(".inpTxt") as HTMLInputElement;
  inputTextRef.value = `你好 ${name} ~ 今年 ${age} 歲`;
};

// compose("Mike", 12);

// ------------------------------------------

// 回傳 string 的 function 後面加上 :string
const composeReturn = (name: string, age: number): string => {
  return `你好 ${name} ~ 今年 ${age} 歲`;
};

// const res = composeReturn("Mike", 12);
// console.log(res);

// ------------------------------------------

// 可以透過定義 input 跟 output 來限制 function 的輸入跟輸出型別
// type IHandleNumber = {};

// const add = (a, b) => a + b;
// const reduce = (a, b) => a - b;

// console.log("加:", add(2, 3)); // -> 5
// console.log("減:", reduce(6, 3)); // -> 3

// -------------------------------------------

function reverse(x: number | string): number | string {
  return typeof x === "number" ? Number(x.toString().split("").reverse().join("")) : x.split("").reverse().join("");
}
reverse("hello");

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

export { compose, composeReturn, reverse, getLength };
