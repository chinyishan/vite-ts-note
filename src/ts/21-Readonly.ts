/**Readonly 讓物件屬性只能讀取，不能修改
 */

type TJobType = {
  companyName: string;
  jobTitle: string;
  seniority: number;
  companyAddress: string;
};


const jobData: Readonly<TJobType> = {
  companyName: "TheCodingPro",
  jobTitle: "Teacher",
  seniority: 3,
  companyAddress: "台灣台北市",
};

// 無法更改jobData內的屬性，因為已經被設定為只能讀取
// Error: 因為 'jobTitle' 為唯讀屬性，所以無法指派至 'jobTitle'。
// jobData.jobTitle = "Engineer";
