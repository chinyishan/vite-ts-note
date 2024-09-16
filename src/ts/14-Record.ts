
/**物件與聯合 Record
 */
type TBtnKeyAttr = "create" | "edit" | "success"| "error";
type TBtnValue = "新增" | "修改" | "完成" | "失敗";

// Record<K, T> 會幫建立一個新物件，並且鎖定 key 和 value 的型別
const BtnStatusMap: Record<TBtnKeyAttr, TBtnValue> = {
    create: "新增",
    edit: "修改",
    success: "完成",
    error: "失敗"
};
  

// ----------------------------------------------------------
/**Record可以直接丟物件到第二個泛型
 *也可以使用 interface 做定義
 */

// Record 傳入的也可以是物件型別
type IUserInfo = {
  age: number;
  address: string;
}

/* 
interface IUserInfo {
  age: number;
  address: string;
} 
*/

type TPhones = "sunny" | "jacky" | "andy";

type TRecordPhones = Record<TPhones, IUserInfo>;

const subscribersUserInfo: TRecordPhones = {
    sunny: {
      age: 18,
      address: "桃園"
    },
    jacky: {
      age: 20,
      address: "台北"
    },
    andy: {
      age: 22,
      address: "台中"
    }
};