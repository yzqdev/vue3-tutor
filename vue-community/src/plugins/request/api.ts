/**
 * api接口统一管理
 */
import { getp, postp } from './http'
export const apiAddress = p => postp('api/v1/users/my_address/address_edit_before', p);
