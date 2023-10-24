export default function redirect(url: string): never {
  window.location.href = url
  return undefined as never
}
