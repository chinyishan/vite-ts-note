// DOM 引入
import { titleRef, inpTxtRef, sendRef, myInpTxt } from './04-DOM';
console.log(titleRef, inpTxtRef, sendRef, myInpTxt);

// Function 引入
// import { getLength } from "./10-TypeFunction";
// console.log(getLength("hello"));

import { tuple1 } from './02-Array_Tuple';
console.log(tuple1);

// JS 檔案 引入，避免報錯需在 tsconfig.json 中設定 "allowJs": true & "checkJs": false
import { getRandomInt } from '../lib/randomFn';
const randomInt = getRandomInt(1, 100);
console.log(randomInt);

// 全域引入，在 tsconfig.json 中設定 "include": ["src/**/*.ts"]
const userGlobal: TUserBaseType = {
  name: 'Sunny',
  age: 18,
  userAddress: 'Taipei',
};
console.log(userGlobal);

// window 與 document 直接使用，需在 tsconfig.json 中設定 "lib": ["ES2020", "DOM", "DOM.Iterable"]
// window.document;
