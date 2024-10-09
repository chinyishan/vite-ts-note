/**
 * 列舉 (Enum) 的定義與用途
 * 1. 提高代碼的可讀性與可維護性：
 *  Enum 允許開發者使用有意義的名稱來代替數字或字符串，使得代碼更加直觀且易於理解。
 * 2. 確保類型安全：
 *  Enum 限制了變量的值必須是列舉中定義的一個成員，這樣可以避免使用不正確的值。
 * 3. 支持反向映射：
 *  數字 Enum 支持反向映射，即可以從數字值獲取對應的名稱，這在某些情況下非常有用。
 */

// 星期幾
enum DaysWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getTodaySpecial(day: DaysWeek) {
  switch (day) {
    case DaysWeek.Monday:
      return '星期一大特價: 買一送一!';
    case DaysWeek.Tuesday:
      return '星期二大特價: 三人同行一人免費!';
    case DaysWeek.Wednesday:
      return '星期三大特價: 五折優惠!';
    case DaysWeek.Thursday:
      return '星期四大特價: 三人同行一人免費!';
    case DaysWeek.Friday:
      return '星期五大特價: 五折優惠!';
    case DaysWeek.Saturday:
      return '星期六大特價: 買一送一!';
    case DaysWeek.Sunday:
      return '星期日大特價: 三人同行一人免費!';
    default:
      return '今天沒有特價活動!';
  }
}

console.log(getTodaySpecial(DaysWeek.Monday));

// ------------------------------

// 使用者在線上的裝態
// Offline, // 離線
// Online, // 上線
// leave, // 不在位子上

// 使用者在線上的裝態
enum UserLoginStatus {
  Offline, // 離線
  Online, // 上線
  leave, // 不在位子上
}

function getLOLUserStatus(status: UserLoginStatus) {
  if (status === UserLoginStatus.Online) {
    return '上線';
  } else if (status === UserLoginStatus.Offline) {
    return '離線';
  } else if (status === UserLoginStatus.leave) {
    return '不在位子上';
  }
}

console.log(getLOLUserStatus(UserLoginStatus.Online));

// ------------------------------

// 非同步錯誤代碼
// NotFound = 404,
// Forbidden = 403,
// Unauthorized = 401,

// 非同步錯誤代碼
enum StatusErrorCodes {
  NotFound = 404,
  Forbidden = 403,
  Unauthorized = 401,
}

function handleError(code: number = 0) {
  switch (code) {
    case StatusErrorCodes.NotFound:
      console.log('ERROR: 沒有這個東西');
      return 'ERROR: 沒有這個東西';
    case StatusErrorCodes.Forbidden:
      console.log('ERROR: 禁止存取');
      return 'ERROR: 禁止存取';
    case StatusErrorCodes.Unauthorized:
      console.log('ERROR: 未經授權');
      return 'ERROR: 未經授權';
    default:
      console.log('ERROR: 未知的錯誤');
      return 'ERROR: 未知的錯誤';
  }
}

console.log(handleError(404));
console.log(StatusErrorCodes['Forbidden']); //  ->  403
console.log(StatusErrorCodes[403]); //  ->  Forbidden

export { getTodaySpecial };

// ------------------------------------------

// 其他專案應用 product-detail-platform-frontend
/**
 * 响应码枚举
 */
export const enum ResultEnum {
  /**
   * 成功
   */
  SUCCESS = '200',
  /**
   * 错误
   */
  ERROR = 'B0001',

  /**
   * 令牌无效或过期
   */
  TOKEN_INVALID = 'A0230',
}

// -----------------------------------------

/**
 * 令牌缓存Key
 */
export const TOKEN_KEY = 'accessToken';
