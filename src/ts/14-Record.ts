/**物件與聯合 Record
 * Record<Keys, Type>
 */
type TBtnKeyAttr = 'create' | 'edit' | 'success' | 'error';
type TBtnValue = '新增' | '修改' | '完成' | '失敗';

// Record<K, T> 會幫建立一個新物件，並且鎖定 key 和 value 的型別
const BtnStatusMap: Record<TBtnKeyAttr, TBtnValue> = {
  create: '新增',
  edit: '修改',
  success: '完成',
  error: '失敗',
};

console.log(BtnStatusMap, 'BtnStatusMap');

// ----------------------------------------------------------
/**Record可以直接丟物件到第二個泛型
 *也可以使用 interface 做定義
 */

// Record 傳入的也可以是物件型別
type IUserInfo = {
  age: number;
  address: string;
};

/* 
interface IUserInfo {
  age: number;
  address: string;
} 
*/

type TPhones = 'sunny' | 'jacky' | 'andy';

type TRecordPhones = Record<TPhones, IUserInfo>;

const subscribersUserInfo: TRecordPhones = {
  sunny: {
    age: 18,
    address: '桃園',
  },
  jacky: {
    age: 20,
    address: '台北',
  },
  andy: {
    age: 22,
    address: '台中',
  },
};

console.log(subscribersUserInfo, 'subscribersUserInfo');

// ------------------------------------

// 其他專案應用 product-detail-platform-frontend

// NonNullable 會移除 null 和 undefind
// ModalType = 'add' | 'edit'
export type ModalType = NonNullable<Props['type']>;

// export type ModalType = Props['type']; // ModalType = 'add' | 'edit' | undefind

export interface Props {
  /** 弹窗可见性 */
  visible: boolean;
  /**
   * 弹窗类型
   * add: 新增
   * edit: 编辑
   */
  type?: 'add' | 'edit';
  /** 编辑的表格行数据 */
  formData?: any | null;
}

const titles: Record<ModalType, string> = {
  add: '新增角色',
  edit: '編輯角色',
};

console.log(titles, 'titles');
