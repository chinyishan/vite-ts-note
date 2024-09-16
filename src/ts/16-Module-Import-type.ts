import { TUserBaseType, TUserJobType } from "./type/TUserType.ts"

/**管理 type or Interfaces，型別模組化
 * 避免造成過多定義在同一個檔案
 */

const userData: TUserBaseType & TUserJobType  = {
  name: "Sunny",
  age: 18,
  companyName: "Coding",
  jobTitle: "dog",
  seniority: 3,
  userAddress: "台灣桃園市",
  companyAddress: "台灣台北市",
};

console.log("模組化 type:", userData.companyName);