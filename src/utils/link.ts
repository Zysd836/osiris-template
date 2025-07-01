export const cleanRedirectUrl = (url: string | undefined): string => {
  if (!url) return '/dashboard'
  return url
}
