import { createAPI } from '@/utils/request.js'

// 获取角色列表

export const getRole = () => createAPI('roles', 'GET')
