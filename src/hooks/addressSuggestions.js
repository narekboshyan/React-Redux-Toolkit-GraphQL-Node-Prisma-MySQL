import { useMemo, useCallback } from 'react'
import debounce from 'lodash/debounce'
import { useLazyQueryWithOnError } from 'hooks/apollo'
import { PLACE_PREDICTIONS } from 'queries/geo'

const debounce300 = debounce((fn) => fn(), 300)

export const useAddressSuggestions = () => {
  const [getAddressSuggestions, { data, ...rest }] = useLazyQueryWithOnError(PLACE_PREDICTIONS, {
    fetchPolicy: 'no-cache',
  })

  const addressSuggestions = useMemo(() => data?.placePredictions?.data || [], [data])

  const fetchSuggestions = useCallback(
    async (input = '', onBeforeFetch) => {
      if (onBeforeFetch) onBeforeFetch()
      if (typeof input !== 'string') return

      getAddressSuggestions({
        variables: { input },
      })
    },
    [getAddressSuggestions]
  )

  const fetchData = useCallback(
    (...args) => {
      debounce300(async () => fetchSuggestions(...args))
    },
    [fetchSuggestions]
  )

  return {
    data: addressSuggestions,
    fetchData,
    meta: { ...rest },
  }
}

export default { useAddressSuggestions }
