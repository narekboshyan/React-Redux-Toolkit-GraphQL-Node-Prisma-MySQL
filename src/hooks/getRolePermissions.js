import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectCompany } from 'redux/reducers/company/selector'
import { selectCompanyUser } from 'redux/reducers/companyUser/selector'

export const useGetRolePermissions = () => {
  const companyUser = useSelector(selectCompanyUser)
  const company = useSelector(selectCompany)
  const role = useMemo(() => companyUser.role, [companyUser])
  return useMemo(
    () =>
      company.roles && role
        ? JSON.parse(company.roles).find(({ role: consecutiveRole }) => consecutiveRole.id === role)
            ?.role?.permissions || {}
        : {},
    [company, role]
  )
}
