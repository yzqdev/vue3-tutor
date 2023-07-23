import request,{requestApi} from '@/utils/request'
import {FormFields} from "@/components/crudForm/type";

export  function List(data:any)  {
  return request({
    url: '/form/list',
    method: 'post',
    data,
  })
}

export function save(data:FormFields)  {
  return request({
    url: '/form/save',
    method: 'post',
    data,
  })
}
export function deleteMaterial(data:any)  {
  return request({
    url: '/form/delete',
    method: 'post',
    data,
  })
}


export const upload = ()=>{
  return requestApi("/form/upload")
}
