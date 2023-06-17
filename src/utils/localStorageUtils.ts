export const setLocalStorageItem = <T>(key: string, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error(`Error setting localStorage item: ${key}`);
  }
};

export const getLocalStorageItem = <T>(key: string): T | null => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    const parsedValue = JSON.parse(serializedValue);
    return parsedValue as T;
  } catch (error) {
    console.error(`Error getting localStorage item: ${key}`);
    return null;
  }
};
