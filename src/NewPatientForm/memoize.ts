export const memoize = (fn: (...args: any[]) => any) => {
  const cache = new Map()

  return (...args: any[]) => {
    if (cache.has(args)) {
      return cache.get(args)
    }

    const val = fn(...args)
    cache.set(args, val)

    return val
  }
}
