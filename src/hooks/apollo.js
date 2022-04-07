import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { DOWNGRADED } from 'constants/pricingPlan'
import { useDispatch, useSelector } from 'react-redux'
import { getCompany } from 'redux/reducers/company/thunks'
import { selectCompany } from 'redux/reducers/company/selector'
import { addSnackbarItem } from 'redux/reducers/snackbar/actions'

export const useMutationWithOnError = (mutation, options = {}) => {
  const dispatch = useDispatch()
  const company = useSelector(selectCompany)
  return useMutation(mutation, {
    onError(e) {
      if (e.message === DOWNGRADED) {
        if (!company.downgraded) {
          dispatch(getCompany)
        }
      } else {
        dispatch(addSnackbarItem(e))
      }
    },
    ...options,
  })
}

export const useQueryWithOnError = (query, optios = {}) => {
  const dispatch = useDispatch()
  const company = useSelector(selectCompany)
  return useQuery(query, {
    onError(e) {
      if (e.message === DOWNGRADED) {
        if (!company.downgraded) {
          dispatch(getCompany)
        }
      } else {
        dispatch(addSnackbarItem(e))
      }
    },
    ...optios,
  })
}

export const useLazyQueryWithOnError = (query, optios = {}) => {
  const dispatch = useDispatch()
  return useLazyQuery(query, {
    onError(e) {
      dispatch(addSnackbarItem(e))
    },
    ...optios,
  })
}
