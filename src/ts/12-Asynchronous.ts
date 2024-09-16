import axios, {AxiosResponse} from "axios";

/**泛型 - 非同步( Asynchronous )處理
 * 常用在封裝打API的方法上。
 * 如果使用Axios 的話，他本身有提供回傳的 Promise 格式「 AxiosResponse 」 可以直接在封裝的時候使用。
 */

// 非同步(Asynchronous)函式

type TPhoto = {
  url: string
}

/**封裝fetch
 * 1. <T>: 傳入外部定義的資料格式
 * 2. Promise<{status: number, data: T}>: 定義 fetch 回傳來的 Promise type
 * 3. response.json() as T: 斷言 return 的出去的資料格式 
 */
async function apiRequest<T>(url: string): Promise<{status: number, data: T}> {
  const response = await fetch(url);
  const data = await response.json() as T;
  return {
    status: response.status,
    data
  }
}

apiRequest<TPhoto[]>("https://vue-lessons-api.vercel.app/photo/list").then((res) => {
  console.log("API then=>", res.data); //可以取得data
});

/**4. <TPhoto[]>: 傳入 return 的資料格式 */
const res = await apiRequest<TPhoto[]>("https://vue-lessons-api.vercel.app/photo/list")
console.log("API await=>", res.data);

/**使用axios */
axios.get<TPhoto[]>("https://vue-lessons-api.vercel.app/photo/list").then((res: AxiosResponse<TPhoto[]>) => {
  console.log("axios=>", res.data); //成功取得後就可使用Array函式
});

function apiGetPhotoList(): Promise<AxiosResponse<TPhoto[]>> {
  return axios.get("https://vue-lessons-api.vercel.app/photo/list");
}

const resPhoto = await apiGetPhotoList();
console.log("photo list=>", resPhoto);
