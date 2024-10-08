/**Interface（介面）
 * 用途: 定義物件的結構與類別
 * 特點: 可擴充與增加新的屬性和被其他介面或類別調用，允許同一個 interface 在程式中被多次聲明，
 *       並將這些聲明自動合併為單一介面。
 * 適合場景: 當你要定義一個物件類別會經常擴充或改變時。
 */

interface ISunny {
  firstName: string;
  lastName: string;
}

const Sunny: ISunny = { firstName: "Cheng", lastName: "Sunny" };

// -----------------------------

interface IBase {
  name: string;
  age: number;
  address: string;
}
interface IJobInfo {
  job: string;
  baseInfo: IBase;
}

const jobInfo: IJobInfo = {
  job: "Frontend Engineer",
  baseInfo: {
    name: "Sunny",
    age: 18,
    address: "Taipei",
  },
};

// -----------------------------

interface IZip {
  name: string;
  zip: string;
}

interface ICity {
  name: string;
  area: IZip[]; //Array<IZip>
}

const taipei: ICity = {
  name: "新北市",
  area: [
    {
      name: "萬里區",
      zip: "207",
    },
    {
      name: "金山區",
      zip: "208",
    },
  ],
};

// -----------------------------
// 繼承（extends）
//透過 繼承(extends) 把其他 Interface 繼承到某個 Interface

interface IWidth {
  width: string;
}

interface IHeight {
  height: string;
}

interface IBoxFontSize {
  "font-size": string;
  "font-weight": string;
}

interface IBoxStyle extends IWidth, IHeight, IBoxFontSize {
  color: string;
  border: string;
  padding: string;
  margin: string;
}

const box: IBoxStyle = {
  width: "100px",
  height: "100px",
  color: "red",
  border: "4px solid #000",
  padding: "10px",
  margin: "10px",
  "font-size": "16px",
  "font-weight": "bold",
};

// -----------------------------------

/**會自動合併相同名稱的 interface */
interface IData {
  name: string;
}
interface IData {
  age: number;
}

const data: IData = {
  name: "sunny",
  age: 10,
};

// -----------------------------------
// 唯讀屬性（readonly）
interface PersonInterface1 {
  readonly userId: number;
  name: string;
  age: number;
}

const personInterface1: PersonInterface1 = {
  userId: 123,
  name: 'sunny',
  age: 30,
};

// personInterface1.userId = 456; // TypeScript 報錯，userId 為唯讀屬性

// -----------------------------------
// 索引屬性
// 其中可以包含不固定名稱的屬性，並指定它的型別。
interface IStringArray {
  [index: number]: string;
}

const myArray: IStringArray = ["apple", "banana", "cherry"];

interface ErrorContainer1 {
  id: number;
  [key: string]: any;
}

const errorBag1: ErrorContainer1 = {
  id: 123,
  email: '無效的信箱格式',
  isActive: true,
};

// -----------------------------------

