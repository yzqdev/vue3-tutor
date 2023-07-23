import http from './http'
export function userReposApi(params:string ) {
    return http.get(`/users/${params}/repos`);
}
export function userEventsApi(params: string) {
  return http.get(`/users/${params}/events`);
}