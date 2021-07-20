export function serializeQueryParams(obj: any): string {
  const str = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== undefined) {
      str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }
  }

  return str.join("&");
}
