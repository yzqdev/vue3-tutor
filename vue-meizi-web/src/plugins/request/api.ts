/**
 * api接口统一管理
 */
import http from "@/plugins/request/http";

export const getWalfare = (data) => {
  return http.post("/welfare", data);
};

export const getWalfareDetail = (data) => {
  return http.post("/welfareDetail", data);
};
