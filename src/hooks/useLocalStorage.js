import { useState, useEffect } from "react";

const PREFIX = "editor-";

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    console.log(localStorage);
    const jasonValue = localStorage.getItem(prefixedKey);

    if (jasonValue != null) {
      return JSON.parse(jasonValue);
    }

    if (typeof initialValue == "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
