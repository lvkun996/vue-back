import { createAPI } from '@/utils/request.js'

// 获取角色列表

export const getRole = () => createAPI('roles', 'GET')

// 删除角色权限

export const deleteRole = data => createAPI(`roles/${data.roleid}/rights/${data.rightid}`, 'DELETE')

// 分配权限

export const roleAccredit = data => createAPI(`roles/${data.roleId}/rights`, 'POST', data)

// 获取权限列表

export const getRights = data => createAPI(`rights/${data.type}`, 'GET')
