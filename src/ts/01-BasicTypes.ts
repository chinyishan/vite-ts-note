// typescript 變數宣告型別定義 number string boolean array object
const num: number = 1;

const str: string = "sunny";

const bool: boolean = true;

const arr1: Array<number> = [1, 2, 3]; //陣列泛型 Array<elemType>
const arr2: number[] = [1, 2, 3]; //「型別 + 方括號」表示法
const arr3: Array<string> = ["a", "b", "c"];
const arr4: string[] = ["a", "b", "c"];
const arr5: Array<boolean> = [true, false, true];
const arr6: boolean[] = [true, false, true];
const arr7: Array<number | string> = [1, "a"];
const arr8: Array<Array<number>> = [
  [1, 2],
  [3, 4],
];
const arr9: Array<Array<number | string>> = [
  [1, "a"],
  [2, "b"],
];
const arr10: Array<{ id: number; name: string }> = [
  { id: 1, name: "sunny" },
  { id: 2, name: "jane" },
];
const arr11: Array<{ id: number; name?: string }> = [
  { id: 1, name: "sunny" },
  { id: 2 },
];

// 聯合型別（Union Types），允許變數可以是多個型別之一。使用 | 符號將可能的型別隔開
const arr12: Array<{ id: number; name: string | null | undefined }> = [
  { id: 1, name: "sunny" },
  { id: 2, name: null },
  { id: 3, name: undefined },
];

const obj1: { id: number; name: string } = { id: 1, name: "sunny" };
const obj2: { id: number; name?: string } = { id: 1 };
const obj3: { id: number; name: string | null | undefined } = {
  id: 1,
  name: undefined,
};
const obj4: { id: number; name: string | null | undefined } = {
  id: 1,
  name: null,
};
const obj5: { id: number; name?: string | null | undefined } = { id: 1 };
const obj9: { id: number; name: string | null | undefined } = {
  id: 1,
  name: "sunny",
};
const obj6: { id: number; name: string | null | undefined } = {
  id: 1,
  name: undefined,
};
const obj7: { id: number; name: string | null | undefined } = {
  id: 1,
  name: null,
};
