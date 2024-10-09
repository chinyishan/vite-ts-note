/**NonNullable
 * 使用 NonNullable<Type> TypeScript 會返回一個新的類型，該類型不包含 null 和 undefined。
 * NonNullable 會移除 null 和 undefind
 */

// ------------------------------------------

// 從 Product 接口中選擇 id 和 name，確保這些屬性不會是 null 或 undefined。

interface Product {
  id: number;
  name: string | null;
  price: number | null;
}

type EssentialProductInfo = NonNullable<Pick<Product, 'id' | 'name'>>;

const product: EssentialProductInfo = {
  id: 101,
  name: 'Gadget', // `id` 和 `name` 是必需的，不能為空。
  // `price` 不包含在 `EssentialProductInfo` 中。
};

console.log(product, 'product');

// ------------------------------------------

// ModalType = 'add' | 'edit'
export type ModalType = NonNullable<Props['type']>;

// ModalType = 'add' | 'edit' | undefind
// export type ModalType = Props['type'];

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
