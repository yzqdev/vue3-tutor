import { EnvModeEnum } from "./type.d"

export const version = "0.01"

export const storagePrefixKey = "V-E-U-A:"

export const appName = "Admin"

export const pageSizesArr = [30, 60, 100]

export const envMode: EnvModeEnum = import.meta.env.MODE as EnvModeEnum

export const isProduction = envMode == EnvModeEnum.Pro

export const minScreenMaxWidth = 1024 //设置小屏幕最大临界值，如果是小屏幕菜单的布局会改变



