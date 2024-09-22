# vite-ts-note

## 撰寫TS的基礎觀念

### 型別推斷：
- TS 會根據變數的初始值來推斷其型別，可只針對重要在定義。例如：
```
let x = 10; // x 被推斷為 number 型別
let y = "Hello"; // y 被推斷為 string 型別
```

### 介面（Interfaces）：
- 用於定義物件的結構，確保物件符合特定的結構。
```
interface Person {
  name: string;
  age: number;
}
const person: Person = {
  name: "John",
  age: 30,
}
```

## type 型別定義：
- type 可以定義基本型別、聯合型別、交叉型別，interface 只能定義物件型別。
```
type Name = string;
type Age = number;
type Person = {
  name: Name;
  age: Age;
};  
```

### type 與 interface 的差異：
- type 可以定義基本型別、聯合型別、交叉型別，interface 只能定義物件型別。
- type 可以定義函數型別，interface 不能。
- type 可以定義陣列型別，interface 不能。
- type 可以定義字面量型別，interface 不能。
- type 可以定義泛型型別，interface 不能。
- type 可以定義映射型別，interface 不能。
- type 可以定義索引型別，interface 不能。

### 類別（Classes）：
- 用於定義物件的藍圖，包含屬性和方法。
```
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const dog = new Animal("Buddy");
```

### 泛型（Generics）：
- 允許定義函數、介面或類別時使用類型參數，增加代碼的靈活性和重用性。
```
function identity<T>(arg: T): T {
  return arg;
}

```

##  tsconfig 中的 window 與 document
讓 ts 檔案中可以使用 window 與 document，"lib" 可擴充TS檢查尋別的內容
<a href="https://www.typescriptlang.org/tsconfig#lib">tsconfig lib</a>
- 在 tsconfig.json 中設定 "lib": ["ES2020", "DOM", "DOM.Iterable"]
- 在 tsconfig.json 中設定 "module": "ESNext"
- 在 tsconfig.json 中設定 "moduleResolution": "bundler"
- 在 tsconfig.json 中設定 "allowImportingTsExtensions": true
- 在 tsconfig.json 中設定 "resolveJsonModule": true
- 在 tsconfig.json 中設定 "isolatedModules": true
- 在 tsconfig.json 中設定 "noEmit": true

## 搭配其他第三方套件配置
每一個第三方套件的 type 處理方式都設計的不太一樣，需要詳細參考官方文件來做型別的處理
<a href="https://www.npmjs.com/~types">TS官方提供的套件型別定義檔案</a>
- @types/lodash，TS官方提供 lodash 的型別定義檔案

## 打包設定語法的轉換 vite build.target 與 @types/node 
<a href="https://esbuild.github.io/content-types/">esbuild content-types</a>

- 讓 vite 可以支援 ts 語法
- 使用 esnext保持使用最新的 JS 語法和特性。適合使用者將會在支持最新 ECMAScript 版本的環境中運行。
- 使用 esnext，Vite 不會轉譯任何最新的 JS 語法，因此代碼保留原始語法。
- 保留現代 JS 語法可能對性能有正面影響，因為現代瀏覽器對最新的 ECMAScript 特性通常有更好的優化。
- 如果需要支持較舊的瀏覽器或環境，則可能需要選擇一個更低版本的 ECMAScript 目標，或是一些修復的補丁。
```
build: {
  target: 'esnext',
}
```
TS 不知道 node 的型別，需要另外安裝 @types/node
```
npm install @types/node --save-dev
```

## TypeScript 的 API 串接


##  什麼是 .d.ts ?
.d.ts 文件是 TypeScript 和 JavaScript 之间的桥梁，让 TypeScript 能够理解和检查 JavaScript 代码的类型信息。
- 描述 JavaScript 库的类型信息：为现有的 JavaScript 库提供类型定义，使 TypeScript 能够理解这些库的结构和用法。
- 提供类型安全：让 TypeScript 编译器能够检查代码是否正确使用了外部库的 API。
- 支持模块化：帮助在 TypeScript 中使用模块化的 JavaScript 库，定义模块的导入和导出。
- 不修改原代码：允许为外部库提供类型定义，而无需修改库的原始代码。
- 增强开发体验：提供代码补全、类型检查等功能，提高开发效率。
