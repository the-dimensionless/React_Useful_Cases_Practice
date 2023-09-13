import { useCallback, useEffect, useState } from "react"


const useStorage = (key, defaultValue, storageObject) => {
    const [value, setValue] = useState(() => {
        const json = storageObject.getItem(key);

        if (json != null) return JSON.parse(json);

        if (typeof defaultValue === 'function')
            return defaultValue();
        else return defaultValue
    });

    const remove = useCallback(() => setValue(undefined), []);

    useEffect(() => {
        if (value === undefined)
            return storageObject.removeItem(key);
        
        storageObject.setItem(key, JSON.stringify(value));

    }, [key, value, storageObject]);


    return [value, setValue, remove];
}

export const useLocalStorage = (key, defaultValue) => {
    return useStorage(key, defaultValue, window.localStorage);
}

export const useSessionStorage = (key, defaultValue) => {
    return useStorage(key, defaultValue, window.sessionStorage);
}