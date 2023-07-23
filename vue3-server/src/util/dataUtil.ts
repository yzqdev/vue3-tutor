export interface BaseData {
  code: number | string;
  msg: string;
  result: any;
}

export function setResponse(code, msg, data): BaseData {
  return {
    code: code,
    msg: msg,
    result: data,
  };
}
