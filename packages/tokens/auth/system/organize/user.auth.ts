/** 用户权限标识 */
export enum UserAuth {
  // 查看部门列表
  LIST = 'organize:user:list',
  // 查询部门详情
  SINGLE = 'organize:user:single',
  // 新增部门
  ADD = 'organize:user:add',
  // 修改部门
  EDIT = 'organize:user:edit',
  // 修改部门状态
  EDIT_STATUS = 'organize:user:es',
  // 删除部门
  DELETE = 'organize:user:delete',
  // 用户角色分配
  AUTH = 'organize:user:auth',
  // 用户密码重置
  RES_PWD = 'organize:user:rp',
  // 部门导入
  IMPORT = 'organize:user:import',
  // 部门导出
  EXPORT = 'organize:user:export',
}
