export const getNestedValue = (obj, path) => {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
};