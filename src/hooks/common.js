import { useCallback, useMemo } from 'react'

export function useCachingDecorator(cb) {
  const cache = useMemo(() => ({}), [])

  const func = useCallback(
    // eslint-disable-next-line func-names
    function (...args) {
      const hash = JSON.stringify(args)
      if (cache.hasOwnProperty(hash)) return cache[hash] // eslint-disable-line no-prototype-builtins

      const result = cb.apply(this, args)
      cache[hash] = result
      return result
    },
    [cache, cb]
  )

  return func
}
