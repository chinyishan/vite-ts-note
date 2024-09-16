/**Type（類型）
 * 用來設定單一的 type，像是number、string 或者更複雜的結構。
 * 可針對單一資料表示更多種類的資料，如 聯合類型（ 使用 | ）和 交叉類型（ 使用 & ）
 * 例如：type MyType = number | string 表示 number 或 string 。
 * 適合場景: 需要定義一個固定的資料結構，或者需要聯合多個類型時。
 */

type MyType = number | string

type TUserInfo = {
  id: number,
  name: string,
  age: number 
}

const user: TUserInfo = { 
  id: 1,
  name: "Sunny",
  age: 12 
};

// 讓type做重複使用

type TJobInfo = {
  baseInfo: TUserInfo,
  job: string
}

const job = {
  baseInfo: {
    id: 1,
    name: "Sunny",
    age: 12,
  },
  job: "Frontend Engineer",
};


// ------------------------------------------------------------
// 用 & 做聯合類型，型別的組合

type TA = {
  name: string,
  age: number,
}

type TB ={
  sex: string,
  address: string,
}

type TPerson = TA & TB

const person: TPerson = {
  name: "Sunny",
  age: 12,
  sex: "boy",
  address: "Taiwan",
};