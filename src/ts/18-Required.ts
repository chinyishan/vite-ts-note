/**全部必選的 - Required
 * 把所有的屬性變成必選的
 */

type TUserRequiredInfo = {
  name: string;
  age?: number;
  address?: string;
};

/**類型 '{ name: string; age: number; }' 缺少屬性 'address'，
 * 但類型 'Required<TUserRequiredInfo>' 必須有該屬性。 */
const user3: Required<TUserRequiredInfo> = {
  name: "Sunny",
  age: 12,
  address: "桃園"
};
