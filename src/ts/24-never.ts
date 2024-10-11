/** never (絕不)
 * 永遠不會發生的值
 */

// 函式永遠不會返回值，可以將其標記為 never 型別。
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('伺服器發生錯誤', 500);

// ---------------------------------------------------

// 判斷式中的不可能情況

type Scenario = string | number;

function impossibleScenario(value: Scenario) {
  if (typeof value === 'string') {
    throw new Error(`意外的字串值: ${value}`);
  } else if (typeof value === 'number') {
    throw new Error(`意外的數字值: ${value}`);
  } else {
    throw new Error(`未知型別的意外值: ${value}`);
  }
}

impossibleScenario('肉鬆');
