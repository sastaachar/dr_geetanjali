export const cx = (...names: (string | undefined | null)[]) => {
  return names.join(" ");
}

export const cleanUndefined = <T>(obj: T):T => {
  if (typeof obj !== 'object' || obj === null) return obj;
  const newObj = {} as T;
  for(const key in obj) {
    if (obj[key] !== undefined)  
      newObj[key] = cleanUndefined(obj[key]);
  }
  return newObj;
} 