import { createAPI } from '@/utils/request.js'

// 获取用户信息

export const getUserInfo = data => createAPI('login', 'POST', data)
