import { useState } from 'react';

export const useLocalStorage = (key, initalValue) => {
    const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initalValue;
    });


const setValue = value => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
};

return [storedValue, setValue];
}