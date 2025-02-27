export function isURL(string: string) {
  if (typeof string !== 'string') return false;

  return string.startsWith('http://') || string.startsWith('https://');
}
