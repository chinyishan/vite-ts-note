/**declare 第三方聲明文件 */

declare global {
  /**
   * 響應數據
   */
  interface ResponseData<T = any> {
    code: string;
    data: T;
    msg: string;
  }
}
