import {useState} from "react";

const useLocalStorage = (key, initialValue) => {

  const [storedValue, setStoreValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item): initialValue;
  });
  return [storedValue];


  const setValue = value => {
    setStoreValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
};

export default useLocalStorage;
