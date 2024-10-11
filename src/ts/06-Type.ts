/**Type（類型）
 * 用來設定單一的 type，像是 number、string 或者更複雜的結構。
 * 可針對單一資料表示更多種類的資料，如 聯合類型（ 使用 | ）和 交叉類型（ 使用 & ）
 * 例如：type MyType = number | string 表示 number 或 string 。
 * 適合場景: 需要定義一個固定的資料結構，或者需要聯合多個類型時。
 */

// 基本型別
type MyType = number | string;

// ------------------------------------------------------------
// 物件型別
type TUserInfo = {
  id: number;
  name: string;
  age: number;
};

const user: TUserInfo = {
  id: 1,
  name: 'Sunny',
  age: 12,
};

// 讓 type 做重複使用
type TJobInfo = {
  baseInfo: TUserInfo;
  job: string;
};

const job: TJobInfo = {
  baseInfo: {
    id: 1,
    name: 'Sunny',
    age: 12,
  },
  job: 'Frontend Engineer',
};

// ------------------------------------------------------------
// 用 & 做交叉類型(交集型別)，新類型必須包含所有合併類型的所有屬性。

type TA = {
  name: string;
  age: number;
};

type TB = {
  sex: string;
  address: string;
};

type TPerson = TA & TB;

const person: TPerson = {
  name: 'Sunny',
  age: 12,
  sex: 'boy',
  address: 'Taiwan',
};

// ------------------------------------------------------------
// 用 | 做聯合類型，新類型可以是任意一個聯合類型中的類型。

type TC = {
  name: string;
  age: number;
};

type TD = {
  sex: string;
  address: string;
};

type TPerson2 = TC | TD;

const person2: TPerson2 = {
  name: 'Sunny',
  age: 12,
};

const person3: TPerson2 = {
  sex: 'boy',
  address: 'Taiwan',
};

// ------------------------------------------------------------
// 函式型別，可以指定參數和回傳值的型別
type TPerson4 = {
  name: string;
  age: number;
};

const person4: TPerson4 = {
  name: 'Sunny',
  age: 30,
};
const greet = (person: TPerson4) => {
  console.log(`我是${person.name}`); // 我是Sunny
};

// ------------------------------------------------------------
// 泛型，可以讓函式更通用，可以接受任意型別的參數，並返回一個相同型別的值。

type Container<T> = {
  value: T;
};
const numberContainer: Container<number> = {
  value: 30,
};

const stringContainer: Container<string> = {
  value: '我是sunny',
};

const numValue: number = numberContainer.value;
console.log(numValue); // 30

const stringValue: string = stringContainer.value;
console.log(stringValue); // 我是sunny
