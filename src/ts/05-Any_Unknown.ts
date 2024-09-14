/**any 和 unknown 兩者差異
 * any: 會沒有TS類型安全性的優勢，因為可以執行任何操作，而不需要進行類型檢查。
 * unknown: 可增加類型安全性，強制在使用變量前進行類型檢查。可以避免編譯時期無法檢測到的錯誤。
 */

/**
 * 任意型別 any
 */
let count: any = 3;
count = "3";
count = 5;

const arr: any[] = [1, "a", true]; //陣列內任意型別

/**
 * 未知型別 unknown
 */
const price: unknown = 3.14159;

// 無法用自動推倒，不知道所用型別會報錯
// price.toFixed()

// 需再做型別判斷
if (typeof price === "number") {
  price.toFixed()
}

export { count, arr, price };
