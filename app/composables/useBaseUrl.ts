export function useBaseUrl() {
  const { app } = useRuntimeConfig()
  const base = app.baseURL.endsWith('/') ? app.baseURL : `${app.baseURL}/`

  function resolveAsset(path: string): string {
    if (!path || /^(https?:)?\/\//i.test(path)) return path
    if (path.startsWith(base)) return path
    return `${base}${path.replace(/^\/+/, '')}`
  }

  return { resolveAsset }
}
