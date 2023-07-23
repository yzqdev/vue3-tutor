import http from "@/utils/request/http";

export const catApi = {
  getCatList() {
    return http.get("/cat/list");
  },
  getSingleCatApi() {
    return http.get("/cat/single");
  },
};
