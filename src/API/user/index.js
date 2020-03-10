import { createAPI } from '@/utils/request.js'

// 获取用户列表

export const getUserList = data => createAPI('users', 'GET', data)

// 修改用户状态

export const putUserStatus = data => createAPI(`users/${data.id}/state/${data.type}`, 'PUT')

// 搜索用户

export const searchUser = data => createAPI('users/' + data.id, 'GET')

// 编辑用户信息

export const editUserInfo = data => createAPI(`users${data.id}/email${data.email}/mobile${data.mobile}`, 'PUT', data)

//  删除用户

export const deleteUser = data => createAPI(`users/${data.id}`, 'DELETE')

// 分配用户角色

export const roleUser = data => createAPI(`users/${data.id}/role`, 'PUT', data)
