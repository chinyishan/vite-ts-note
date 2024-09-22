/**types 自動引入
 * 全域支援 Glob support in tsconfig.json
 * 使用全域引入的方式，可以直接引入type做引入
 */
// 在 tsconfig.json 中設定 "include": ["src/**/*.ts"] 會直接引入

type TUserBaseType = {
  name: string;
  age: number;
  userAddress: string;
};

type TUserJobType = {
  companyName: string;
  jobTitle: string;
  seniority: number;
  companyAddress: string;
};

// export type { TUserBaseType, TUserJobType };
