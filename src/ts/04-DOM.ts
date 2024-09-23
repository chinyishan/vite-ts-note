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
