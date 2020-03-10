import { createAPI } from '@/utils/request.js'

// 获取左侧菜单选项

export const getMenu = () => createAPI('menus', 'GET')
