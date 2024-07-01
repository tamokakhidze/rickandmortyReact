export const setItemToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItemFromStorage = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const removeItemFromStorage = (key) => {
  localStorage.removeItem(key);
};
