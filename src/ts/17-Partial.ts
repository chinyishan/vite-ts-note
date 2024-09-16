/**全部可選的 Partial 泛型
 * 把所有屬性變成可選 ?:
 * Partial 是使用跑回圈方式去定義
 */

type TUserDataInfo = {
  name: string;
  age: number;
  address: string;
};

/* 
變成以下
type TUserDataInfo = {
  name?: string;
  age?: number;
  address?: string;
};
*/

// 類型 '{ name: string; age: number; }' 缺少屬性 'address'，但類型 'TUserDataInfo' 必須有該屬性。
const user1: Partial<TUserDataInfo> = {
  name: "Sunny",
  age: 12,
};
