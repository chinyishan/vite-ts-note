/**any 和 unknown 兩者差異
 * any: 會沒有TS類型安全性的優勢，因為可以執行任何操作，而不需要進行類型檢查。
 * unknown: 可增加類型安全性，強制在使用變量前進行類型檢查。可以避免編譯時期無法檢測到的錯誤。
 */

/**
 * 任意型別 any
 */
let count: any = 3;
count = '3';
count = 5;

const arr: any[] = [1, 'a', true]; //陣列內任意型別

/**any 處理來自 API 的資料 */
function getApiUserData() {
  return {
    data: {
      name: '肉鬆',
      age: 30,
    },
  };
}
const response: any = getApiUserData(); // 直接訪問 response 的屬性，而不會出現型別錯誤
console.log(response.data.name);

/**any 與第三方函式庫相互操作
 * 函式庫可能不提供型別定義文件，只能使用 any 型別來表示輸入或輸出
 */
declare const externalLibraryFunction: any;
const resultLibrary: any = externalLibraryFunction();
console.log(resultLibrary);

/**any 動態型別的資料處理 */
const data = '{"name": "肉鬆", "age": 30}';
const parsedData: any = JSON.parse(data); // 現在 parsedData 可以包含任何屬性，編輯器不會進行嚴格的型別檢查
console.log(parsedData.name); // 肉鬆

/**
 * 未知型別 unknown
 * 必須先檢查當前儲存在變數中的型別
 */
const price: unknown = 3.14159;

// 無法用自動推倒，不知道所用型別會報錯
// price.toFixed()

// 需再做型別判斷
if (typeof price === 'number') {
  price.toFixed();
}

export { count, arr, price };
