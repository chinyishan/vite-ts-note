/**使用映射型別 (Mapped Types)
 * 鎖定key和value型別
 */

// 這個方法在已知物件的 鍵 和 對應的可能值 時特別有用，使用 in 跑回圈方式
type TStateKeys = 'Offline' | 'Online' | 'leave';

type TLolStateType = {
  [K in TStateKeys]: string;
};

const lolState: TLolStateType = {
  Offline: '離線',
  Online: '在線',
  leave: '離開',
};

// 偷懶的話也可以只鎖定 key 跟 value 的型別，不去鎖定物件的 key
type TLolStateTypeMap = {
  [key: string]: string;
};

// 物件常值只可指定已知的屬性，且類型 'TLolStateType' 中沒有 'nostate'
const lolState2: TLolStateTypeMap = {
  Offline: '離線',
  Online: '在線',
  leave: '離開',
  noState: '不存在',
};

// ----------------------------------------------------------

/**使用泛型Record
 * Record<K, T> 會幫建立一個新物件，並且鎖定 key 和 value 的型別
 * Record 是 TS 內建的高級類型，是透過映射類型的語法來產生索引類型的
 */

type TStateKeyAttr = 'Offline' | 'Online' | 'leave' | 'noState';
type TStateValue = '離線' | '在線' | '離開' | '不存在';

const lolStateMap: Record<TStateKeyAttr, TStateValue> = {
  Offline: '離線',
  Online: '在線',
  leave: '離開',
  noState: '不存在',
};
