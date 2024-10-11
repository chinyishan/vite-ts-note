/** DOM 型別定義
 * 需要看不同 HTML 的 DOM interface(DOM介面)
 */

export const titleRef: HTMLHeadingElement | null =
  document.querySelector('.title');
export const inpTxtRef: HTMLInputElement | null =
  document.querySelector('input.inpTxt');
export const sendRef: HTMLButtonElement | null =
  document.querySelector('.send');

const input = document.querySelector('input')! as HTMLInputElement;
console.log(input.value);

// ----------------------------------------------------------

// 型別斷言
// 尖括號 <>（angle-bracket）語法
export const myInpTxt = <HTMLInputElement>document.getElementById('inpTxt')!;
myInpTxt.value = 'sunny'; // TypeScript 報錯
// 錯誤一： 'myInpTxt' 可能是 'null'
// 錯誤二： 類型 'HTMLElement' 沒有屬性 'value'

export const myInpTxt2 = document.getElementById('inpTxt')! as HTMLInputElement;
