import storage from 'good-storage'

const UserInfoKey = 'User-Info'

// 设置用户信息
export const setUserInfo = (data: IUserStoreState): void => {
  storage.set(UserInfoKey, data)
}

// 获取用户信息
export function getUserInfo(): IUserStoreState {
  return storage.get(UserInfoKey) || {}
}

// 删除用户信息
export function removeUserInfo(): void {
  storage.remove(UserInfoKey)
}
