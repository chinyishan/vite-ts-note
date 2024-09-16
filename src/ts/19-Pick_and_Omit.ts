/**物件類型 Pick and Omit
 * 可以使用 Pick 來挑選出需要的屬性，另外組成新的 type
 * 使用 Omit 來挑選出不需要的屬性，另外組成新的 type
 */

type TUserAllType = {
  name: string;
  age: number;
  userAddress: string;
  companyName: string;
  jobTitle: string;
  seniority: number;
  companyAddress: string;
};

// Pick 來挑選出需要的屬性，另外組成新的 type
const userBaseType: Pick<TUserAllType, "name" | "userAddress" | "jobTitle"> = {
  name: "Sunny",
  userAddress: "Taiwan",
  jobTitle: "Frontend Engineer",
};

// Omit 來挑選出不需要的屬性，另外組成新的 typ
const userJobType: Omit<TUserAllType, "name" | "age" | "userAddress"> = {
  companyName: "Coding",
  jobTitle: "Dog",
  seniority: 3,
  companyAddress: "台灣台北市",
};

