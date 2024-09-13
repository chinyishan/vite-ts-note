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
const price = 3.14159;

export { count, arr, price };
