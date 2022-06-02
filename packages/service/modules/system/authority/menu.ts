import { defaultRequest } from '../../../request'
import { MenuIM, MenuLM, MenuPM } from '@admin/types/modules/system'
import { MenuTypeEnum } from '@admin/tokens/enums/system'

enum Api {
  LIST_MENU = '/system/menu/list',
  LIST_MENU_EXCLUDE_NODES = '/system/menu/list/exclude',
  LIST_MENU_BY_TYPE = '/system/menu/routeList',
  LIST_MENU_BY_TYPE_EXCLUDE_NODES = '/system/menu/routeList/exclude',
  GET_MENU = '/system/menu/',
  ADD_MENU = '/system/menu',
  EDIT_MENU = '/system/menu',
  EDIT_STATUS_MENU = '/system/menu/status',
  DEL_BATCH_MENU = '/system/menu/batch/',
}

/** 查询菜单列表 */
export const listMenuApi = (params?: MenuPM) =>
  defaultRequest.get<MenuLM>({ url: Api.LIST_MENU, params })

/** 查询菜单列表（排除节点） */
export const listMenuExNodesApi = (
  id: string | number | undefined,
  moduleId: string | number,
) =>
  defaultRequest.get<MenuLM>({
    url: Api.LIST_MENU_EXCLUDE_NODES,
    params: { id: id, moduleId: moduleId },
  })

/** 根据菜单类型获取指定模块的可配菜单集 */
export const getMenuRouteListApi = (
  moduleId: string | number,
  menuType: MenuTypeEnum,
) =>
  defaultRequest.post<MenuLM>({
    url: Api.LIST_MENU_BY_TYPE,
    params: { moduleId: moduleId, menuType: menuType },
  })

/** 根据菜单类型获取指定模块的可配菜单集（不包含自己及其子集） */
export const getMenuRouteListExNodesApi = (
  id: string | number | undefined,
  moduleId: string | number,
  menuType: MenuTypeEnum,
) =>
  defaultRequest.post<MenuLM>({
    url: Api.LIST_MENU_BY_TYPE_EXCLUDE_NODES,
    params: { id: id, moduleId: moduleId, menuType: menuType },
  })

/** 查询菜单详细 */
export const getMenuApi = (id: string | number) =>
  defaultRequest.get<MenuIM>({ url: Api.GET_MENU, params: id })

/** 新增菜单 */
export const addMenuApi = (params: MenuIM) =>
  defaultRequest.post({ url: Api.ADD_MENU, params })

/** 修改菜单 */
export const editMenuApi = (params: MenuIM) =>
  defaultRequest.put({ url: Api.EDIT_MENU, params })

/** 修改菜单状态 */
export const editStatusMenuApi = (id: string | number, status: any) =>
  defaultRequest.put({
    url: Api.EDIT_STATUS_MENU,
    params: { id: id, status: status },
  })

/** 删除菜单 */
export const delMenuApi = (ids: (string | number) | (string | number)[]) =>
  defaultRequest.delete({ url: Api.DEL_BATCH_MENU, params: ids.toString() })
