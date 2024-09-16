/**聯合類型 Extract and Exclude
 * Extract : "選取" 指定內容
 * Exclude : "排除" 指定內容
 */

type TButtonKeyAttr = "create" | "edit" | "success" | "error";

//  Extract 聯合類型 "選取" 指定內容，另外組成新的 type
type TExtractBtnKey = Extract<TButtonKeyAttr, "create" | "success">;

const successUseBtn: TExtractBtnKey[] = ["create", "success"]; 


// Exclude 聯合類型 "排除" 指定內容，另外組成新的 type
type TExcludeBtnKey = Exclude<TButtonKeyAttr, "create" | "success">;

const errorUseBtn: TExcludeBtnKey[] = ["edit", "error"];

