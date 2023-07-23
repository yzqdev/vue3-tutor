import instance from "@/utils/request/http";

export function petJsonApi(data) {
  return instance.post("/pet/json", data);
}
export function petFormApi(data) {
  return instance.postForm("/pet/form", data);
}
export function petFormdataApi(data) {
  return instance.postFormdata("/pet/formdata", data);
}
