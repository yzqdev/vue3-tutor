/**
 * api接口统一管理
 */
import http from "./http";
export const apiAddress = (p) =>
  http.postQuery("api/v1/users/my_address/address_edit_before", p);
