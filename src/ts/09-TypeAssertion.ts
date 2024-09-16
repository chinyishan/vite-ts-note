/**類型斷言（type assertion）
 * 使用 as ，如果確定類型，可以使用斷言告訴ts編譯器它是什麼類型
 * 可針對 未知(null、undefined) 做型別指定，但是若指定錯誤，要deBug會比較難 */
const priceNum: unknown = 3.14159;
const countNun = priceNum as number;
console.log(countNun.toFixed()); // -> '3'


// ------------------------------------------------

/* eslint-disable @typescript-eslint/no-explicit-any */
const strValue: any = "this is a string";
const strLength: number = (strValue as string).length
console.log(strLength);

// ------------------------------------------------

// 這樣就不用處理 null 的部分，因為你確定類型不可能是 null
const titleRef = document.querySelector(".title") as HTMLHeadingElement;
const inpTxtRef = document.querySelector("input.inpTxt") as HTMLInputElement;
const sendRef = document.querySelector(".send") as HTMLButtonElement;
