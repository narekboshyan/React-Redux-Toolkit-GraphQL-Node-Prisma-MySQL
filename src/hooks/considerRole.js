import { useGetRolePermissions } from './getRolePermissions'

export const usePermissionExistence = (permission) => {
  const rolePermissions = useGetRolePermissions()
  return rolePermissions[permission]
}
